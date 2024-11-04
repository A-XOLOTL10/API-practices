const {Router} = require('express');
const {newMeal,getOneBranch,getAllBranches,getOneMealType,updateMenu} = require('../Controller/restaurantController');
const router = Router()


router.post("/restaurant", newMeal);
router.get("/restaurant/:branch", getOneBranch);
router.get("/restaurants", getAllBranches);
router.get("/restaurant/:branch/:type", getOneMealType);
router.put("/restaurant/:branch", updateMenu);
// router.delete("/patient/:id",deletePatient);

module.exports = router;
