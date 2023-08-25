function vinteUm(n) {
    if(n < 21) {
        console.log('você perdeu')
    } else if(n > 21) {
        console.log('você perdeu')
    } else {
        console.log('você ganhou')
    }
};

function cartasFunc() {
    return Math.floor(Math.random() * 12) + 1;
};

function jogar(vzs) {
    let cartas = 0
    for(let i = 0; i < vzs; i++) {
        const carta = cartasFunc()
        cartas += carta;
    }
    console.log(cartas)
    return cartas;
}

console.log(vinteUm(jogar(3)));