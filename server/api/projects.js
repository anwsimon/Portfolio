const router = require('express').Router()

router.get('/', (req, res, next) => {
 res.send('hello!')
 console.log('we are here!')
})

// router.post('/', (req, res, next) => {

// })

// router.put('/:projectId', (req, res, next) => {

// })

// router.delete('/:projectId', (req, res, next) => {

// })

module.exports = router
