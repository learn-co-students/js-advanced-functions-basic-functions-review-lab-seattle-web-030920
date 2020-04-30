// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function inner(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add: function (num1, num2) {
        return num1 + num2
    },
    subtract: function (num1, num2) {
        return num1 - num2
    },
    multiply: function (num1, num2) {
        return num1 * num2
    },
    divide: function (num1, num2) {
        return num1 / num2
    }
}

function actionApplyer(int, funcArr) {
    let a = int
    for (let i = 0; i < funcArr.length; i++){
        a = funcArr[i](a)
    }
    return a
}
