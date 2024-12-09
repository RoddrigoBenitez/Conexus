
# Conexus

---

## Descripción

Conexus es una aplicación web que permite gestionar las interacciones entre los meseros, la caja y la cocina de un bar o restaurante. Los meseros pueden tomar pedidos, enviarlos a la cocina y la caja; los cocineros y cajeros reciben los pedidos y los marcan como completados. Los administradores pueden gestionar usuarios y productos del menú.

---

## Quick Start

### **1. Clona el repositorio**

Clona el repositorio para obtener los archivos necesarios:

```bash
git clone https://github.com/RoddrigoBenitez/Conexus.git
cd Conexus
```

---

### **2. Instala las dependencias**

Asegúrate de instalar las dependencias de la aplicación:

```bash
npm install
```

---

### **3. Opciones para Ejecutar la Aplicación**

#### **Opción 1: Ejecutar MongoDB y Backend por Separado**

1. **Levantar MongoDB (Docker):**

   Construye la imagen personalizada de MongoDB y levanta el contenedor:

   ```bash
   cd docker
   docker build -f Dockerfile.mongo -t mongo-image .
   docker run --name mongodb -d -p 27017:27017 mongo-image
   ```

   Este comando ejecutará una instancia de MongoDB en el puerto `27017`.

2. **Ejecutar el Backend en Modo Desarrollo:**

   Una vez que MongoDB esté corriendo, puedes ejecutar el backend en modo desarrollo con:

   ```bash
   npm run dev
   ```

   Esto iniciará un servidor en el puerto `3000`.

---

#### **Opción 2: Usar Docker Compose para MongoDB y Backend**

Docker Compose permite levantar ambos servicios (MongoDB y el backend) en contenedores con un solo comando.

1. **Levantar los Servicios:**

   ```bash
   docker-compose up --build
   ```

   Este comando:
   - Construye las imágenes necesarias para MongoDB y el backend.
   - Levanta ambos servicios en contenedores Docker.
   - MongoDB estará disponible en el puerto `27017`.
   - El backend estará disponible en el puerto `3000`.

2. **Detener los Servicios:**

   Para detener los contenedores y liberar recursos, usa:
   ```bash
   docker-compose down
   ```

---

### **4. Acceso a la Aplicación**

Una vez que la aplicación esté corriendo, accede a ella en tu navegador web en la siguiente dirección:

```bash
http://localhost:3000/api
```

---

### **Notas Adicionales**

- **Variables de Entorno:**
  Asegúrate de configurar un archivo `.env` en la raíz del proyecto para las variables necesarias. Ejemplo:

  ```env
  DB_URI=mongodb://root:example@mongo:27017/mydatabase?authSource=admin
  PORT=3000
  HOST=0.0.0.0
  NODE_ENV=development
  ```

- **Logs:**
  Para ver los logs de los contenedores, usa:
  ```bash
  docker-compose logs app
  docker-compose logs mongo
  ```
