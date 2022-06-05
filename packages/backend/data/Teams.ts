import { MongoDataSource } from 'apollo-datasource-mongodb'
import { ObjectId } from 'mongodb'

interface TeamDocument {
    _id: ObjectId
    name: String
    country: String
    age: Number
    language: String
  }

class TeamsAPI extends MongoDataSource <TeamDocument> {

  async getUserById(id) {
    return this.findOneById(id);
  }

  async adicionaUser(user) {
    // insert in mongodb
  }

  async atualizaUser(novosDados) {
    // update in mongodb
  }

  async deletaUser(id) {
    // remove in mongodb
  }
}

module.exports = TeamsAPI