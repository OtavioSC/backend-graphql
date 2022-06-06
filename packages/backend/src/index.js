import server from "./server.js";
import typeDefs from "./schemas/typeDefs"
import teamResolvers from "./schemas/resolvers"

server({typeDefs, teamResolvers});