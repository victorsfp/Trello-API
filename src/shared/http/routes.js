const express = require('express')
var router = express.Router()

const boardsRouter = require('../../modules/boards/http/BoardRouter')
const listRouter = require('../../modules/list/http/ListRouter')

router.get('/', (request, response) => {
    response.status(200).json({
        message: 'hello world'
    })
})

//MODULES
router.use('/boards', boardsRouter)
router.use('/list', listRouter)

module.exports = router