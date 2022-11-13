FROM node:16

WORKDIR /home/ticket-tracker/api

COPY api/package*.json ./

RUN npm install

COPY api .

EXPOSE 8000

CMD ["node", "server.js"]