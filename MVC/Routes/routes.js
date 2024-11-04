const {Router} = require('express');
const {newPatient,getOnePatient,getPatients,updatePatient,deletePatient} = require('../Controller/hospitalController');
const router = Router()

router.post("/patient", newPatient);
router.get("/patient/:id", getOnePatient);
router.get("/patients", getPatients);
router.put("/patient/:id", updatePatient);
router.delete("/patient/:id",deletePatient);

module.exports = router;
