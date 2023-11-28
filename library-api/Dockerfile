FROM node:21.2.0

WORKDIR /usr/src/library-api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "api:start:dev"]