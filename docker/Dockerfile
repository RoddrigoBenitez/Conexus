FROM node:18-alpine

WORKDIR /app

COPY backend/package*.json ./

RUN npm install

COPY backend ./backend

WORKDIR /app/backend

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/app.js"]
