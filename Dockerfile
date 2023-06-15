FROM node:16-alpine as build

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn

COPY . ./

RUN yarn build

FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-c", "/etc/nginx/nginx.conf", "-g", "daemon off;"]
