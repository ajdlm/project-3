const router = require("express").Router();
const bookRoutes = require("./shop");

// Book routes
router.use("/shop", bookRoutes);

module.exports = router;