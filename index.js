// Your code here
function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}

let mondayWork = function(activity = "go to the office"){
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(string="*"){
   return function(message="special"){
        return (`You are ${string}${message}${string}!`)
    }
}

let Calculator = {

    add: function(x,y) {return (x + y)},
    subtract: function(x,y) {return (x - y)},
    multiply: function(x,y) {return (x * y)},
    divide: function(x,y) {return (x / y)}
}

function actionApplyer(start, functionArray) {

    Array.isArray(functionArray) ? functionArray.forEach(func => {start = func(start)}) : start
    return start
}