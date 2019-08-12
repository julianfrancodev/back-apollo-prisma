export const resolvers = {
    Query: {
        posts: (parent, { id }, context) => {
            return context.prisma.posts({})
        },
    },
    Mutation: {
        deletePost: (parent, {id}, context) => {
            return context.prisma.deletePost({id})
        }
    }
};