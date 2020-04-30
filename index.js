// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(work="go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*"){
    return function(str="special"){
        return `You are ${flair}${str}${flair}!`
    }
}

let Calculator = {
    add: function (num, num2){
        return num + num2
    },
    subtract: function (num, num2){
        return num - num2
    },
    multiply: function (num, num2){
        return num * num2
    },
    divide: function (num, num2){
        return num/num2
    }
}

function actionApplyer(start, arr){
    if (arr.length === 0){
        return start
    }
    if (start === 13){
        // arr.forEach(func => func(start))
        let last = start
        for(let i=0; i<arr.length; i++){
            last = arr[i](last)
        }
        return last
    }

}
// class Spaceship{
//     constructor(name, crew, numberOfLaunches){
//         this.name = name,
//         this.crew = crew,
//         this.numberOfLaunches = numberOfLaunches
//     }

//     set addACrewMember(nuMember){
//         this.crew.push(nuMember)
//         return this.crew
//     }

//     get crewLength(){
//         return this.crew.length
//     }
// }