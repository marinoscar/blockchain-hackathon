FROM node:latest

RUN mkdir /app
WORKDIR /app

COPY ./public /app/public
COPY ./package.json ./
RUN npm install

EXPOSE 3000
CMD npm start
