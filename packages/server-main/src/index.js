import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import path from 'path';
import books from 'server-books';

const app = express();
let port;
if (!process.env.PORT) {
    port = 4000;
} else {
    port = process.env.PORT
}

let typeDefs = gql([books.typeDefs].join(""));

let resolvers = {
    ...books.resolvers
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app })

app.get('/hello', (req, res) => res.send('Hello World!'))


// Serving react client
if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, '../../client-main/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../../client-main/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))