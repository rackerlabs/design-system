/*--------------------------------------------------------------
data sets
--------------------------------------------------------------*/
var riverNameLabels15 = [ "Amazon", "Congo", "Ganges", "Orinoco", "Madeira",
                        "Yangtze", "Negro", "Río del la Plata", "Yenisei", "Brahmaputra", 
                        "Japurá", "Paraná", "Lena", "Saint Lawrence", "Mississippi"];

var riverLength = [ 6992, 4371, 2948, 2140, 3380, 
                    6418, 2230, 290, 5550, 2840, 
                    2615, 4880, 4472, 3058, 3730 ];

var rainFallLabels = [ "January", "February", "March", "April", "May", "June"];

var rainFallCharlotte = [ 3.43, 3.31, 4.02, 3.03, 3.19, 3.74];

var rainFallSanAntonio = [ 1.65, 1.73, 1.89, 2.6, 4.72, 4.29];

var rainFallSeattle = [ 5.55, 3.46, 3.7, 2.68, 1.93, 1.54];

var rainFallSanFrancisco = [4.49, 4.45, 3.27, 1.46, 0.71, 0.16];

/*--------------------------------------------------------------
demoBarChart
--------------------------------------------------------------*/
var ctx0 = document.getElementById("demoBarChart");
var demoBarChart = new Chart(ctx0, {
    type: 'bar',
    data: {
        labels: riverNameLabels15,
        datasets: [{
            label: '# of Votes',
            data: riverLength,
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx0b = document.getElementById("demoBarChartb");
var demoBarChartb = new Chart(ctx0b, {
    type: 'bar',
    data: {
        labels: rainFallLabels,
        datasets: [
            {label: 'Charlotte',
            data: rainFallCharlotte,},
            { label: 'San Antonio',
            data: rainFallSanAntonio,},
            { label: 'San Francisco',
            data: rainFallSanFrancisco,},
            { label: 'Seattle',
            data: rainFallSeattle,},
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

/*--------------------------------------------------------------
demoBubbleChart
--------------------------------------------------------------*/
var ctx1 = document.getElementById("demoBubbleChart");

var demoBubbleChart = new Chart(ctx1, {
    type: 'bubble',
    data: {
        datasets: [
        {label: 'Amazon',data: [{x: 4345, y: 7050000, r: 30}]},
        {label: 'Congo',data: [{x: 2716, y: 4014500, r: 6}]},
        {label: 'Ganges',data: [{x: 1832, y: 1635000, r: 5}]},
        {label: 'Orinoco',data: [{x: 1330, y: 880000, r: 5}]},
        {label: 'Madeira',data: [{x: 2100, y: 1420000, r: 4}]},
        {label: 'Yangtze',data: [{x: 3988, y: 1808500, r: 4}]},
        {label: 'Negro',data: [{x: 1390, y: 691000, r: 4}]},
        {label: 'Río de la Plata',data: [{x: 180, y: 3100000, r: 3}]},
        {label: 'Yenisei',data: [{x: 3449, y: 2580000, r: 3}]},
        {label: 'Brahmaputra',data: [{x: 1765, y: 536600, r: 3}]},
        {label: 'Japurá',data: [{x: 1625, y: 267730, r: 3}]},
        {label: 'Paraná',data: [{x: 3050, y: 2582672, r: 2}]},
        {label: 'Lena',data: [{x: 2647, y: 2490000, r: 2}]},
        {label: 'Saint Lawrence',data: [{x: 1900, y: 1030000, r: 2}]},
        {label: 'Mississippi',data: [{x: 2320, y: 3202230, r: 2}]},
        ]
    },
    options: {
        legend: {
            display: true,
        },
        tooltip: {
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

/*--------------------------------------------------------------
demoLineChart
--------------------------------------------------------------*/
var ctx2 = document.getElementById("demoLineChart");
var demoLineChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: riverNameLabels15,
        datasets: [{
            label: '# of Votes',
            data: riverLength,
            borderWidth: 1,
            fill: false,
            lineTension: 0,
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx2b = document.getElementById("demoLineChartb");
var demoLineChartb = new Chart(ctx2b, {
    type: 'line',
    data: {
        labels: rainFallLabels,
        datasets: [
            {label: 'Charlotte',
            data: rainFallCharlotte,
            borderWidth: 1,
            fill: false,
            lineTension: 0,},
            { label: 'San Antonio',
            data: rainFallSanAntonio,
            borderWidth: 1,
            fill: false,
            lineTension: 0,},
            { label: 'San Francisco',
            data: rainFallSanFrancisco,
            borderWidth: 1,
            fill: false,
            lineTension: 0,},
            { label: 'Seattle',
            data: rainFallSeattle,
            borderWidth: 1,
            fill: false,
            lineTension: 0,},
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx2c = document.getElementById("demoLineChartC");
var demoLineChart = new Chart(ctx2c, {
    type: 'line',
    data: {
        labels: riverNameLabels15,
        datasets: [{
            label: '# of Votes',
            data: riverLength,
            borderWidth: 1,
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

/*--------------------------------------------------------------
demoPieChart
--------------------------------------------------------------*/
var ctx3 = document.getElementById("demoPieChart");
var demoPieChart = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
});

/*--------------------------------------------------------------
demoDoughnutChart
--------------------------------------------------------------*/
var ctx4 = document.getElementById("demoDoughnutChart");
var demoDoughnutChart = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
});

/*--------------------------------------------------------------
demoPolarAreaChart
--------------------------------------------------------------*/
var ctx5 = document.getElementById("demoPolarAreaChart");
var demoPolarAreaChart = new Chart(ctx5, {
    type: 'polarArea',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
});

/*--------------------------------------------------------------
demoRadarChart
--------------------------------------------------------------*/
var ctx6 = document.getElementById("demoRadarChart");
var demoRadarChart = new Chart(ctx6, {
    type: 'radar',
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]},
        {
            label: "My Second dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }],
    },
});
