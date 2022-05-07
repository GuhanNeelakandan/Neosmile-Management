const express =require("express");
const { getPatients, createPatients, updatePatients, deletePatients,getPatient } = require("../controllers/PatientsFunction");
const router = express.Router();
const authenticate =require('../Middleware/authenticate')

router.route('/getPatients').get(authenticate,getPatients);
router.route('/getPatient/:id').get(authenticate,getPatient);
router.route('/createPatients').post(authenticate,createPatients);
router.route('/updatePatients/:id').put(authenticate,updatePatients);
router.route('/deletePatients/:id').delete(authenticate,deletePatients);

module.exports=router;