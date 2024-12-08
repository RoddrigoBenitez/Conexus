# Conexus

---

## Descripción

Conexus es una aplicación web que permite gestionar las interacciones entre los meseros, la caja y la cocina de un bar o restaurante. La aplicación permite a los meseros tomar pedidos, enviarlos a la cocina y a la caja, y a los cocineros y cajeros recibir los pedidos y marcarlos como completados. La aplicación también permite a los administradores gestionar los usuarios y los productos del menú.

---

## Quick Start

Para correr la aplicación en local, sigue los siguientes pasos:

### 1. Clona el repositorio:

```bash
git clone https://github.com/RoddrigoBenitez/Conexus.git
```

### 2. Instala las dependencias:

```bash
npm install
```

### 3. Build de la imagen de Docker y levanta el contenedor de MongoDB:

Para levantar el contenedor de MongoDB, primero debes tener instalado Docker en tu máquina. Luego, ejecuta el siguiente comando:

```bash
cd mongo
docker-compose up -d
```

Este comando levantará un contenedor de Docker con una instancia de MongoDB en el puerto 27017.

### 4. Ejecuta la aplicación:

Existen dos formas de ejecutar la aplicación:

- **Modo desarrollo**: Para ejecutar la aplicación en modo desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```

Este comando levantará un servidor de desarrollo en el puerto 3000.

- **Docker**: Para ejecutar la aplicación en un contenedor de Docker, primero debes tener instalado Docker en tu máquina. Luego, ejecuta el siguiente comando:

```bash
cd docker
docker-compose up --build
```

Este comando construirá la imagen de Docker y levantará un contenedor con la aplicación en el puerto 3000.

### 5. Accede a la aplicación:
Una vez que la aplicación esté corriendo, puedes acceder a ella en tu navegador web en la siguiente dirección:

```bash
http://localhost:3000/api
```
