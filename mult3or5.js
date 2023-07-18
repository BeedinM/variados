function solution(number){
    //verifico se o número é negativo.
    if(number < 0) {
      return 0;
    }
  //crio variável para conter o total da soma.
  let totalSum = 0;
  //loop para verificar número por número se é multiplicável.
  for(let num = 1; num < number; num++){
    if (num % 3 === 0 || num % 5 === 0) {
      totalSum += num;
    }
  }
  
  return totalSum;
}