// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrap="*") {
    return function(p="special") {
        return `You are ${wrap}${p}${wrap}!`
    }
}

let Calculator = {
    add(num1, num2) {
        return num1 + num2
    },
    subtract(num1, num2) {
        return num1 - num2
    },
    multiply(num1, num2) {
        return num1 * num2
    },
    divide(num1, num2) {
        return num1 / num2
    }
}

function actionApplyer(num, arr) {
   
    for(let f of arr) {
        num = f(num)
    }
    return num
}