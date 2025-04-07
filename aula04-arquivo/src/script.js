document.getElementById("resultadoBtn").style.display = "block";
function jogar () {
let personagem = ["", "", ""]
let viloes = ["", "", ""]
let forcaPersonagem = 0
let forcaViloes = 0
    for (let i = 0; i<3; i++){
    let escolhaPersonagem = prompt("Escolha o nome do personagem")
     personagem[i] = escolhaPersonagem
}
let viloesPosiveis = [ "Scar", "Malévola", "Úrsula", "Jafar", "Hades", "Gaston", "Capitão Gancho", "Rainha Má", "Cruella de Vil", "Dr. Facilier"]

    for (let i = 0; i<3 ; i++) {
      let indiceAleatorio = Math.floor(Math.random() * viloesPosiveis.length)
        viloes[i] = viloesPosiveis[indiceAleatorio]
        alert(viloes)
    }    
}

