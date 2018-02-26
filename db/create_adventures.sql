insert into adventures (location, title, date, description, image, latitud, longitud)
values ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;