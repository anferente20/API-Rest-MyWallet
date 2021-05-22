CREATE DATABASE MYWALLET;

CREATE TABLE USERS(
    ID SERIAL PRIMARY KEY,
    NOMBRES VARCHAR(50),
    APELLIDOS VARCHAR(50),
    TELEFONO VARCHAR(13),
    CONTRASENA VARCHAR(20),
    CORREO VARCHAR(40)
);

CREATE TABLE ACCOUNTS(
    ID SERIAL PRIMARY  KEY,
    NOMBRE VARCHAR(50),
    DESCRIPCION VARCHAR(50),
    IDCLIENTE INT,
    CONSTRAINT fk_user_account FOREIGN KEY (IDCLIENTE) REFERENCES USERS(ID)
);

CREATE TABLE TRANSACTIONS(
    ID SERIAL PRIMARY KEY,
    FECHA DATE,
    DESCRIPCION VARCHAR(50),
    TIPO BOOLEAN,
    IDCUENTA INT,    
    MONTO INT,
    DESTINATARIO VARCHAR(50),
    CONSTRAINT fk_account FOREIGN KEY (IDCUENTA) REFERENCES ACCOUNTS(ID)    
);

INSERT INTO USERS (NOMBRES,APELLIDOS,TELEFONO,CONTRASENA,CORREO) VALUES ('Pepito','Perez','12345','asdf1234','pepito1@gmail.com');
INSERT INTO USERS (NOMBRES,APELLIDOS,TELEFONO,CONTRASENA,CORREO) VALUES ('Armando','Casas','12345','asdf1234','pepito2@gmail.com');

INSERT INTO ACCOUNTS(NOMBRE,DESCRIPCION,IDCLIENTE) VALUES ('Cuenta de Ahorros', 'Cuenta bancaria',1);
INSERT INTO ACCOUNTS(NOMBRE,DESCRIPCION,IDCLIENTE) VALUES ('Nequi', 'Plata para mecatearsela en cositas',2);
INSERT INTO ACCOUNTS(NOMBRE,DESCRIPCION,IDCLIENTE) VALUES ('Paypal', 'Transacciones internacionales',1);
INSERT INTO ACCOUNTS(NOMBRE,DESCRIPCION,IDCLIENTE) VALUES ('Paypal', 'Transacciones internacionales',2);

INSERT INTO TRANSACTIONS (FECHA,DESCRIPCION,TIPO,IDCUENTA,MONTO,DESTINATARIO)  VALUES ('2021-05-22','Mi trabajo vale',TRUE,1,2000500,'SALARIO');
INSERT INTO TRANSACTIONS (FECHA,DESCRIPCION,TIPO,IDCUENTA,MONTO,DESTINATARIO)  VALUES ('2021-05-22','Domicilio almuerzo',False,1,10000,'iFood');
INSERT INTO TRANSACTIONS (FECHA,DESCRIPCION,TIPO,IDCUENTA,MONTO,DESTINATARIO)  VALUES ('2021-05-23','Domicilio cena',False,1,13000,'iFood');
INSERT INTO TRANSACTIONS (FECHA,DESCRIPCION,TIPO,IDCUENTA,MONTO,DESTINATARIO)  VALUES ('2021-05-22','Ahorro',TRUE,2,1000500,'SALARIO');
INSERT INTO TRANSACTIONS (FECHA,DESCRIPCION,TIPO,IDCUENTA,MONTO,DESTINATARIO)  VALUES ('2021-05-22','Ahorro',TRUE,3,1000500,'SUGGAR DADDY');
INSERT INTO TRANSACTIONS (FECHA,DESCRIPCION,TIPO,IDCUENTA,MONTO,DESTINATARIO)  VALUES ('2021-05-22','Ahorro',TRUE,4,1000500,'SUGGAR MOMMY');