const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  photoURL: {
    type: Sequelize.STRING,
    allowNull: false
  },
  githubLink: {
    type: Sequelize.STRING,
    allowNul: false
  },
  deployedLink: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Project
