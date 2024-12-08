# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos necesarios
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente al contenedor
COPY . .

# Compila el código TypeScript a JavaScript
RUN npm run build

# Expone el puerto en el que tu backend escucha
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]