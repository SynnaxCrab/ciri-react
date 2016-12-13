FROM node:boron-alpine

ENV NODE_ENV 'production'

RUN mkdir /ciri-react
WORKDIR /ciri-react

ADD package.json /ciri-react/package.json
RUN npm install

ADD ./dist /ciri-react
