FROM node:10.13.0-alpine

ENV TERM=xterm-256color

WORKDIR /usr/app

RUN apk update && apk upgrade
COPY package.json /usr/app
COPY package-lock.json /usr/app


RUN npm install
CMD ["npm", "run", "dev"]
