insert into adventures (location, title, date, description, image, latitud, longitud, users_id)
values ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;
