// Variaveis
let numeroVitorias=790
let numeroDerrotas=50
//Função
function classificacao(numeroDerrotas, numeroVitorias){
    let rank
    rank=numeroVitorias-numeroDerrotas
    if (rank<=10)
        console.log("O Herói tem de saldo de " + rank +  " está no nível de Ferro.")
    else if(10<rank && rank<=20)
        console.log("O Herói tem de saldo de " + rank +  " está no nível de Bronze.")
    else if(20<rank && rank<=50)
        console.log("O Herói tem de saldo de " + rank +  " está no nível de Prata.")
    else if(50<rank && rank<=80)
        console.log("O Herói tem de saldo de " + rank +  " está no nível de Ouro.")
    else if(80<rank && rank<=90)
        console.log("O Herói tem de saldo de " + rank +  " está no nível de Diamante.")
    else if(90<rank && rank<=100)
        console.log("O Herói tem de saldo de " + rank +  " está no nível de Lendário.")
    else if(rank>100)
        console.log("O Herói tem de saldo de " + rank +  " está no nível de Imortal.")
}
classificacao( numeroDerrotas, numeroVitorias)