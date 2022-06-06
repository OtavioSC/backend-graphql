import { fileLoader, mergeTypes } from 'merge-graphql-schemas'
import path from 'path'

const types = fileLoader(path.join(__dirname, 'schemas', '**', '*.gql'))
const typesMerged = mergeTypes(types)

console.log(typesMerged)

export default typesMerged