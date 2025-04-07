function jogar(){
    nome = prompt("Qual é seu nome?")
    idade = prompt("Quantos anos você tem?")
if(idade < 18) {
    alert("Você NÃO pode jogar")
} else {
    alert("Vamos começar a jogar")
   let escolhaDojogador = parseInt(prompt("Escolha: 1-Pedra, 2-Papel, 3-Tesoura"))
   let escolhaComputador = Math.floor(Math.random()* 3) + 1
    switch (escolhaDojogador) {
        case 1 : // jogador escolheu pedra
        if(escolhaComputador === 1){
            alert("EMPATE")
        }else if(escolhaComputador === 2){
            alert(`Computador escolheu PAPEL e ${nome} VENCEU`)
        }else if(escolhaComputador === 3){
            alert(`Computador escolheu TESOURA e ${nome} PERDEU`)
        }
        break;
        case 2 : // jogador escolheu papel
        if(escolhaComputador === 1){
            alert(`Computador escolheu PEDRA E ${nome} PERDEU`)
        } else if (escolhaComputador === 2) {
            alert("EMPATE")
        }else if (escolhaComputador === 3){
            alert(`Computador escolheu TESOURA e ${nome} VENCEU`)
        }
        break;
        case 3: // jogador escolheu Tesoura
        if(escolhaComputador === 1){
            alert(`Computador escolheu PEDRA e ${nome} VENCEU`)
        }else if (escolhaComputador === 2){
            alert(`Computador escolheu PAPEL e ${nome} PERDEU`)
        }else if (escolhaComputador === 3){
            alert("EMPATE")
        }
        break;
}
}
}