var volumeDeChamadas = new Chart(document.getElementById('volumeDeChamadas').getContext('2d'), {
    type: 'bar',
    data: {
        datasets: [
        {
            type: 'line',
            label: 'Temperatura',
            data: [21,20,18,16,13,13,14,15,16,18,19,18],
            backgroundColor: "rgba(253,245,218,0.5)",
            borderColor: "rgba(248,204,70,1)",
            borderWidth: 3
        },{
            label: 'Indice Pluviometrico',
            data: [42, 40, 36, 32, 26, 26, 28, 30, 32, 36, 38, 36],
            backgroundColor: "rgba(233,240,253,0.5)",
            borderColor: "rgba(52,116,224,1)",
            borderWidth: 3
        }],
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    },
    options:{
        tooltips: {
            backgroundColor: "rgba(0,0,0,1)"
        }
    }
});

// --------------------------------------------------------------------------

// const direita = document.getElementById("direita")
// const esquerda = document.getElementById("esquerda")
// const cima = document.getElementById("cima")
// const baixo = document.getElementById("baixo")
const caixaEsquerda = document.getElementById("caixa-esquerda")
const caixaDireita = document.getElementById("caixa-direita")
// const botoes = document.getElementById("botoes")

const arrastaveis = document.querySelectorAll(".opcao")
const caixas = document.querySelectorAll(".caixa")

arrastaveis.forEach(arrastavel => {
    arrastavel.addEventListener('dragstart', () => {
        arrastavel.classList.add('arrastando')
    })
    arrastavel.addEventListener('dragend', () => {
        arrastavel.classList.remove('arrastando')
        // console.log(e)
    })
})

caixas.forEach(caixa => {
    caixa.addEventListener('dragover', (e) => {
        // console.log(caixa)
        
        e.preventDefault()
        const afterElement = closest(caixa,e.clientY)
        const arrastavel = document.querySelector('.arrastando')

        if (afterElement == null) {
            caixa.appendChild(arrastavel)
            // console.log("null")
        } else {
            caixa.insertBefore(arrastavel, afterElement)
            // console.log("não null")
        }

    })
})

function closest(caixa,y){

    const elementos = caixa.querySelectorAll('.opcao:not(.arrastando)')
    final = Number.POSITIVE_INFINITY
    // console.log(caixa)
    // console.log(elementos)

    elementos.forEach(elemento => {
        const intermediario = elemento.getBoundingClientRect()
        const posicaoElemento = intermediario.top + intermediario.height/2
        const resultado = posicaoElemento - y

        if (resultado >= 0 && resultado < final ) {
            caixaAnterior = caixa
            final = resultado
            // console.log(elemento.innerHTML +": "+ resultado)
            // console.log(elemento)
            teste = elemento
            return

        }else{
            if (resultado < final) {
                teste = null
                return
            }
        }

    })
    if(caixaAnterior != caixa){
        teste = null
    }
    // console.log(teste)
    return teste
}

// botoes.addEventListener("click",(e) => {
//     const btnClicado = e.target.getAttribute("id")
//     const listaEsquerda = document.getElementById("select-from")
//     const listaDireita = document.getElementById("select-to")
    
//     let numOpcoes

