require('dotenv').config();

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
const utilities = require("./utilities/")

/* ***********************
 * Static Files Middleware - MUST BE FIRST
 *************************/
app.use(express.static(path.join(__dirname, 'public')))


// Inventory routes
const inventoryRoute = require("./routes/inventoryRoute")
app.use("/inv", inventoryRoute)

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
app.get("/", utilities.handleErrors(async function(req, res, next){
  let nav = await utilities.getNav()
  res.render("index", { 
    title: "Home", 
    nav 
  })
}))

/* ***********************
 * File Not Found Route - must be last route
 *************************/
app.use(async (req, res, next) => {
  next({status: 404, message: 'Sorry, we appear to have lost that page.'})
})

/* ***********************
* Express Error Handler
* Place after all other middleware
*************************/
app.use(async (err, req, res, next) => {
  let nav = await utilities.getNav()
  console.error(`Error at: "${req.originalUrl}": ${err.message}`)
  if(err.status == 404){ 
    message = err.message
  } else {
    message = 'Oh no! There was a crash. Maybe try a different route?'
  }
  res.render("errors/error", {
    title: err.status || 'Server Error',
    message,
    nav
  })
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

// Test route for vehicle details
app.get("/inv/detail/:invId", utilities.handleErrors(async function(req, res, next){
  let nav = await utilities.getNav()
  res.render("inventory/detail", { 
    title: "Vehicle Details", 
    nav,
    detailHtml: "<p>Detail system working!</p>"
  })
}))

