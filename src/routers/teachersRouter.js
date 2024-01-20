/*
 * Title: Teacher's Router 
 * Description: Handle All teacher's router
 * Author: Md Abdullah
 * Date: 11/01/24
 */

//dependencies:
const express = require("express");
const {handleCreateTeacher, handleGetTeacher, handleGetTeacherById, handleLoginTeacher, handleTeacherLogout } = require("../controllers/teacherController");
const { validateTeacherLogin, validateCreateTeacher } = require("../validators/auth");
const runValidation = require("../validators");
const { isLoggedIn, isAdmin, isLoggedOut } = require("../middleware/auth");
const teachersRouter = express.Router();

//POST -> Log as a  teacher
teachersRouter.post("/sign-in", validateTeacherLogin, runValidation, isLoggedOut, handleLoginTeacher);

//GET -> Log out teacher
teachersRouter.get("/sign-out", isLoggedIn,handleTeacherLogout);


//GET -> get teacher by id
teachersRouter.get("/:id", handleGetTeacherById);

//POST -> Create teacher
teachersRouter.post("/",validateCreateTeacher, runValidation, isLoggedIn, isAdmin, handleCreateTeacher);

//GET -> get all teachers
teachersRouter.get("/", handleGetTeacher);



module.exports = teachersRouter;