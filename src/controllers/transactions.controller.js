const { Pool } = require('pg');
const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'asdf1234',
    database:'mywallet',
    port:'5432'
})
const getTransactions = async (req, res) => {
    const idcuenta = req.params.idcuenta;
    const response = await pool.query('SELECT * FROM TRANSACTIONS WHERE IDCUENTA = $1',[idcuenta]);
    res.status(200).json(response.rows);
};

const createTransaction = async (req, res) => {
    const {fecha,descripcion,tipo,idcuenta,monto,destinatario} = req.body;
    const response = await pool.query('INSERT INTO TRANSACTIONS (FECHA,DESCRIPCION,TIPO,IDCUENTA,MONTO,DESTINATARIO) VALUES ($1,$2,$3,$4,$5,$6)',[fecha,descripcion,tipo,idcuenta,monto,destinatario]);
    console.log(response);
    res.send('transaccion creada');
}

const editTransaction = async (req, res)=>{
    const {fecha,descripcion,tipo,monto,destinatario,id,idcuenta} = req.body;
    const response = await pool.query('UPDATE TRANSACTIONS SET FECHA =$1 , DESCRIPCION=$2, TIPO=$3, MONTO=$4, DESTINATARIO=$5 WHERE ID = $5 AND IDCUENTA=$6',[fecha,descripcion,tipo,monto,destinatario,id,idcuenta]);
    console.log(response);
    res.send('transaccion actualizada');
}

const deleteTransaction = async (req, res)=>{
    const {id} = req.body;
    const response = await pool.query('DELETE FROM TRANSACTIONS WHERE ID = $1',[id]);
    console.log(response);
    res.send('transaccion eliminada');
}

getIncomeTransactions = async (req, res) => {
    const idcliente = req.params.idcliente;
    const response = await pool.query('SELECT T.FECHA, T.MONTO FROM TRANSACTIONS T, ACCOUNTS A, USERS U WHERE T.TIPO = TRUE AND T.IDCUENTA = A.ID AND A.IDCLIENTE = U.ID AND U.ID = $1;',[idcliente]);
    res.status(200).json(response.rows);
};

getOutcomeTransactions = async (req, res) => {
    const idcliente = req.params.idcliente;
    const response = await pool.query('SELECT T.FECHA, T.MONTO FROM TRANSACTIONS T, ACCOUNTS A, USERS U WHERE T.TIPO = FALSE AND T.IDCUENTA = A.ID AND A.IDCLIENTE = U.ID AND U.ID = $1;',[idcliente]);
    res.status(200).json(response.rows);
};


getAccountIncomeTransactions = async (req, res) => {
    const idCuenta = req.params.idcuenta;
    const response = await pool.query(' SELECT FECHA, MONTO FROM TRANSACTIONS WHERE TIPO = TRUE AND IDCUENTA = $1;',[idCuenta]);
    res.status(200).json(response.rows);
};

getAccountOutcomeTransactions = async (req, res) => {
    const idCuenta = req.params.idcuenta;
    const response = await pool.query(' SELECT FECHA, MONTO FROM TRANSACTIONS WHERE TIPO = FALSE AND IDCUENTA = $1;',[idCuenta]);
    res.status(200).json(response.rows);
};
module.exports = {
    getTransactions,
    createTransaction,
    editTransaction,
    deleteTransaction,
    getIncomeTransactions,
    getOutcomeTransactions,
    getAccountIncomeTransactions,
    getAccountOutcomeTransactions
}