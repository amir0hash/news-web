import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import  typeDefs  from "./dataBase/typeDefs";
import  resolvers  from "./dataBase/resolvers";

const db = mongoose.connection;

db.on("connecting", function () {
  console.log("connection to Mongodb ...");
});

db.on("connected", function () {
  console.log("Mongodb  connected!");
});

db.on("error", function (err) {
  console.log("Mongodb error connected", err);
});

db.on("reconnected", function () {
  console.log("Mongodb  reconnected!");
});

db.on("disconnected", function () {
  console.log("Mongodb  disconnected!");
});

mongoose.connect("mongodb://localhost:27017/NewsDB");

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  mongoose.on;
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
