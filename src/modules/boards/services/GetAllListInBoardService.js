const { getListsinBoards } = require('../../../shared/utils/trelloSDK')

class GetAllListInBoardService {
    
    constructor() {

    }

    async execute(id) {
        const lists = await getListsinBoards(id)
        return lists
    }
}

module.exports = GetAllListInBoardService