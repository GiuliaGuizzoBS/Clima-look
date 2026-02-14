CREATE DATABASE clima_look;
USE clima_look;

CREATE TABLE acessos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  data_hora DATETIME,
  temp_max INT,
  temp_min INT,
  cidade VARCHAR(100)
);
