const {Router} = require('express')
const { addUser, loginUser, getUsers } = require('../controllers/userController')

const router = Router();

router.post("/register", addUser).post("/login", loginUser)
router.get('/', getUsers)
 
module.exports = router
