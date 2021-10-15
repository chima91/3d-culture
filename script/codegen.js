module.exports = {
  schema: {
    [process.env.REACT_APP_GRAPHQL_END_POINT_ORIGIN]: {
      headers: {
        "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET_KEY
      }
    }
  },
  documents: [
    "graphql/query/users.graphql",
    "graphql/mutation/InsertUser.graphql",
  ],
  generates: {
    "src/utils/graphql/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true
      }
    }
  }
};