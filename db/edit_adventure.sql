update adventures 
SET location = $2, title = $3, date = $4, description = $5, image = $6, latitud = $7, longitud = $8
where id = $1;