# docker/Dockerfile

# Usa una imagen base de Node.js con Alpine para una imagen ligera
FROM node:14.17.0-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json (si existe)
COPY backend/package*.json ./

# Instala las dependencias del backend
RUN npm install

# Copia todo el código fuente del backend al directorio de trabajo en el contenedor
COPY backend ./backend

# Establece el directorio de trabajo para el backend
WORKDIR /app/backend

# Compila el código TypeScript a JavaScript
RUN npm run build

# Expone el puerto en el que correrá la aplicación
EXPOSE 3000

# Define las variables de entorno (pueden ser sobrescritas por docker-compose)
ENV NODE_ENV=development

# Comando para iniciar la aplicación
CMD ["node", "dist/app.js"]
