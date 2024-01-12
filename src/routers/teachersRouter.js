/*
 * Title: Teacher's Router 
 * Description: Handle All teacher's router
 * Author: Md Abdullah
 * Date: 11/01/24
 */

//dependencies:
const express = require("express");
const { handleGetTeacher } = require("../controllers/teacherController");
const teachersRouter = express.Router();

teachersRouter.get("/", handleGetTeacher);

module.exports = teachersRouter;