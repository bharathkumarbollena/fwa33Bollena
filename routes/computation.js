const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    console.log(req.query)

    if (Object.keys(req.query).length === 0) {
        console.log("Entered")
        let rand = Math.random()
        res.render(`computation`, { value: `hypot applied to ${rand} is ${Math.hypot(rand)}` })
    } else
        for (let a in req.query) {
            console.log(a)
            res.render(`computation`, { value: `hytpot applied to ${req.query[a]} is ${Math.hypot(req.query[a])}` })
        }
})

module.exports = router