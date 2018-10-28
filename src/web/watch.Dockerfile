FROM node:latest

RUN apt-get update
RUN apt-get install -y inotify-tools
RUN mkdir /app
WORKDIR /app

COPY ./public /app/public
COPY ./package*.json ./
COPY ./watch.sh ./watch.sh
RUN npm install

EXPOSE 3000
CMD npm run watch
