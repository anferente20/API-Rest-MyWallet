const { Router } = require('express');
const router = Router();

const { getUsers } = require('../controllers/users.controller');
const { getUsersByCorreo } = require('../controllers/users.controller');
const { getUsersByID } = require('../controllers/users.controller');
const { createUser } = require('../controllers/users.controller');
const { editUser } = require('../controllers/users.controller');
const { deleteUser } = require('../controllers/users.controller');

const { getAccounts } = require('../controllers/accounts.controller');
const { getaccountsName } = require('../controllers/accounts.controller');
const { getAccountName } = require('../controllers/accounts.controller');
const { createAccount } = require('../controllers/accounts.controller');
const { editAccount } = require('../controllers/accounts.controller');
const { deleteAcount } = require('../controllers/accounts.controller');

const { getTransactions } = require('../controllers/transactions.controller');
const { getIncomeTransactions } = require('../controllers/transactions.controller');
const { getOutcomeTransactions } = require('../controllers/transactions.controller');
const { getAccountIncomeTransactions } = require('../controllers/transactions.controller');
const { getAccountOutcomeTransactions } = require('../controllers/transactions.controller');
const { createTransaction } = require('../controllers/transactions.controller');
const { editTransaction } = require('../controllers/transactions.controller');
const { deleteTransaction } = require('../controllers/transactions.controller');

router.get('/users', getUsers);
router.get('/users/:correo/:contrasena', getUsersByCorreo);
router.get('/users/:id', getUsersByID);
router.post('/addUser', createUser);
router.post('/editUser', editUser);
router.post('/deleteUser', deleteUser); 

router.get('/accounts/:idcliente', getAccounts);
router.get('/accountsName/:idcliente', getaccountsName);
router.get('/accountName/:idcuenta', getAccountName);
router.post('/addAccount', createAccount);
router.post('/editAccount', editAccount);
router.post('/deleteAccount', deleteAcount);

router.get('/transactions/:idcuenta', getTransactions);
router.get('/income/:idcliente', getIncomeTransactions);
router.get('/accountIncome/:idcuenta', getAccountIncomeTransactions);
router.get('/accountOutcome/:idcuenta', getAccountOutcomeTransactions);
router.get('/outcome/:idcliente', getOutcomeTransactions);
router.post('/addTransaction', createTransaction);
router.post('/editTransaction', editTransaction);
router.post('/deleteTransaction', deleteTransaction);

module.exports = router;
