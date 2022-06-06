import League from '../../models/League'

export default {
    Query: {
        leagues: () => League.find(),
        league: (_, {id}) => League.findById(id)
    },
    Mutation: {
        createLeague: (_, { league }) => League.create(league),
        updateLeague: (_, { id, league }) => League.findOneAndUpdate(id, league, {new: true}),
        deleteLeague: async (_, { id }) => !!(await League.findOneAndDelete(id))
    }
};