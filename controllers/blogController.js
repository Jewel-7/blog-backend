const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "..", "data", "blog.json");
const router = require("../routes/blogRoutes");
const blogs = JSON.parse(fs.readFileSync(fileName, "utf-8"));
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");
const AppError = require("../helpers/appErrorClass");

const getAllBlogs = (req, res, next) => {
  sendResponse(200, "Sucessful", blogs, req, res);
};

const getBlogbyId = (req, res, next) => {
  console.log(req.params);
  let blog = blogs.find((blog) => {
    return blog.id === req.params.id;
  });

  if (blog) {
    res.status(200).json({
      status: "Sucessfull",
      data: blog,
    });
  } else {
    res.status(404).json({
      status: "user not found",
    });
  }
};

module.exports.getAllBlogs = getAllBlogs;

module.exports.getBlogbyId = getBlogbyId;
