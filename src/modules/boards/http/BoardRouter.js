const express = require('express')
var boardsRouter = express.Router()

const GetAllBoardsService = require('../services/GetAllBoardsService')
const GetUniqueBoardsService = require('../services/GetUniqueBoardsService')
const GetAllListInBoardService = require('../services/GetAllListInBoardService')
const GetReporBoardsService = require('../services/GetReporBoardsService')

boardsRouter.get('/', async (request, response) => {
    const getAllBoardsService = new GetAllBoardsService()
    const boards = await getAllBoardsService.execute()
    response.status(200).json({
        boards
    })
})

boardsRouter.get('/:id', async (request, response) => {
    const {id} = request.params;

    const getUniqueBoardsService = new GetUniqueBoardsService()
    const boards = await getUniqueBoardsService.execute(id)
    response.status(200).json({
        boards
    })
})

boardsRouter.get('/:id/lists', async (request, response) => {
    const {id} = request.params;
    
    const getAllListInBoardService = new GetAllListInBoardService()
    const lists = await getAllListInBoardService.execute(id)
    response.status(200).json({
        lists
    })
})


boardsRouter.get('/:id/report', async (request, response) => {
    const { id } = request.params
    const getReporBoardsService = new GetReporBoardsService()
    const report = await getReporBoardsService.execute(id)
    response.status(200).json({
        ...report
    })
})

module.exports = boardsRouter