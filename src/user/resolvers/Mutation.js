const generateJWT = require("../../helpers/generateJWT");
const passwordHash = require("../../helpers/passwordHash");
const updateFile = require("../../helpers/file/updateFile");
const _ = require("lodash");
module.exports = {
  updateUserInformations: async (parent, { data }, { prisma, req }) => {
    if (!req.user) throw new Error("you are not authenticated !");
    if (data.telephone && data.telephone != req.user.telephone) {
      let telephoneAlreadyExisting = await prisma.$exists.user({
        telephone: data.telephone
      });

      if (telephoneAlreadyExisting)
        throw Error("we have another account with that same telephone number");
    }
    const user = await prisma.updateUser({
      where: { id: req.user.id },
      data
    });
    return {
      jwt: generateJWT(_.omit(user, ["password", "isActive", "isOnline"]))
    };
  },
  updatePassword: async (parent, { data }, { prisma, req }) => {
    if (!req.user) throw new Error("you are not authenticated !");
    await prisma.updateUser({
      where: { id: req.user.id },
      data: {
        password: await passwordHash(data.password)
      }
    });
    return true;
  },
  updateProfilePicture: async (parent, { data, file }, { prisma, req }) => {
    if (!req.user) throw new Error("you are not authenticated !");
    const { createReadStream, filename, mimetype, encoding } = await file;

    const stream = createReadStream();
    //saving image and generating unique
    let newFileName = await updateFile(
      req.user.image,
      "user",
      stream,
      filename,
      "user"
    );
    const user = await prisma.updateUser({
      where: { id: req.user.id },
      data: {
        image: newFileName
      }
    });

    return {
      jwt: generateJWT(_.omit(user, ["password", "isActive", "isOnline"]))
    };
  }
};
