FROM node:18.7.0 as base
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .

FROM base as build
RUN npm run build

FROM nginx:1.23.3-alpine
EXPOSE 80
COPY --from=build /app/build/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]