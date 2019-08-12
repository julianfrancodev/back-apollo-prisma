import express from 'express';
import {ApolloServer} from "apollo-server-express";

const app = express();

const server = new ApolloServer({
    // TODO here we need put the 
});

server.applyMiddleware({app});

app.listen({port: 4446},
    () => console.log(`Server Running in http://localhost:4400${server.graphqlPath} `));