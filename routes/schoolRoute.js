const { createSchool, getSchools } = require("../controllers/schoolControllers")
const { Router,  } = require("express")

const  router = Router();

router.post("/addschool", createSchool)

router.get("/schools").get(getSchools)

module.exports=router