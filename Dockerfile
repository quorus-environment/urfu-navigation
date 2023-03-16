FROM node:16-slim

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN apt-get update && yarn install 

COPY . /app

CMD ["npm", "start"]
