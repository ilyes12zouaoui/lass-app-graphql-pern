const _ = require("lodash");

module.exports = {
  user: async (parent, { where }, { prisma, req }) => {
    let userExisting = await prisma.$exists.user(where);

    if (!userExisting) throw Error("there is no user with that id");

    return await prisma.user(where);
  },
  users: async (parent, args, { prisma, req }) => {
    return await prisma.users(args);
  }
};
