var volumeDeChamadas = new Chart(document.getElementById('volumeDeChamadas').getContext('2d'), {
    type: 'bar',
    data: {
        datasets: [
        {
            label: 'Indice Pluviometrico',
            data: [184, 155, 125, 81, 92, 98, 78, 76, 116, 133, 109, 143],
            backgroundColor: "rgba(233,240,253,1)",
            borderColor: "rgba(52,116,224,1)",
            borderWidth: 3
        },{
            type: 'line',
            label: 'Temperatura',
            data: [21,20.4,18.2,16.2,13.4,13.5,14.2,15.3,16.7,18.4,19.8,18.4],
            backgroundColor: "rgba(253,245,218,1)",
            borderColor: "rgba(248,204,70,1)",
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