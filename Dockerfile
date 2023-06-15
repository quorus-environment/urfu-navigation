FROM node:16-alpine as build

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn

COPY . ./

RUN yarn build

FROM nginx:stable-alpine
COPY /infra/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
