const express = require("express");

const {
    createUser,
    getAllUser
} = require("../controller/user.controller");


const router = express.Router();

router.post("/create-new",createUser);
router.get("/get-all",getAllUser);

module.exports = router;