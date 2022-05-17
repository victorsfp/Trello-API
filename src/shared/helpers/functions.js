
function calculateMetrics(report){
    const toDo = ((report.details[0].qtyCards * 100) / report.totalCards).toFixed(1)
    const inProgress = ((report.details[1].qtyCards * 100) / report.totalCards).toFixed(1)
    const testing = ((report.details[2].qtyCards * 100) / report.totalCards).toFixed(1)
    const block = ((report.details[3].qtyCards * 100) / report.totalCards).toFixed(1)
    const finished = ((report.details[4].qtyCards * 100) / report.totalCards).toFixed(1)

    return {
        totalCards: report.totalCards,
        toDo,
        inProgress,
        testing,
        block,
        finished,
        details: report.details
    }
}

module.exports = {
    calculateMetrics
}