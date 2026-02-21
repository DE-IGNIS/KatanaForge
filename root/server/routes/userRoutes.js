const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");

router.get("/list", userControllers.getlist);
router.post("/data",userControllers.updatelist);

module.exports = router;
