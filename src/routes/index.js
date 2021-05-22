const { Router } = require('express');
const router = Router();

const { getUsers } = require('../controllers/users.controller');
const { createUser } = require('../controllers/users.controller');
const { editUser } = require('../controllers/users.controller');
const { deleteUser } = require('../controllers/users.controller');

const { getAccounts } = require('../controllers/accounts.controller');
const { createAccount } = require('../controllers/accounts.controller');
const { editAccount } = require('../controllers/accounts.controller');
const { deleteAcount } = require('../controllers/accounts.controller');

const { getTransactions } = require('../controllers/transactions.controller');
const { createTransaction } = require('../controllers/transactions.controller');
const { editTransaction } = require('../controllers/transactions.controller');
const { deleteTransaction } = require('../controllers/transactions.controller');

router.get('/users', getUsers);
router.post('/addUser', createUser);
router.post('/editUser', editUser);
router.post('/deleteUser', deleteUser);

router.get('/accounts', getAccounts);
router.post('/addAccount', createAccount);
router.post('/editAccount', editAccount);
router.post('/deleteAccount', deleteAcount);

router.get('/transactions', getTransactions);
router.post('/addTransaction', createTransaction);
router.post('/editTransaction', editTransaction);
router.post('/deleteTransaction', deleteTransaction);

module.exports = router;
