FROM node:10

WORKDIR /home/node/app

COPY ./package.json .
RUN npm install

EXPOSE 3002

CMD ["npm", "start"]

ENV GOOGLE_APPLICATION_CREDENTIALS=/home/node/app/service-account.json

COPY . .
RUN rm Dockerfile
