import Team from "../../models/Team";

export default {
    Query: {
        teams: () => Team.find(),
        team: (_, {id}) => Team.findById(id)
    },
    Mutation: {
        createTeam: (_, { team }) => Team.create(team),
        updateTeam: (_, { id, team }) => Team.findOneAndUpdate(id, team, {new: true}),
        deleteUser: async (_, { id }) => !!(await Team.findOneAndDelete(id))
    }
};