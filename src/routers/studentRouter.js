/*
 * Title:  
 * Description: 
 * Author: Md Abdullah
 * Date: 11/20/23
 */


//Dependencies:
const express = require("express");
const { handleCreateStudent, handleGetStudentsByClassName, handleDeleteStudent, handleGetStudents, handleGetPayment, handleUpdateStudentInfo } = require("../controllers/studentController");
const { validateCreateStudent } = require("../validators/auth");
const runValidation = require("../validators");
const studentRouter = express.Router();

// POST -> get payment by id:
studentRouter.post("/payment/:id", handleGetPayment);

// POST -> update student by id:
studentRouter.post("/update/:id", handleUpdateStudentInfo);

// POST -> create student :
studentRouter.post("/",validateCreateStudent,runValidation,handleCreateStudent);

// GET -> get students by className :
studentRouter.get("/:className", handleGetStudentsByClassName);

// GET -> delete students by id :
studentRouter.delete("/:id", handleDeleteStudent);

// GET -> delete students by id :
studentRouter.get("/", handleGetStudents);






module.exports = studentRouter;