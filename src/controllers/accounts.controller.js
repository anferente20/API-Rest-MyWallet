const { Pool } = require('pg');
const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'asdf1234',
    database:'mywallet',
    port:'5432'
})
const getAccounts = async (req, res) => {
    const idcliente = req.params.idcliente;
    const response = await pool.query('SELECT * FROM ACCOUNTS WHERE IDCLIENTE = $1',[idcliente]);
    res.status(200).json(response.rows);
};

const createAccount = async (req, res) => {
    const {nombre,descripcion,idcliente} = req.body;
    const response = await pool.query('INSERT INTO ACCOUNT (NOMBRE,DESCRIPCION,IDCLIENTE) VALUES ($1,$2,$3)',[nombre,descripcion,idcliente]);
    console.log(response);
    res.send('cuenta creada');
}

const editAccount = async (req, res)=>{
    const {nombre,descripcion, idaccount} = req.body;
    const response = await pool.query('UPDATE ACCOUNT SET NOMBRE =$1 , DESCRIPCION=$2 WHERE ID = $3',[nombre,descripcion, idaccount]);
    console.log(response);
    res.send('cuenta actualizada');
}

const deleteAcount = async (req, res)=>{
    const {id} = req.body;
    const response = await pool.query('DELETE FROM ACCOUNT WHERE ID = $1',[id]);
    console.log(response);
    res.send('cuenta eliminada');
}

module.exports = {
    getAccounts,
    createAccount,
    editAccount,
    deleteAcount
}