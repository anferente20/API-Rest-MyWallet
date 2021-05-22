const { Router } = require('express');
const router = Router();

const { getUsers } = require('../controllers/users.controller');
const { createUser } = require('../controllers/users.controller');
const { editUser } = require('../controllers/users.controller');
const { deleteUser } = require('../controllers/users.controller');

router.get('/users', getUsers);
router.post('/addUser', createUser );
router.post('/editUser', editUser );
router.post('/deleteUser', deleteUser );

module.exports = router;
