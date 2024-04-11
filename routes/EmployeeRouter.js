const express = require('express');
const employeeController = require('../controller/EmployeeController');
const verifyUser = require('../middleware/AuthMiddleware');
const router = express.Router();

router.post('/create',verifyUser, employeeController.create);
router.get('/find-by-id/:id',verifyUser, employeeController.findById);
router.delete('/delete-by-id/:id',verifyUser, employeeController.deleteById);
router.put('/update/:id',verifyUser, employeeController.update);
router.get('/find-all', verifyUser,employeeController.findAll);
router.get('/find-count',verifyUser, employeeController.findCount);
module.exports=router;