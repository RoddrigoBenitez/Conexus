# Conexus

## Descripción

Conexus es una aplicación web que permite gestionar las interacciones entre los meseros, la caja y la cocina de un bar o restaurante. La aplicación permite a los meseros tomar pedidos, enviarlos a la cocina y a la caja, y a los cocineros y cajeros recibir los pedidos y marcarlos como completados. La aplicación también permite a los administradores gestionar los usuarios y los productos del menú.

## Inicio rápido

Para correr la aplicación en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio:

```bash
git clone https://github.com/RoddrigoBenitez/Conexus.git
```

2. Instala las dependencias del backend:

```bash
cd Conexus/backend
npm install
```

3. Levanta la BD de MongoDB:

```bash
docker-compose up -d
```

4. Levanta el servidor del backend:

```bash
npm start
```
