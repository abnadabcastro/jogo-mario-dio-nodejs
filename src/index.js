const playe1 = {
    NOME: "Mario",
    VELOCIDADADE:4,
    MANOBRABILIDADE:3,
    PODER:3,
    PONTOS:0,
};

const playe2 = {
    NOME: "",
    VELOCIDADADE:3,
    MANOBRABILIDADE:4,
    PODER:4,
    PONTOS:0,
};

async function rollDice(){
   return Math.floor(Math.random() *6) +1;
}