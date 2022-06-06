import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

function server({ typeDefs, resolvers }){
    mongoose.connect('mongodb+srv://<username>:<password>@<cluster>.nriew.mongodb.net/?retryWrites=true&w=majority');

    const aplServer = new ApolloServer({ typeDefs, resolvers });
    aplServer.listen()
          .then(({url}) => console.log(`Server running ${url}`))
}

export default server


