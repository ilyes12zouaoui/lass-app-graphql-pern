const passwordHash = require("../../helpers/passwordHash");
const generateJWT = require("../../helpers/generateJWT");
const sendEmail = require("../../helpers/email/SendEmail");
const { EMAIL_TEMPLETES } = require("../../helpers/email/ConfigsProd");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const { ROLES, TOKEN_TYPES } = require("../../configs");
const generateRandomToken = require("../../helpers/generateRandomToken");

module.exports = {
  createUser: async (parent, { data }, { prisma }) => {
    let emailAlreadyExisting = await prisma.$exists.user({
      email: data.email
    });

    if (emailAlreadyExisting)
      throw Error("we have another account with that same email address");

    if (data.telephone) {
      let telephoneAlreadyExisting = await prisma.$exists.user({
        telephone: data.telephone
      });

      if (telephoneAlreadyExisting)
        throw Error("we have another account with that same telephone number");
    }
    let createUserData = {
      ..._.omit(data, ["passwordConfirmation", "password"]),
      password: await passwordHash(data.password),
      role: ROLES.SIMPLE
    };

    const user = await prisma.createUser(createUserData);

    //creating activation token

    let createTokenData = {
      type: TOKEN_TYPES.ACCOUNT_ACTIVATION,
      value: generateRandomToken(),
      user: { connect: { id: user.id } }
    };
    const token = await prisma.createToken(createTokenData);

    sendEmail(user, token.value, EMAIL_TEMPLETES.ACCOUNT_ACTIVATION);
    //creating the user
    return user;
  },

  createAdmin: async (parent, { data }, { prisma }) => {
    let emailAlreadyExisting = await prisma.$exists.user({
      email: data.email
    });

    if (emailAlreadyExisting)
      throw Error("we have another account with that same email address");
    if (data.telephone) {
      let telephoneAlreadyExisting = await prisma.$exists.user({
        telephone: data.telephone
      });

      if (telephoneAlreadyExisting)
        throw Error("we have another account with that same telephone number");
    }
    data.isActive = true;
    let createUserData = {
      ..._.omit(data, ["passwordConfirmation", "password"]),
      password: await passwordHash(data.password),
      role: ROLES.ADMIN
    };

    const user = await prisma.createUser(createUserData);

    //creating the admin
    return user;
  },
  loginUser: async (parent, { data }, { prisma, req }) => {
    //getting the user with provided email
    let user = await prisma.user({
      email: data.email
    });
    //validation
    if (!user) throw new Error("e-mail ou mot de passe est fausse");

    //comparing user real password with the input password
    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) throw new Error("e-mail ou mot de passe est fausse");

    if (!user.isActive) throw new Error("your account is inactive ");

    if (user.isBanned)
      throw new Error(
        "you are banned, you may send a message at the contact us page"
      );

    user = await prisma.updateUser({
      where: {
        email: user.email
      },
      data: {
        isOnline: true,
        lastLoginTime: new Date()
      }
    });
    //generating the jwt token and returning it
    return {
      jwt: generateJWT(_.omit(user, ["password", "isActive", "isOnline"]))
    };
  },

  // loginAdmin: async (parent, { data }, { prisma, req }) => {
  //   //getting the user with provided email
  //   let user = await prisma.users({
  //     where: { email: data.email, role: ROLES.ADMIN }
  //   });
  //   //validation
  //   if (_.isEmpty(user)) throw new Error("e-mail ou mot de passe est fausse");
  //   user = user[0];
  //   //comparing user real password with the input password
  //   const isMatch = await bcrypt.compare(data.password, user.password);

  //   if (!isMatch) throw new Error("e-mail ou mot de passe est fausse");

  //   await prisma.updateUser({
  //     where: {
  //       email: user.email
  //     },
  //     data: {
  //       isOnline: true,
  //       lastLoginTime: new Date()
  //     }
  //   });
  //   //generating the jwt token and returning it
  //   return {
  //     jwt: generateJWT(_.omit(user, ["password", "isActive", "isOnline"]))
  //   };
  // },
  logout: async (parent, args, { prisma, req }) => {
    //getting the user with provided email

    if (!req.user) throw Error("Unauthenticated");

    //validation
    await prisma.updateUser({
      where: {
        id: req.user.id
      },
      data: {
        isOnline: false,
        lastLogoutTime: new Date()
      }
    });
    //generating the jwt token and returning it
    return true;
  },
  activateAccount: async (parent, { data: { token } }, { prisma }) => {
    let tokenExists = await prisma.tokens({
      where: {
        value: token,
        type: TOKEN_TYPES.ACCOUNT_ACTIVATION
      }
    });
    if (_.isEmpty(tokenExists)) throw new Error("wrong activation token");

    let user = await prisma.token({ value: token }).user();

    await prisma.updateUser({
      where: {
        id: user.id
      },
      data: {
        isActive: true
      }
    });
    await prisma.deleteToken({
      value: token
    });

    return true;
  },
  resendAccountActivationEmail: async (
    parent,
    { data: { email } },
    { prisma }
  ) => {
    let emailAlreadyExisting = await prisma.$exists.user({
      email
    });

    if (!emailAlreadyExisting)
      throw Error("there is no account with that email address");

    let user = await prisma.user({ email });

    let token = await prisma.tokens({
      where: {
        AND: [{ type: TOKEN_TYPES.ACCOUNT_ACTIVATION }, { user: { email } }]
      }
    });
    if (_.isEmpty(token)) {
      token = await prisma.createToken({
        type: TOKEN_TYPES.ACCOUNT_ACTIVATION,
        value: generateRandomToken(),
        user: { connect: { id: user.id } }
      });
    } else {
      token = token[0];
    }
    sendEmail(user, token.value, EMAIL_TEMPLETES.ACCOUNT_ACTIVATION);

    return true;
  },
  resendResetPasswordEmail: async (parent, { data: { email } }, { prisma }) => {
    let emailAlreadyExisting = await prisma.$exists.user({
      email
    });

    if (!emailAlreadyExisting)
      throw Error("there is no account with that email address");

    let user = await prisma.user({ email });

    let token = await prisma.tokens({
      where: {
        AND: [{ type: TOKEN_TYPES.RESET_PASSWORD }, { user: { email } }]
      }
    });

    if (_.isEmpty(token)) {
      token = await prisma.createToken({
        type: TOKEN_TYPES.RESET_PASSWORD,
        value: generateRandomToken(),
        user: { connect: { id: user.id } }
      });
    } else {
      token = token[0];
    }
    sendEmail(user, token.value, EMAIL_TEMPLETES.RESET_PASSWORD);

    return true;
  },

  resetPasswordChechToken: async (parent, { data: { token } }, { prisma }) => {
    let tokenExists = await prisma.tokens({
      where: {
        value: token,
        type: TOKEN_TYPES.RESET_PASSWORD
      }
    });
    if (_.isEmpty(tokenExists)) throw new Error("wrong reset password token");
    return true;
  },
  resetPasswordUsingToken: async (parent, { data }, { prisma }) => {
    let tokenExists = await prisma.tokens({
      where: {
        value: data.token,
        type: TOKEN_TYPES.RESET_PASSWORD
      }
    });
    if (_.isEmpty(tokenExists)) throw new Error("wrong activation token");
    let user = await prisma.token({ value: data.token }).user();

    await prisma.updateUser({
      where: {
        id: user.id
      },
      data: {
        password: await passwordHash(data.password)
      }
    });

    await prisma.deleteToken({
      value: data.token
    });

    return true;
  },
  changeUserRoleToStaff: async (parent, { data }, { prisma, req }) => {
    if (!req.user || (req.user && req.user.role != "ADMIN"))
      throw new Error("you are not authenticated or you're not an admin!");

    return await prisma.updateUser({
      where: {
        id: data.id
      },
      data: {
        role: ROLES.STAFF
      }
    });
  },
  changeUserRoleToSimple: async (parent, { data }, { prisma, req }) => {
    if (!req.user || (req.user && req.user.role != "ADMIN"))
      throw new Error("you are not authenticated or you're not an admin!");

    return await prisma.updateUser({
      where: {
        id: data.id
      },
      data: {
        role: ROLES.SIMPLE
      }
    });
  },
  banUser: async (parent, { data }, { prisma, req }) => {
    if (!req.user || (req.user && req.user.role != "ADMIN"))
      throw new Error("you are not authenticated or you're not an admin!");

    return await prisma.updateUser({
      where: {
        id: data.id
      },
      data: {
        isBanned: true
      }
    });
  },
  unbanUser: async (parent, { data }, { prisma, req }) => {
    if (!req.user || (req.user && req.user.role != "ADMIN"))
      throw new Error("you are not authenticated or you're not an admin!");

    return await prisma.updateUser({
      where: {
        id: data.id
      },
      data: {
        isBanned: false
      }
    });
  }
};
