document.getElementById("resultadoBtn").style.display = "block";
function jogar () {
let personagem = ["", "", ""]
let viloes = ["", "", ""]
let forcaDoPersonagem = 0
let forcaViloes = 0
    for (let i = 0; i<3; i++){
     escolhaPersonagem = prompt("Escolha o nome do personagem")
     personagem[i] = escolhaPersonagem
     forcaDoPersonagem = forcaDoPersonagem + Math.floor(Math.random() * 10) + 1
}
let viloesPosiveis = [ "Scar", "Malévola", "Úrsula", "Jafar", "Hades", "Gaston", "Capitão Gancho", "Rainha Má", "Cruella de Vil", "Dr. Facilier"]

    for (let i = 0; i<3 ; i++) {
      let indiceAleatorio = Math.floor(Math.random() * viloesPosiveis.length)
        viloes[i] = viloesPosiveis[indiceAleatorio]
         forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1
         //cuidado a colocar "let" dentro de loops, pois cria uma variavel do mesmo nome que está fora do loop
    }    
    alert(viloes)
    if(forcaDoPersonagem > forcaViloes){
        alert(`Os personagens ${personagem} VENCERAM o cabo de guerra.A força foi dos personagens foi ${forcaDoPersonagem} e a dos vilões ${forcaViloes}`)
    }else if (forcaDoPersonagem < forcaViloes){
        alert(`Os vilões ${viloes} VENCERAM o cabo de guerra.A força foi dos vilões foi${forcaViloes} e a dos personagens foi de ${forcaDoPersonagem}`)
    }else{
        alert("EMPATE!.O cabo de guerra partiu no meio")
    }
}

