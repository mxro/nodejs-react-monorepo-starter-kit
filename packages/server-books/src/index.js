

const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    }
];

const typeDefs = `

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

`;

const resolvers = {
    Query: {
        books: () => books,
    },
};


export default {typeDefs, resolvers};