FROM node:14-alpine
WORKDIR /app
COPY docker_nodejs/package.json ./
RUN npm install
COPY docker_nodejs/src /app

EXPOSE 80
CMD ["npm", "start"] 