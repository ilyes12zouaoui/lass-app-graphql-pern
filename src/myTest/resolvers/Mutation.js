module.exports = {
  myTest: async (parent, arg, { prisma }) => {
    let result = await prisma.$exists.publication({
      AND: [
        { id: "5d39dcc824aa9a0007068f37" },
        { user: { id: "5d37ca1224aa9a0007c5da3e" } }
      ]
    });
    console.log("result of myTest", result);
    return "aaa";
  }
};
