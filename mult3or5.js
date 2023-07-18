function solution(number){

    if(number < 0) {
      return 0;
    }
  
  let totalSum = 0;
  
  for(let num = 1; num < number; num++){
    if (num % 3 === 0 || num % 5 === 0) {
      totalSum += num;
    }
  }
  
  return totalSum;
}