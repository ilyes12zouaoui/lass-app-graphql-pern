module.exports = {
  claims: async (parent, { where }, { prisma }) => {
    return await prisma.claim({ where });
  }
};
