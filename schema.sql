DROP database if exists checkout;

CREATE DATABASE checkout;
use checkout;

create table checkoutList (
  name varchar(30),
  email varchar(30),
  password varchar(30)
);

insert into checkoutList (name, email, password) VALUES ('bob', 'bob@bob.com', 'bobby');