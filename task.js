'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2)-(4*a*c);
  if(d<0){
    return arr;
  }else if (d==0){
    let x = -b/(2*a);
  }else if(d>0){
    let x1 = (-b+Math.sqrt(d))/(2*a); 
    let x2 = (-b-Math.sqrt(d))/(2*a);
  }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
