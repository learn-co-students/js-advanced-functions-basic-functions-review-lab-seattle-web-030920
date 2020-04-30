// Your code here
function saturdayFun(activity = "roller-skate")
{
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office")
{
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(mainInput = "*")
{
    return function(input = "special"){
        return `You are ${mainInput}${input}${mainInput}!`
    }
}

let Calculator = {
    add: (a,b) => {return a+b},
    subtract: function(a,b) {return a-b},
    multiply: (a,b) => {return a*b},
    divide: (a,b) => {return a/b}
}

function actionApplyer(start, inputArray)
{
    let result = start;
    if(inputArray.length == 0)
    {
        return start;
    }
    else
    {
        inputArray.forEach(func => result = func(result))
    }
    return result
}

arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

console.log(actionApplyer(13, arrayOfTransforms))

//console.log(wrapAdjective("%")("a dedicated programmer"))