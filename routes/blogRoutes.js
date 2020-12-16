const express = require("express");
const { getAllBlogs, getBlogbyId } = require("../controllers/blogController");

const router = express.Router();
router.route("/blog").get(getAllBlogs);

router.route("/blog/:id").get(getBlogbyId);
module.exports = router;
