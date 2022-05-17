
function calculateMetrics(report){
    var toDo = "0.0"
    var inProgress = "0.0"
    var testing = "0.0"
    var block = "0.0"
    var finished = "0.0"

    if(report && report.totalCards){
        toDo = ((report.details[0].qtyCards * 100) / report.totalCards).toFixed(1)
        inProgress = ((report.details[1].qtyCards * 100) / report.totalCards).toFixed(1)
        testing = ((report.details[2].qtyCards * 100) / report.totalCards).toFixed(1)
        block = ((report.details[3].qtyCards * 100) / report.totalCards).toFixed(1)
        finished = ((report.details[4].qtyCards * 100) / report.totalCards).toFixed(1)

        return {
            totalCards: report.totalCards,
            toDo,
            inProgress,
            testing,
            block,
            finished,
            details: report.details
        }
    }else{
        return {
            totalCards: 0,
            toDo,
            inProgress,
            testing,
            block,
            finished,
            details: report.details
        }
    }
    
}

module.exports = {
    calculateMetrics
}