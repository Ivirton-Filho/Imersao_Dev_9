let rodadas = 1
function jogar () {
    while(rodadas <= 3 ) {
        let escolhaDoJogador = parseFloat(prompt(`Rodada ${rodadas} escolha o vidro (1- 2- 3-)`) )
        if(escolhaDoJogador >= 4 || escolhaDoJogador === 0){
            alert("Digite um número entre 1 a 3")
            let escolhaDoComputador
        }
        escolhaDoComputador =  Math.floor(Math.random()* 3) + 1
        if(escolhaDoJogador === escolhaDoComputador){
            alert(`Você perdeu! o piso quebrado estava na ponte ${escolhaDoComputador}`)
            break;
           let rodadas = 0
        }else{
            alert("Você passou para a próxima rodada")
            rodadas = rodadas + 1
        }
        if(rodadas === 4 ){
            alert("Parabéns, você ganhou")
        }
}
}
