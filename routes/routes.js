const express =require("express");
const { getPatients, createPatients, updatePatients, deletePatients } = require("../controllers/PatientsFunction");
const router = express.Router();

router.route('/getPatients').get(getPatients)
router.route('/createPatients').post(createPatients);
router.route('/updatePatients/:id').put(updatePatients);
router.route('/deletePatients/:id').delete(deletePatients);

module.exports=router;