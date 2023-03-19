FROM node:16-alpine as build

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn 

COPY . ./

RUN yarn build

FROM nginx:stable-alpine
RUN pwd
RUN ls
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
