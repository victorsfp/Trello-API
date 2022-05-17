const axios = require('axios')

const url = process.env.BASE_TRELLO_URL
const token = process.env.TOKEN
const secret = process.env.SECRET
const key = process.env.KEY

const listAllBoards = async () => {
    try {
        const data = await axios.default.get(`${url}/members/me/boards?key=${key}&token=${token}&fields=id,name,shortLink`)
        return data.data
    } catch (error) {
        console.log(error)
        return []
    }
   
}

const getUniqueBoard = async (id) => {
    try {
        const data = await axios.default.get(`${url}/boards/${id}?key=${key}&token=${token}`)
        return data.data
    } catch (error) {
        console.log(error)
        return []
    }
}


const getListsinBoards = async (id) => {
    try {
        const data = await axios.default.get(`${url}/boards/${id}/lists?key=${key}&token=${token}&fields=id,name,closed,idBoard`)
        return data.data
    } catch (error) {
        console.log(error)
        return []
    }
}

const getCardsInList = async (id) => {
    try {
        const data = await axios.default.get(`${url}/lists/${id}/cards?key=${key}&token=${token}&fields=id,idBoard,idList,name,shortLink,url`)
        return data.data
    } catch (error) {
        console.log(error)
        return []
    }
}

module.exports = {
    listAllBoards,
    getUniqueBoard,
    getListsinBoards,
    getCardsInList
}