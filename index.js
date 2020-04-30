// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork= function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visual="*") {
    return function(param="special"){
        return `You are ${visual}${param}${visual}!`

    }
}

let Calculator ={ add: ()=>1+3,
                    subtract: ()=>1-3,
                    multiply: ()=> 1*3,
                    divide: ()=> 10/5
}

function actionApplyer(int, array) {
     array.forEach(func => int = func(int))

     return int
}