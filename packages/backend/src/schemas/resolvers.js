import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'
import path from 'path'

const resolvers = fileLoader(path.join(__dirname, 'schemas', '**', '*.gql'))
const resolverMerged = mergeResolvers(resolvers)

export default resolverMerged