const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const mongo_config = require('./mongo-config');

const app = express();

mongoose.connect('mongodb://'+mongo_config.MONGODB_USERNAME+':'+mongo_config.MONGODB_PASSWORD+'@ds133290.mlab.com:33290/gql-dd');
mongoose.connection.once('open', ()=> {
  console.log('connected to database');
})

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
})
