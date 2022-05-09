const express =require("express");
const { getPatients, createPatients, updatePatients, deletePatients,getPatient, getUser, deleteUser, appointment, bookAppointment, cancelAppointment } = require("../controllers/PatientsFunction");
const router = express.Router();
const authenticate =require('../Middleware/authenticate')

router.route('/getPatients').get(authenticate,getPatients);
router.route('/getPatient/:id').get(authenticate,getPatient);
router.route('/createPatients').post(authenticate,createPatients);
router.route('/updatePatients/:id').put(authenticate,updatePatients);
router.route('/deletePatients/:id').delete(authenticate,deletePatients);
router.route('/getUser').get(authenticate,getUser)
router.route('/deleteUser/:id').delete(authenticate,deleteUser)
router.route('/appointment').get(authenticate,appointment)
router.route('/bookAppointment').post(bookAppointment)
router.route('/cancelAppointment/:id').delete(authenticate,cancelAppointment)

module.exports=router;