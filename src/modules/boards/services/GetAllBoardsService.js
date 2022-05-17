const { listAllBoards } = require('../../../shared/utils/trelloSDK')

class GetAllBoardsService {
    
    constructor() {

    }

    async execute() {
        const boards = await listAllBoards()
        return boards
    }
}

module.exports = GetAllBoardsService