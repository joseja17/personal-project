SELECT *
FROM users u
JOIN adventures ad ON u.id = ad.users_id
where users_id =$1;
