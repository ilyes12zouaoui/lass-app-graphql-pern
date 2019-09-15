const { merge } = require("lodash");
const mergeResolverByName = (obj, name) => {
  return merge(obj, {
    Query: require(`../${name}/resolvers/Query`),
    Mutation: require(`../${name}/resolvers/Mutation`),
    Subscription: require(`../${name}/resolvers/Subscription`),
    ...require(`../${name}/resolvers/Type`)
  });
};

module.exports = mergeResolverByName;
