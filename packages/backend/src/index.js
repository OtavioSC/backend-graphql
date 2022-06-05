import { ApolloServer } from 'apollo-server';
import { Teams } from '../data/Teams.ts'
import { teamsModel } from '../data/schemas/schema';

import { teamResolvers } from './team/resolvers/teamResolvers';
import { typeDefs } from './team/schemas/team.graphql';

const typeDefs = [teamSchema]
const resolvers = [teamResolvers]

const server = new ApolloServer( { 
  typeDefs, 
  resolvers,
  dataSources: () => ({ 
    Teams: new Teams(teamsModel)
})});

server.listen().then(({url}) => {
  console.log(`Server Running`)
})