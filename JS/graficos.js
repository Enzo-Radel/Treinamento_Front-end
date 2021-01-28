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

const direita = document.getElementById("direita")
const esquerda = document.getElementById("esquerda")
const cima = document.getElementById("cima")
const baixo = document.getElementById("baixo")
const caixaEsquerda = document.getElementById("caixa-esquerda")
const caixaDireita = document.getElementById("caixa-direita")
const botoes = document.getElementById("botoes")

botoes.addEventListener("click",(e) => {
    const btnClicado = e.target.getAttribute("id")
    const listaEsquerda = document.getElementById("select-from")
    const listaDireita = document.getElementById("select-to")
    let numOpcoes

    switch (btnClicado) {
        case "direita":
            numOpcoes = listaEsquerda.querySelectorAll("option")
            for(cont=0;cont<numOpcoes.length;cont++) {
                let opcao = numOpcoes[cont]
                if (opcao.selected) {
                    let conteudo = listaDireita.innerHTML
                    let valor = opcao.value
                    let texto = opcao.text
                    listaDireita.innerHTML = conteudo + "<option value='"+valor+"'>"+texto+"</option>"
                    opcao.remove()
                }
            }
            break;
        case "esquerda":
            numOpcoes = listaDireita.querySelectorAll("option")
            for(cont=0;cont<numOpcoes.length;cont++) {
                let opcao = numOpcoes[cont]
                if (opcao.selected) {
                    let conteudo = listaEsquerda.innerHTML
                    let valor = opcao.value
                    let texto = opcao.text
                    listaEsquerda.innerHTML = conteudo + "<option value='"+valor+"'>"+texto+"</option>"
                    opcao.remove()
                }
            }
            break;
        case "cima":
            numOpcoes = listaDireita.querySelectorAll("option")
            for(cont=0;cont<numOpcoes.length;cont++){
                opcao = numOpcoes[cont]
                if (opcao.selected) {
                    if (cont>0){
                        valor = opcao.value
                        texto = opcao.text
                        newPos = cont-1
                        intermediario = document.createElement("option")
                        intermediario = numOpcoes[cont]
                        numOpcoes[newPos].before(intermediario)
                    }
                }
            }
            break;
        case "baixo":
            numOpcoes = listaDireita.querySelectorAll("option")
            for(cont=0;cont<numOpcoes.length;cont++){
                opcao = numOpcoes[cont]
                if (opcao.selected) {
                    if (cont<numOpcoes.length-1){
                        valor = opcao.value
                        texto = opcao.text
                        newPos = cont+1
                        intermediario = document.createElement("option")
                        intermediario = numOpcoes[cont]
                        numOpcoes[newPos].after(intermediario)
                    }
                }
            }
            break;
        default:

            break;
    }

    
})

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