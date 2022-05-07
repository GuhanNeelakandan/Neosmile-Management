const express =require("express");
const { getPatients, createPatients, updatePatients, deletePatients,getPatient } = require("../controllers/PatientsFunction");
const router = express.Router();
const authenticate =require('../Middleware/authenticate')

router.route('/getPatients').get(getPatients);
router.route('/getPatient/:id').get(getPatient);
router.route('/createPatients').post(createPatients);
router.route('/updatePatients/:id').put(updatePatients);
router.route('/deletePatients/:id').delete(deletePatients);

module.exports=router;