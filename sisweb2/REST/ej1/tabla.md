## TABLA DE RUTAS Y ACCIONES

| Recurso           | Método | Ruta                         | Descripción                     |
| ----------------- | ------ | ---------------------------- | ------------------------------- |
| peliculas         | GET    | /api/peliculas               | Listar peliculas en cartelera   |
| peliculas         | POST   | /api/peliculas               | Crear pelicula                  |
| pelicula          | GET    | /api/peliculas/{id}          | Ver detalle de pelicula         |
| pelicula          | PUT    | /api/peliculas/{id}          | Modificar pelicula              |
| pelicula          | DELETE | /api/peliculas/{id}          | Eliminar pelicula               |
| Sesiones          | GET    | /api/sesiones                | Listar sesiones (con filtros)   |
| Sesiones          | POST   | /api/sesiones                | Crear sesion                    |
| Sesion            | GET    | /api/sesiones/{id}           | Ver detalle de sesion           |
| Sesion            | PUT    | /api/sesiones/{id}           | Cambiar sesion                  |
| Sesion            | DELETE | /api/sesiones/{id}           | Borrar sesion                   |
| Sesiones por peli | GET    | /api/peliculas/{id}/sesiones | Listar sesiones de una pelicula |

---

### Ejemplos de mensajes JSON:

Crear pelicula (POST /api/peliculas):
```json
{
  "titulo": "Dune: Parte Dos",
  "director": "Denis Villeneuve",
  "duracionMinutos": 166,
  "genero": "Ciencia ficcion",
  "clasificacion": "12"
}
```

Crear sesion (POST /api/sesiones):
```json
{
  "peliculaId": 101,
  "salaId": 3,
  "fecha": "2026-03-05",
  "hora": "20:30",
  "precio": 8
}
```