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

const editUser = async (req, res)=>{
    const {nombres, apellidos, telefono, contrasena, correo, id} = req.body;
    const response = await pool.query('UPDATE USERS  SET NOMBRES =$1 ,APELLIDOS=$2 ,TELEFONO=$3,CONTRASENA=$4,CORREO=$5 WHERE ID = $6',[nombres,apellidos,telefono,contrasena,correo,id]);
    console.log(response);
    res.send('editUser');
}

const deleteUser = async (req, res)=>{
    const {id} = req.body;
    const response = await pool.query('DELETE FROM USERS  WHERE ID = $1',[id]);
    console.log(response);
    res.send('deleteUser');
}

module.exports = {
    getUsers,
    createUser,
    editUser,
    deleteUser
}