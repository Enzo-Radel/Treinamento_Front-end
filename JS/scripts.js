
function logoClique(){
    let menu = document.getElementById("menu-header")
    let pesquisa = document.getElementById("pesquisa")

    if (menu.classList.contains("text-right")){
        menu.classList.replace("text-right","text-left")
        pesquisa.classList.replace("element-left","element-right")
    }else{
        menu.classList.replace("text-left","text-right")
        pesquisa.classList.replace("element-right","element-left")
    }
}

let barraCentral = document.getElementById("barra-central")
barraCentral.addEventListener("mouseover",mudaParaVermelho)
barraCentral.addEventListener("mouseout",mudaParaAzul)
function mudaParaVermelho(){
    if (barraCentral.classList.contains("fundo-azul")){
        barraCentral.classList.replace("fundo-azul","fundo-vermelho")
    }
}
function mudaParaAzul(){
    if (barraCentral.classList.contains("fundo-vermelho")){
        barraCentral.classList.replace("fundo-vermelho","fundo-azul")
    }
}

let cont = 1
let intervalo
let imageBox = document.getElementById("image-box")
let delay = 3000

firstImg()
changeImg()

function firstImg(){
    imageBox.innerHTML = "<img src=imagens/bg-form1.jpeg class= 'slide'>"
}

function changeImg(){
    intervalo = setInterval(function(){
        cont++
        imageBox.innerHTML = "<img src=imagens/bg-form"+cont+".jpeg class= 'slide'>"
        if (cont==2){
            cont = 0
        }
    },delay)

    intervalo
}

// let dados = document.querySelectorAll(".box")
// function changeBox(){
//     intervalo = setInterval(function(){
//         let intermediario
//         for(let contador=0;contador<dados.length;contador++){
//             if (contador==dados.length-1) {
//                 intermediario = dados[0]
//                 dados[0] = dados[dados.length]   
//                }else{
//                 intermediario = dados[contador+1]
//                 dados[contador+1] = dados[contador]
//             }
//         }
//     },delay)

//     intervalo
// }

const abreModal = document.getElementById("abre-modal")
const modal = document.getElementById("modal-container")
let lugarClicado
abreModal.addEventListener("click",abrirModal)

function abrirModal(){
    modal.classList.add("mostrar")
}

modal.addEventListener("click", (e) => {
    lugarClicado = e.target.getAttribute("id")
    if(lugarClicado == "btn-fechar" || lugarClicado == "modal-container"){
        fecharModal()
    }                                                                                              
})

function fecharModal(){
    modal.classList.remove("mostrar")
}