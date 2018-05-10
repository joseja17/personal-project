delete from adventures
where id = $1;
select * from adventures
where users_id =$1 ;