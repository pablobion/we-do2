const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
    res.json({ auth: false, token: null });
});

module.exports = router;
