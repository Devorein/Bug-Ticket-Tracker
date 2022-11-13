FROM node:16

WORKDIR /home/ticket-tracker/web

COPY web/package*.json ./

RUN npm install

COPY web .

RUN npm run build

EXPOSE 3000

CMD ["next", "start"]