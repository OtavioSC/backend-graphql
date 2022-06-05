export const PORT = 9001;
export const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbURL: 'mongodb://localhost:27017/graphql-crud'
    }
}