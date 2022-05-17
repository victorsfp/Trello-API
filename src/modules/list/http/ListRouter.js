const express = require('express')
var listRouter = express.Router()

const GetAllCardsInListService = require('../services/GetAllCardsInListService')


listRouter.get('/:id/cards', async (request, response) => {
    const {id} = request.params

    const getAllCardsInListService = new GetAllCardsInListService()
    const cards = await getAllCardsInListService.execute(id)

    response.status(200).json({
        cards
    })
})


module.exports = listRouter