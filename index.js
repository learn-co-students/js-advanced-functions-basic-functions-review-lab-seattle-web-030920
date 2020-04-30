// Your code here
function saturdayFun(atividade = "roller-skate"){
    return `This Saturday, I want to ${atividade}!`
}

let mondayWork = function(atividade = "go to the office"){
    return `This Monday, I will ${atividade}.`
}

let wrapAdjective = function(ramdom = "*"){
    return function(random2 = "a hard worker"){
        return `You are ${ramdom}${random2}${ramdom}!`
    }
}

const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
  }
  
  let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }