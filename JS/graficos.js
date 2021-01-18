var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Em uso', 'Restante'],
        datasets: [{
            label: '# of Votes',
            data: [9, 1],
            backgroundColor: [
                'rgba(150, 31, 21, 1)',
                'rgba(4, 34, 127, 1)'
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        layout: {
            padding: {
                left: 0, right: 0, top: 0, bottom: 0
            }
        }
    }
});