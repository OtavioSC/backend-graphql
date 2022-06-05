import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { teamResolvers } from './team/resolvers/teamResolvers';
import { typeDefs } from './team/schemas/team.graphql';

const server = new ApolloServer({ typeDefs, teamResolvers });
const app = express();

server.applyMiddleware({ app });

app.get('/', (req, res) => {
    console.log("Apollo GraphQL Express server is ready");
});

app.listen(9001, () => {
    console.log(`Server running`);
});