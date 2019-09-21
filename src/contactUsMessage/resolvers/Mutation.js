module.exports = {
  createContactUsMessage: async (parent, { data }, { prisma, req }) => {
    // if (!req.user || req.user.role != "ADMIN") throw Error("Unauthenticated");
    // if (!req.user) throw Error("Unauthenticated");

    // let exists = await prisma.$exists.contactUsMessage(data);
    // console.log("il exists !", _.isEmpty(exists), exists, data);

    return await prisma.createContactUsMessage(data);
  },
  updateContactUsMessage: async (parent, { data, where }, { prisma, req }) => {
    if (!req.user || req.user.role != "ADMIN") throw Error("Unauthenticated");

    let exists = await prisma.$exists.contactUsMessage(where);
    if (exists)
      throw new Error("we hane another publication category with same name");

    return await prisma.updateContactUsMessage({
      data,
      where
    });
  },
  deleteContactUsMessage: async (parent, { where }, { prisma, req }) => {
    if (!req.user || req.user.role != "ADMIN") throw Error("Unauthenticated");
    let exists = await prisma.$exists.contactUsMessage(where);
    if (!exists) throw new Error("no publication with that id was find");

    return await prisma.deleteContactUsMessage(where);
  }
};
