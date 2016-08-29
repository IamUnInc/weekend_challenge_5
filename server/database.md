CREATE TABLE favoritepets (
  id SERIAL PRIMARY KEY,
  pet_id varchar(30) NOT NULL,
  pet_name varchar(30) NOT NULL,
pet_imageurl varchar(100) NOT NULL,
pet_description varchar(100) NOT NULL)
;
