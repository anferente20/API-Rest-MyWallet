CREATE DATABASE MYWALLET;
CREATE TABLE USERS(
    ID SERIAL PRIMARY KEY,
    NOMBRES VARCHAR(50),
    APELLIDOS VARCHAR(50),
    TELEFONO VARCHAR(13),
    CONTRASENA VARCHAR(20),
    CORREO VARCHAR(40)
);
INSERT INTO USERS (NOMBRES,APELLIDOS,TELEFONO,CONTRASENA,CORREO) VALUES ('Pepito','Perez','12345','asdf1234','pepito1@gmail.com');
INSERT INTO USERS (NOMBRES,APELLIDOS,TELEFONO,CONTRASENA,CORREO) VALUES ('Armando','Casas','12345','asdf1234','pepito2@gmail.com');
