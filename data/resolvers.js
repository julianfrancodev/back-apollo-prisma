export const resolvers = {
    Query: {
        posts: (parent, args, context) => {
            return context.prisma.posts();
        },
    },
    Mutation: {
        deletePost: (parent, {id}, context) => {
            return context.prisma.deletePost({id});
        }
    }
};