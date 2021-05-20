const { Router } = require('express');
const router = Router();

const { getUsers } = require('../controllers/index.controller');
const { createUser } = require('../controllers/index.controller');
router.get('/users', getUsers);
router.post('/users', createUser );

module.exports = router;
