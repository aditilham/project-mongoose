const router = require("express").Router();

const userController = require("../controllers/user");

router.get('/', userController.getAllUser)
router.post('/', userController.createUser)
router.post('/login', userController.login)

// router.delete('/', userController.deleteUser)
// router.put('/', userController.updateUser)

module.exports = router;
