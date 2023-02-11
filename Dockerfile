FROM node:19-alpine AS build
WORKDIR /dist
RUN npm cache clean --force
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --force
COPY . .
RUN npm run build

FROM nginx:latest AS ngi
COPY --from=build /dist/build /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80