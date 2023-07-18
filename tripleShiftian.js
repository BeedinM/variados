/* Mais legal do que os comuns números de Fibonacci, os números Triple Shiftian são definidos da seguinte forma: T[n] = 4 * T[n-1] - 5 * T[n-2] + 3 * T[n-3].

Você foi solicitado a criar uma função que aceite uma base com os primeiros 3 números e, em seguida, retorne o elemento de índice n.

tripleShiftian([1,1,1],25) == 1219856746
tripleShiftian([1,2,3],25) == 2052198929
tripleShiftian([6,7,2],25) == -2575238999
tripleShiftian([3,2,1],35) == 23471258855679
tripleShiftian([1,9,2],2) == 2 */

function tripleShiftian(base, n) {
    //aqui defino a lista da base passada
    let series = [...base];
    //loop para fazer o cálculo.
    for (let i = 3; i <= n; i++) {
      let nextElement = 4 * series[i - 1] - 5 * series[i - 2] + 3 * series[i - 3];
      series.push(nextElement);
    }
  
    return series[n];
  }
  