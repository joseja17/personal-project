CREATE TABLE IF NOT EXISTS adventures (
    id serial primary key,
    location text,
    title text,
    date text, 
    description text,
    image text, 
    latitud text, 
    longitud text,
    users_id INTEGER,
    FOREIGN KEY(users_id) REFERENCES users (id)
);