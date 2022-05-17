const { getCardsInList } = require('../../../shared/utils/trelloSDK')

class GetAllCardsInListService {
    
    constructor() {

    }

    async execute(id) {
        const cards = await getCardsInList(id)
        return cards
    }
}

module.exports = GetAllCardsInListService