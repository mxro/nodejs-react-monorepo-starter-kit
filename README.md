# nodejs-react-monorepo-starter-kit

Template for modular projects using React, Node.js, Lerna and GraphQL.

For an updated version of this templates, please head over to [Goldstack](https://goldstack.party) and have a look at the [Next.js Template](https://goldstack.party/templates/nextjs).

## Build

```
git clone git@github.com:mxro/nodejs-react-monorepo-starter-kit.git
cd nodejs-react-monorepo-starter-kit
lerna bootstrap
```

## Development Environment

To spin up a local development server with hot reload, run:

```
yarn build
yarn watch
```

This will perform hot reloads on the main server component `server-main` and React app `client-main`. To enable hot reloading on other components, also run the following in a different terminal window:

```
yarn watch-componentss
```

## Deploy

To run production version

```
yarn build
PORT=8081 yarn serve
```

## Based on

- [Apollo Server Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started.html)
- [create-react-app](https://github.com/facebook/create-react-app)
- [How to get create-react-app to work with a Node.js back-end API](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0)

