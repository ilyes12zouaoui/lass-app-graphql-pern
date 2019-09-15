module.exports = {
  createClaim: async (parent, { data }, { prisma, req }) => {
    if (!req.user || req.user.role != "ADMIN") throw Error("Unauthenticated");
    let exists = await prisma.$exists.claim({ name: data.name });
    // console.log("il exists !", _.isEmpty(exists), exists, data);
    if (exists)
      throw new Error("we hane another publication category with same name");
    return await prisma.createClaim({
      name: data.name
    });
  },
  updateClaim: async (parent, { data, where }, { prisma, req }) => {
    if (!req.user || req.user.role != "ADMIN") throw Error("Unauthenticated");

    let exists = await prisma.$exists.claim({ name: data.name });
    if (exists)
      throw new Error("we hane another publication category with same name");

    return await prisma.updateClaim({
      data: {
        name: data.name
      },
      where
    });
  },
  deleteClaim: async (parent, { where }, { prisma, req }) => {
    if (!req.user || req.user.role != "ADMIN") throw Error("Unauthenticated");
    let exists = await prisma.$exists.claim(where);
    if (!exists) throw new Error("no publication with that id was find");

    return await prisma.deleteClaim(where);
  }
};
