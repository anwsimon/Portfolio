//using new db to create models and associations
//this is the access point for all things database related!

const db  = require('./db')

const Project = require('./models/project')

module.exports = {
  db,
  Project
}
