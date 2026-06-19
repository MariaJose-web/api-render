# API Render

API REST de películas construida con Node.js y Express que lee datos desde un archivo JSON local (`peliculas.json`). Esta aplicación sirve como un backend simple para consumir información de películas en formato JSON.

## Tabla de contenidos

- [Descripción](#descripci%C3%B3n)
- [Requisitos](#requisitos)
- [Instalación](#instalaci%C3%B3n)
- [Ejecución](#ejecuci%C3%B3n)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Endpoints](#endpoints)
- [Parámetros y ejemplos](#par%C3%A1metros-y-ejemplos)
- [Modelo de datos](#modelo-de-datos)
- [Manejo de errores](#manejo-de-errores)
- [Configuración de entorno](#configuraci%C3%B3n-de-entorno)
- [Extensiones sugeridas](#extensiones-sugeridas)
- [Licencia](#licencia)

## Descripción

Esta API ofrece funcionalidades básicas para consultar películas, filtrar por género y obtener detalles individuales. Los datos se cargan desde `peliculas.json` en memoria al iniciar el servidor.

## Requisitos

- Node.js 18+ (o versión compatible con módulos ES)
- npm

## Instalación

1. Abre la carpeta del proyecto en tu terminal.
2. Instala las dependencias:

```bash
npm install
```

## Ejecución

Inicia el servidor con el comando:

```bash
npm start
```

Por defecto, el servidor se ejecuta en `http://localhost:3000`.

Si necesitas otro puerto, define la variable de entorno `PORT` antes de iniciar:

```bash
set PORT=3001 && npm start
```

## Estructura del proyecto

- `index.js` - punto de entrada del servidor Express.
- `package.json` - configuración del proyecto y dependencias.
- `peliculas.json` - datos de películas cargados por la API.
- `README.md` - documentación del proyecto.

## Endpoints

### `GET /`

Devuelve un mensaje de bienvenida y una lista de endpoints disponibles.

### `GET /api/peliculas`

Devuelve todas las películas.

### `GET /api/peliculas?genero=<genero>`

Filtra las películas por género. El parámetro `genero` no distingue mayúsculas/minúsculas.

### `GET /api/peliculas/:id`

Devuelve los detalles de la película con el ID especificado.

### `GET /api/generos`

Devuelve la lista de géneros disponibles en el archivo `peliculas.json`.

## Parámetros y ejemplos

### 1. Listar todas las películas

Solicitud:

```http
GET /api/peliculas
```

Respuesta:

```json
{
  "total": 18,
  "peliculas": [
    {
      "id": 1,
      "titulo": "Inception",
      "año": 2010,
      "genero": "Ciencia Ficción",
      "director": "Christopher Nolan",
      "rating": 8.8,
      "sinopsis": "Un ladrón especializado en extraer secretos del subconsciente a través de los sueños recibe una misión imposible: implantar una idea en la mente de alguien.",
      "duracion": 148,
      "poster": "/img/peliculas/p1.jpg"
    }
  ]
}
```

### 2. Filtrar por género

Solicitud:

```http
GET /api/peliculas?genero=Acción
```

Respuesta:

```json
{
  "total": 2,
  "peliculas": [
    {
      "id": 5,
      "titulo": "El Caballero Oscuro",
      "genero": "Acción"
    },
    {
      "id": 13,
      "titulo": "Gladiador",
      "genero": "Acción"
    }
  ]
```

### 3. Obtener una película por ID

Solicitud:

```http
GET /api/peliculas/5
```

Respuesta:

```json
{
  "id": 5,
  "titulo": "El Caballero Oscuro",
  "año": 2008,
  "genero": "Acción",
  "director": "Christopher Nolan",
  "rating": 9,
  "sinopsis": "Batman se enfrenta al Joker, un criminal que sumerge a Gotham en el caos.",
  "duracion": 152,
  "poster": "/img/peliculas/p5.jpg"
}
```

### 4. Listar géneros

Solicitud:

```http
GET /api/generos
```

Respuesta:

```json
{
  "generos": [
    "Ciencia Ficción",
    "Drama",
    "Animación",
    "Acción",
    "Crimen",
    "Fantasía",
    "Thriller",
    "Aventura"
  ]
}
```

## Modelo de datos

Cada objeto de película incluye los campos:

- `id`: identificador numérico único.
- `titulo`: título de la película.
- `año`: año de estreno.
- `genero`: género principal.
- `director`: nombre del director.
- `rating`: calificación numérica.
- `sinopsis`: descripción breve de la trama.
- `duracion`: duración en minutos.
- `poster`: ruta o URL de la imagen del póster.

## Manejo de errores

- `404 Not Found` cuando no existe una película con el ID solicitado.
- El servidor registra un mensaje de error si el puerto ya está en uso.

Ejemplo de respuesta para ID inexistente:

```json
{
  "error": "Película no encontrada"
}
```

## Configuración de entorno

- `PORT`: número de puerto donde se ejecuta el servidor. Si no se define, utiliza `3000`.

## Extensiones sugeridas

Estas son mejoras posibles para el proyecto:

- Añadir paginación para `GET /api/peliculas`.
- Agregar nuevos filtros por director, año o rating.
- Implementar creación, actualización y eliminación de películas (`POST`, `PUT`, `DELETE`).
- Conectar con una base de datos en lugar de usar JSON estático.
- Añadir validación de entradas con `express-validator`.

## Licencia

Este proyecto no tiene licencia especificada.
