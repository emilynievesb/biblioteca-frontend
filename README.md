# Sistema de Gestión de Biblioteca

Este proyecto tiene como objetivo desarrollar un sistema para la gestión de bibliotecas, que permita la administración eficiente de inventarios de libros, el manejo de préstamos, devoluciones, reservas, y la autenticación de usuarios con diferentes roles (administradores, bibliotecarios, y usuarios finales). El presente repositorio corresponde al frontend de la aplicacion el backend lo encontrara en el siguiente link:
https://github.com/ADEP-123/biblioteca-backend

## Integrantes del Proyecto

- **Andrés David Elizalde Peralta**
- **Emily Julieth Nieves Badillo**
- **Santiago Alexander Ospina Pabon**

## Docente

- **Nury Farelo Velasquez**

## Instalacion

### Clonar y eliminar manualmente la garpeta .git

Para realizar este paso debe tener permisos de administrador en su dispotivo y tener habilitada la opcion de ver carpetas ocultas

1. Clone el repositorio con el siguiente comando:

```bash
git clone https://github.com/emilynievesb/biblioteca-frontend
```

2. Busque la carpeta oculta `.git` dentro de la carpeta raiz del proyecto `biblioteca-frontend` y eliminela

## Cómo instalar las dependencias

Para esto debe estar seguro de tener instalado Node en una version 18.18.0 o superior, para ello ejecute el siguiente comando en consola:

```bash
node --version
```

si obtiene un mensaje diciendo que no se reconoce ese comando debe instalar node, para ello puede acceder al siguiente link:
https://nodejs.org/en/download/package-manager

Una vez instalado node ejecute el siguiente comando

```bash
npm install
```

## Como iniciar el servicio
1. En la carpeta raiz cree un archivo `.env`.
2. Dentro del archivo `.env` debe declarar la variable de entorno `NEXT_PUBLIC_API_UR` con el valor apuntando a la url donde levantara el backend, por defecto seria de la siguiente manera:

```bash
NEXT_PUBLIC_API_URL=http://localhost:1337
```
3. Inicie primero el servidor backend
4. Inicie el servidor front con el siguiente comando:
```bash
npm run dev
```

