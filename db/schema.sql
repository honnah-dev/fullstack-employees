DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
  id serial PRIMARY KEY,
  name text NOT NULL UNIQUE,
  birthday DATE NOT NULL,
  salary integer NOT NULL
);
