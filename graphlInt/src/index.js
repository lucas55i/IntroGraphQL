const { ApolloServer, gql } = require("apollo-server");

// Toda request é POST
// Toda request bate no MESMO endpoint (/graphql)

// Query -> Obter informações (GET)
// Mutation -> Manipular dados (POST/PUT/PATCH/DELETE)
// Scalar Types _> String, Int, Boolean, Float, ID

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Tes2 {
    numero: Int
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
  },
  Tes2: {
    numero: () => {
      return 22;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server started at ${url}`));
