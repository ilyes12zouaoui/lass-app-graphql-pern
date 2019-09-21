const { merge, isEmpty } = require("lodash");
const mergerByNameFunction = require("../helpers/mergeResolverByName");
//creating Query, Mutation, Subscription Resolvers
let resolvers = {};

mergerByNameFunction(resolvers, "authentication");
mergerByNameFunction(resolvers, "user");
mergerByNameFunction(resolvers, "contactUsMessage");

// mergerByNameFunction(resolvers, "myTest");

//addint Type Resolvers
// merge(
//   resolvers

// require("../authentication/resolvers/Type")
// );

//clean resolvers
if (isEmpty(resolvers.Query)) delete resolvers.Query;
if (isEmpty(resolvers.Mutation)) delete resolvers.Mutation;
if (isEmpty(resolvers.Subscription)) delete resolvers.Subscription;
module.exports = resolvers;
