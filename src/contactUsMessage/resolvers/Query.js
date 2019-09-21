module.exports = {
  contactUsMessages: async (parent, { where }, { prisma }) => {
    return await prisma.contactUsMessages({ where });
  }
};
