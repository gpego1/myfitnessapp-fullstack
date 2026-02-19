FROM node:24.12.0

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 8080

ENV NODE_ENV=production

CMD ["node", "server.js"]