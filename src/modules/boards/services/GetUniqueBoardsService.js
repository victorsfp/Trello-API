const { getUniqueBoard } = require('../../../shared/utils/trelloSDK')

class GetUniqueBoardsService {
    
    constructor() {

    }

    async execute(id) {
        const board = await getUniqueBoard(id)
        return board
    }
}

module.exports = GetUniqueBoardsService