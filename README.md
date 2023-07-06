# 🗾 Anime API

Ejercicio de consolidación para el módulo N°6 de e-camp, becas Talento Digital para Chile

## Índice

- [Requerimientos](#requerimientos)
- [Respuesta](#respuesta)
  - [Pruebas Locales](#pruebas-locales)
  - [Documentación de la API](#documentación-de-la-api)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)

## Requerimientos

- Crear un servidor con node.
- Crear un archivo principal llamado index.js.
- En un archivo aparte, llamado anime.json, guardar los datos con la siguiente información:
- Crear un programa que permita hacer el CRUD completo de los datos. El id será el primer
  argumento para acceder a las propiedades de cada anime.
- Se deberá poder listar todos los datos del archivo y, además, leer los datos de un anime
  especifico, accediendo por su id y / o por su nombre.
- Realizar un test para poder probar la respuesta del servidor que fue creado.

## Respuesta

### Pruebas Locales

Para probar en local, seguir los siguientes pasos:

- Descargar o clonar el proyecto
- ejecutar el script 'npm install' para instalar las dependencias
- ejecutar el script 'npm run dev' para iniciar el servidor en el puerto 3000
- Para ejecutar un test, ejecutar el script 'npm run test'

### Documentación de la API

La API construída tiene habilitada una única ruta /anime, con diferentes métodos y parmámetros

### GET

#### GET /animes

Retorna todas las series disponibles en formato JSON

<br>

**Ejemplo de respuesta satisfactoria (200)**

/animes

```json
{
  "ok": true,
  "status": 200,
  "data": {
    "1": {
      "nombre": "Akira",
      "genero": "Seinen",
      "año": "1988",
      "autor": "Katsuhiro Otomo"
    }
  }
}
```

<br>

#### GET /animes?id={id}

Retorna la serie seleccionada en formato JSON
<br>

**Ejemplo de respuesta satisfactoria (200)**

/animes?id=2

```json
{
  "ok": true,
  "status": 200,
  "data": {
    "nombre": "Dragon Ball",
    "genero": "Shonen",
    "año": "1986",
    "autor": "Akira Toriyama"
  }
}
```

<br>

**Ejemplo de respuesta insatisfactoria (404)**

/animes?id=200

```json
{
  "ok": false,
  "status": 404,
  "message": "El anime seleccionado no existe"
}
```

<br>

#### GET /animes?nombre={nombre}

Retorna la serie seleccionada en formato JSON. El nombre no es sensible a mayúsculas

<br>

**Ejemplo de respuesta satisfactoria (200)**

/animes?nombre=neon genesis evangelion

```json
{
  "ok": true,
  "status": 200,
  "data": {
    "nombre": "Neon Genesis Evangelion",
    "genero": "Mecha",
    "año": "1995",
    "autor": "Yoshiyuki Sadamoto"
  }
}
```

<br><br>

**Ejemplo de respuesta insatisfactoria (404)**

/animes?nombre=no existo

```json
{
  "ok": false,
  "status": 404,
  "message": "El anime seleccionado no existe"
}
```

---

### POST

#### POST /animes

Crea una nueva serie en el archivo JSON, retornando el nuevo objeto más su id

<br>

**Ejemplo de respuesta satisfactoria (201)**

```json
{
  "ok": true,
  "status": 201,
  "message": "Anime creado exitosamente!",
  "data": {
    "id": "d9844ee0-6411-4c40-9b9b-47e24fe08138",
    "nombre": "Daiya no Ace",
    "genero": "Shōnen",
    "año": "2013",
    "autor": "Terajima Yuji"
  }
}
```

<br>

**Ejemplo de respuesta insatisfactoria: Petición sin body (400)**

```json
{
  "ok": false,
  "status": 400,
  "message": "La petición debe contener un body"
}
```

<br><br>

**Ejemplo de respuesta insatisfactoria: Petición con body sin contenido (400)**

```json
{
  "ok": false,
  "status": 400,
  "message": "El body de la petición debe tener contenido"
}
```

---

#### PUT

##### PUT /animes?id={id}

Modifica la serie seleccionada, retornando la serie actualizada. Requiere el parámetro de consulta id
<br><br>

**Ejemplo de respuesta satisfactoria (200)**

/animes?id=5

```json
{
  "ok": true,
  "status": 200,
  "message": "Se ha modificado exitosamente el anime 'Neon Genesis Evangelion'",
  "data": {
    "nombre": "Neon Genesis Evangelion",
    "genero": "Mecha",
    "año": "1995",
    "autor": "Yoshiyuki Sadamoto",
    "Shinji pilotea el Eva": "o Rei tendrá que hacerlo"
  }
}
```

<br>

**Ejemplo de respuesta insatisfactoria (404)**

/animes?id=500

```json
{
  "ok": false,
  "status": 404,
  "message": "El anime seleccionado no existe"
}
```
---

#### DELETE

##### DELETE /animes?id={id}

Elimina del archivo JSON la serie seleccionada, retornando los datos eliminados. Requiere el parámetro de consulta id
<br><br>

**Ejemplo de respuesta satisfactoria (200)**

/animes?id=5

```json
{
  "ok": true,
  "status": 200,
  "message": "Se ha eliminado exitosamente el animé 'Neon Genesis Evangelion'",
  "erasedData": {
    "nombre": "Neon Genesis Evangelion",
    "genero": "Mecha",
    "año": "1995",
    "autor": "Yoshiyuki Sadamoto"
  }
}
```

<br>

**Ejemplo de respuesta insatisfactoria (404)**

/animes?id=500

```json
{
  "ok": false,
  "status": 404,
  "message": "El anime seleccionado no existe"
}
```