//     switch (btnClicado) {
//         case "direita":
//             numOpcoes = listaEsquerda.querySelectorAll("option")
//             for(cont=0;cont<numOpcoes.length;cont++) {
//                 let opcao = numOpcoes[cont]
//                 if (opcao.selected) {
//                     let conteudo = listaDireita.innerHTML
//                     let valor = opcao.value
//                     let texto = opcao.text
//                     listaDireita.innerHTML = conteudo + "<option class='opcao' value='"+valor+"'>"+texto+"</option>"
//                     opcao.remove()
//                 }
//             }
//             break;
//         case "esquerda":
//             numOpcoes = listaDireita.querySelectorAll("option")
//             for(cont=0;cont<numOpcoes.length;cont++) {
//                 let opcao = numOpcoes[cont]
//                 if (opcao.selected) {
//                     let conteudo = listaEsquerda.innerHTML
//                     let valor = opcao.value
//                     let texto = opcao.text
//                     listaEsquerda.innerHTML = conteudo + "<option class='opcao' value='"+valor+"'>"+texto+"</option>"
//                     opcao.remove()
//                 }
//             }
//             break;
//         case "cima":
//             numOpcoes = listaDireita.querySelectorAll("option")
//             for(cont=0;cont<numOpcoes.length;cont++){
//                 opcao = numOpcoes[cont]
//                 newPos = cont-1
//                 if (opcao.selected && cont>0 && numOpcoes[newPos].selected==false) {
//                     valor = opcao.value
//                     texto = opcao.text
//                     intermediario = document.createElement("option")
//                     intermediario.innerHTML = opcao.innerHTML
//                     intermediario.value = opcao.value
//                     intermediario.selected = true
//                     intermediario.classList.add("opcao")
//                     numOpcoes[newPos].before(intermediario)
//                     opcao.remove()
//                     numOpcoes = listaDireita.querySelectorAll("option")
//                 }
//             }
//             break;
//         case "baixo":
//             numOpcoes = listaDireita.querySelectorAll("option")
//             for(cont=numOpcoes.length-1;cont>=0;cont--){
//                 opcao = numOpcoes[cont]
//                 newPos = cont+1
//                 if (cont<numOpcoes.length-1 && opcao.selected && numOpcoes[newPos].selected==false){
//                     valor = opcao.value
//                     texto = opcao.text
//                     intermediario = document.createElement("option")
//                     intermediario.innerHTML = opcao.innerHTML
//                     intermediario.value = opcao.value
//                     intermediario.selected = true
//                     intermediario.classList.add("opcao")
//                     numOpcoes[newPos].after(intermediario)
//                     opcao.remove()
//                     numOpcoes = listaDireita.querySelectorAll("option")
//                 }
//             }
//             break;
//         default:

//             break;
//     }

    
// })

// --------------------------------------------------------------------------

// var ramais = new Chart(document.getElementById('ramais').getContext('2d'), {
//     type: 'pie',
//     data: {
//         labels: ['Em uso', 'Restante'],
//         datasets: [{
//             label: '# of Votes',
//             data: [9, 1],
//             backgroundColor: [
//                 'rgba(150, 31, 21, 1)',
//                 'rgba(4, 34, 127, 1)'
//             ],
//             borderColor: [
//                 'rgba(255, 255, 255, 1)',
//             ],
//             borderWidth: 2
//         }]
//     },
//     options: {
//         layout: {
//             padding: {
//                 left: 0, right: 0, top: 0, bottom: 0
//             }
//         }
//     }
// });

// var filaDeAtendimento = new Chart(document.getElementById('filaDeAtendimento').getContext('2d'), {
//     type: 'pie',
//     data: {
//         labels: ['Em uso', 'Restante'],
//         datasets: [{
//             label: '# of Votes',
//             data: [6, 1],
//             backgroundColor: [
//                 'rgba(150, 31, 21, 1)',
//                 'rgba(4, 34, 127, 1)'
//             ],
//             borderColor: [
//                 'rgba(255, 255, 255, 1)',
//             ],
//             borderWidth: 2
//         }]
//     },
//     options: {
//         layout: {
//             padding: {
//                 left: 0, right: 0, top: 0, bottom: 0
//             }
//         }
//     }
// });

// var uras = new Chart(document.getElementById('uras').getContext('2d'), {
//     type: 'pie',
//     data: {
//         labels: ['Em uso', 'Restante'],
//         datasets: [{
//             label: '# of Votes',
//             data: [6, 0],
//             backgroundColor: [
//                 'rgba(150, 31, 21, 1)',
//                 'rgba(4, 34, 127, 1)'
//             ],
//             borderColor: [
//                 'rgba(255, 255, 255, 1)',
//             ],
//             borderWidth: 2
//         }]
//     },
//     options: {
//         layout: {
//             padding: {
//                 left: 0, right: 0, top: 0, bottom: 0
//             }
//         }
//     }
// });