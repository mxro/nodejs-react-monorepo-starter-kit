import React, { Component } from 'react';
import './App.css';

import { ApolloProvider } from "react-apollo";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "/graphql"
});

const Books = () => (
  <Query
    query={gql`
      {
        books {
            title
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return <pre>{data.books[0].title}</pre>;
    }}
  </Query>
);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Books />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
