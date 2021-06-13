FROM node:10

WORKDIR /home/node/app

COPY ./package.json .
RUN npm install

ENV BACKEND_HOST=localhost

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]

COPY . .
RUN rm Dockerfile
RUN chmod +x entrypoint.sh
