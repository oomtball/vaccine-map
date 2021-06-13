FROM node:10

WORKDIR /home/node/app

COPY ./package.json .
RUN npm install

EXPOSE 3002

CMD ["npm", "start"]

COPY . .
RUN rm Dockerfile
