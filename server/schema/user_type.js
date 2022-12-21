const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    mobile: { type: GraphQLString },
    address: { type: GraphQLString },
    occupation: { type: GraphQLString },
    income: { type: GraphQLString },
    idProofNumber: { type: GraphQLString },
    userName: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

module.exports = UserType;
