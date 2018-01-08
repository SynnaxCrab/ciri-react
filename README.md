# Ciri Frontend React App #

[![Greenkeeper badge](https://badges.greenkeeper.io/winfield/ciri-react.svg)](https://greenkeeper.io/)

The Ciri React App

## Development ##

````
yarn install && yarn dev
````

## Test ##

````
yarn install && yarn test
````

## Deployment ##

Ciri use docker for deployment. It use Bitbucket Pipeline to archieve CI/CD.

You can also build your own docker image by running the following command in the project root dictionary.

````
docker build -t YOUR_IMAGE_NAME .
````

Ciri uses .env to expose environment variables, you need to fill in the fields specified in .env.sample.

### Note ###

Environment variable: API_END_POINT is used in both App entry(server/app.js) and Webpack.

For Webpack, since it generates a static bundle file, for environment variable used in code to work, we need expose it through Webpack compile proccess

For SSR, just expose it via node.js through App entry