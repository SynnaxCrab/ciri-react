FROM node:alpine

ENV NODE_ENV 'production'

EXPOSE 8888

RUN mkdir /ciri-react
WORKDIR /ciri-react

ADD package.json yarn.lock /ciri-react/
RUN apk add --no-cache git
RUN yarn install --pure-lockfile

ADD ./dist /ciri-react

CMD ["yarn", "start"]
