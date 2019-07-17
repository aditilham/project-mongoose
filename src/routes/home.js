const router = require("express").Router();
const greet = require("../controllers/home")

router.get("/", greet.greetings);
router.get("/goodbye", greet.sayGoodbye);


// DIPINDAH KE CONTROLLERS
// (req, res) => {
//   res.send("hello everyone!")
// }


module.exports = router