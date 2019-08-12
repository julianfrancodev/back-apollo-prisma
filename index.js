import express from 'express';
import {ApolloServer} from "apollo-server-express";
import {typeDefs} from "./data/schema";
import {resolvers} from "./data/resolvers";

const {prisma} = require('./generated/prisma-client');


const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        prisma
    }
});

server.applyMiddleware({app});

app.listen({port: 4446},
    () => console.log(`Server Running in http://localhost:4446${server.graphqlPath} `));