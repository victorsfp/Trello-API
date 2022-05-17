const { listAllBoards, getListsinBoards, getCardsInList} = require('../../../shared/utils/trelloSDK')
const { calculateMetrics } = require('../../../shared/helpers/functions')

class GetReporBoardsService {
    
    constructor() {

    }

    async execute(shortLink) {
        //GET ALL BORDS
        const boards = await listAllBoards()
        //FILTER BOARD
        const board = boards.filter(board => board.shortLink === shortLink)[0]

        if(!board){
            return this.emptyStateReturn()
        }

        //GET ALL LISTS
        const lists = await getListsinBoards(board.id)

        var listsReduce = lists.reduce((acc, list, index, origin) => {
            return {
                ...acc,
                [list.id]:[]
            }
        }, {})

        for await (const list of lists){
            const cards = await getCardsInList(list.id)
            listsReduce[list.id] = cards
        }


        const data = Object.keys(listsReduce).map((item, index) => {
            return {
                id: lists[index].id,
                name: lists[index].name,
                qtyCards: listsReduce[item].length,
                cards: listsReduce[item]
            }
        })

        let totalCards = 0
        data.forEach(e => {
            totalCards += e.qtyCards
        })

        const report = {
            totalCards,
            details: data
        }
        

        return {
            id: board.id,
            name: board.name,
            shortLink,
            ...calculateMetrics(report)
        }

    }


    emptyStateReturn(){
        return {
            message: 'error'
        }
    }
}

module.exports = GetReporBoardsService