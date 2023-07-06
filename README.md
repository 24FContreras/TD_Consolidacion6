# 🗾 Anime API

Ejercicio de consolidación para el módulo N°6 de e-camp, becas Talento Digital para Chile

## Índice

- [Requerimientos](#requerimientos)
- [Respuesta](#respuesta)
  - [Pruebas Locales](#pruebas-locales)
  - [Documentación de la API](#documentación-de-la-api)

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

#### GET

##### GET /animes

Retorna todas las series disponibles en formato JSON

**Ejemplo de respuesta satisfactoria**
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
    },
    "2": {
      "nombre": "Dragon Ball",
      "genero": "Shonen",
      "año": "1986",
      "autor": "Akira Toriyama"
    },
    "3": {
      "nombre": "Sailor Moon",
      "genero": "Shojo",
      "año": "1992",
      "autor": "Naoko Takeuchi"
    },
    "4": {
      "nombre": "Naruto",
      "genero": "Shonen",
      "año": "2002",
      "autor": "Masashi Kishimoto"
    },
    "5": {
      "nombre": "Neon Genesis Evangelion",
      "genero": "Mecha",
      "año": "1995",
      "autor": "Yoshiyuki Sadamoto"
    }
  }
}
```

---

##### GET /animes?id={id}

Retorna la serie seleccionada en formato JSON

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

**Ejemplo de respuesta insatisfactoria (404)**
/animes?id=200

```json
{
  "ok": false,
  "status": 404,
  "message": "El anime seleccionado no existe"
}
```

---

##### GET /animes?nombre={nombre}

Retorna la serie seleccionada en formato JSON. El nombre no es sensible a mayúsculas

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

**Ejemplo de respuesta insatisfactoria (404)**
/animes?nombre=no existo

```json
{
  "ok": false,
  "status": 404,
  "message": "El anime seleccionado no existe"
}
```
