/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const path = require("path")

/* ***********************
 * Static Files Middleware - MUST BE FIRST
 *************************/
app.use(express.static(path.join(__dirname, 'public')))

/* ***********************
 * Express Layouts Configuration
 *************************/
app.use(expressLayouts)
app.set("layout", "layouts/layout")

/* ***********************
 * View Engine and Views Folder
 *************************/
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

/* ***********************
 * Routes
 *************************/
// Index route
app.get("/", function(req, res){
  res.render("index", { title: "Home" })
})

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})