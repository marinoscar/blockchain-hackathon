FROM node:latest

RUN mkdir /app
WORKDIR /app

COPY ./index.js ./index.js
COPY ./app.js ./app.js
COPY ./package*.json ./
RUN npm install

EXPOSE 3000
CMD npm start
