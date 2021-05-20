const { Pool } = require('pg');
const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'asdf1234',
    database:'mywallet',
    port:'5432'
})
const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM USERS');
    res.status(200).json(response.rows);
};

const createUser = async (req, res) => {
    const {nombres, apellidos, telefono, contrasena, correo} = req.body;
    const response = await pool.query('INSERT INTO USERS (NOMBRES,APELLIDOS,TELEFONO,CONTRASENA,CORREO) VALUES ($1,$2,$3,$4,$5)',[nombres,apellidos,telefono,contrasena,correo]);
    console.log(response);
    res.send('userCreate');
}

module.exports = {
    getUsers,
    createUser
}