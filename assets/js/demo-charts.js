/*--------------------------------------------------------------
set stat percent bar heights
--------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function(event) { 
    var textHeight = document.getElementById("ds-stat-con0").clientHeight;
    document.getElementById("ds-stat-percent-bar0").style.height = textHeight + "px";
    document.getElementById("ds-stat-percent-bar-inner0").style.height = "71%";
});



/*--------------------------------------------------------------
data sets
--------------------------------------------------------------*/
var riverNameLabels15 = [ "Amazon", "Congo", "Ganges", "Orinoco", "Madeira",
                        "Yangtze", "Negro", "Río del la Plata", "Yenisei", "Brahmaputra", 
                        "Japurá", "Paraná", "Lena", "Saint Lawrence", "Mississippi"];

var riverNameLabels12 = [ "Amazon", "Congo", "Ganges", "Orinoco", "Madeira",
                        "Yangtze", "Negro", "Río del la Plata", "Yenisei", "Brahmaputra"];

var riverLength = [ 6992, 4371, 2948, 2140, 3380, 
                    6418, 2230, 290, 5550, 2840, 
                    2615, 4880, 4472, 3058, 3730 ];

var riverLength12 = [ 6992, 4371, 2948, 2140, 3380, 
                    6418, 2230, 290, 5550, 2840, ];

var riverNameLabels5 = [ "Amazon", "Congo", "Ganges", "Orinoco", "Madeira"];

var riverLength5 = [ 6992, 4371, 2948, 2140, 3380];

var rainFallLabels = [ "January", "February", "March", "April", "May", "June"];

var rainFallCharlotte = [ 3.43, 3.31, 4.02, 3.03, 3.19, 3.74];

var rainFallSanAntonio = [ 1.65, 1.73, 1.89, 2.6, 4.72, 4.29];

var rainFallSeattle = [ 5.55, 3.46, 3.7, 2.68, 1.93, 1.54];

var rainFallSanFrancisco = [4.49, 4.45, 3.27, 1.46, 0.71, 0.16];

var nileLabels = [1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949,
                    1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959,
                    1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969];

var nileData = [676, 649, 846, 812, 742, 801, 1040, 860, 874, 848, 890,
                744, 749, 838, 1050, 918, 986, 797, 923, 975, 815,
                1020,  906,  901, 1170,  912,  746,  919,  718,  714];

var nileAvg = [919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35,
                919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35,
                919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35];

var nileLabels10 = [1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949];

var nileAvg10 = [919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35, 919.35];

var nileData10 = [676, 649, 846, 812, 742, 801, 1040, 860, 874, 848];


/*--------------------------------------------------------------
demoBarChart
--------------------------------------------------------------*/
var ctx0 = document.getElementById("demoBarChart");
var demoBarChart = new Chart(ctx0, {
    type: 'bar',
    data: {
        labels: riverNameLabels12,
        datasets: [{
            label: 'Length (km)',
            data: riverLength12,
            backgroundColor: '#0E94A6',
        }]
    },
    options: {
        legend: {
            display: false,
          },
            scales: {
                xAxes: [{
                    display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'River',
                    fontSize: 14,
                    fontColor: "#333",
                  }
                }],
                yAxes: [{
                    display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Length (km)', 
                    fontSize: 14,
                    fontColor: "#333",
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
            data: rainFallCharlotte,
            backgroundColor: '#0E94A6',
            borderColor: '#0E94A6',},
            { label: 'San Antonio',
            data: rainFallSanAntonio,
            backgroundColor: '#d8d8d8',
            borderColor: '#d8d8d8',},
            { label: 'San Francisco',
            data: rainFallSanFrancisco,
            backgroundColor: '#6676BC',
            borderColor: '#6676BC',},
            { label: 'Seattle',
            data: rainFallSeattle,
            backgroundColor: '#757575',
            borderColor: '#757575',},
        ]
    },
    options: {
        legend: {
            display: true,
            labels: {
                padding:32,
                fontSize: 14,
                fontColor: "#333"
            }
          },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Rainfall (in)',
                    fontSize: 14,
                    fontColor: "#333",
                  }
            }]

        }
    }
});

/*--------------------------------------------------------------
demoLineBarChart
--------------------------------------------------------------*/
var ctx0c = document.getElementById("demoLineBarChart");
var demoBarChart = new Chart(ctx0c, {
    type: 'bar',
    data: {
        labels: nileLabels10,
        datasets: [
            { label: 'Annual Flow',
            backgroundColor: '#bdbdbd',
            borderColor: '#bdbdbd',
            data: nileData10,
            pointRadius:0,
            pointHitRadius:0,
            pointHoverBorderWidth:0,},
            {label: '100-Year Average',
            type:'line',
            fill:false,
            lineTension: 0,
            borderWidth:3,
            pointBorderWidth:.5,
            pointRadius:0,
            pointHoverRadius:0,
            pointHitRadius:0, 
            pointHoverBorderWidth:1,
            borderColor: "#F57C00",
            borderColor:'#DD6105',
            backgroundColor:'#fff',
            pointRadius:0,
            pointHitRadius:0,
            pointHoverBorderWidth:0,
            data: nileAvg10,},
            
        ]
    },
    options: {
        legend: {
            display: true,
            labels: {
                padding:32,
                fontSize: 14,
                fontColor: "#333"
            }
          },
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Billion Cubic Meters', 
                    fontSize: 14,
                    fontColor: "#333",
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
        {label: 'Amazon',data: [{x: 4345, y: 7050000, r: 30}], backgroundColor:"rgba(14, 148, 166, .6)", hoverBackgroundColor: "rgba(14, 148, 166, .8)",},
        {label: 'Orinoco',data: [{x: 1330, y: 880000, r: 5}], backgroundColor:"rgba(14, 148, 166, .6)", hoverBackgroundColor: "rgba(14, 148, 166, .8)",},
        {label: 'Madeira',data: [{x: 2100, y: 1420000, r: 4}], backgroundColor:"rgba(14, 148, 166, .6)", hoverBackgroundColor: "rgba(14, 148, 166, .8)",},
        {label: 'Negro',data: [{x: 1390, y: 691000, r: 4}], backgroundColor:"rgba(14, 148, 166, .6)", hoverBackgroundColor: "rgba(14, 148, 166, .8)",},
        {label: 'Río de la Plata',data: [{x: 180, y: 3100000, r: 3}], backgroundColor:"rgba(14, 148, 166, .6)", hoverBackgroundColor: "rgba(14, 148, 166, .8)",},
        {label: 'Japurá',data: [{x: 1625, y: 267730, r: 3}], backgroundColor:"rgba(14, 148, 166, .6)", hoverBackgroundColor: "rgba(14, 148, 166, .8)",},
        {label: 'Paraná',data: [{x: 3050, y: 2582672, r: 2}], backgroundColor:"rgba(14, 148, 166, .6)", hoverBackgroundColor: "rgba(14, 148, 166, .8)",},

        {label: 'Congo',data: [{x: 2716, y: 4014500, r: 6}], backgroundColor:"rgba(255, 235, 59, .6)", hoverBackgroundColor: "rgba(255, 235, 59, .8)",},
        
        {label: 'Yangtze',data: [{x: 3988, y: 1808500, r: 4}], backgroundColor:"rgba(221, 97, 5, .6)", hoverBackgroundColor: "rgba(221, 97, 5, .8)",},
        {label: 'Yenisei',data: [{x: 3449, y: 2580000, r: 3}], backgroundColor:"rgba(221, 97, 5, .6)", hoverBackgroundColor: "rgba(221, 97, 5, .8)",},
        {label: 'Brahmaputra',data: [{x: 1765, y: 536600, r: 3}], backgroundColor:"rgba(221, 97, 5, .6)", hoverBackgroundColor: "rgba(221, 97, 5, .8)",},
        {label: 'Lena',data: [{x: 2647, y: 2490000, r: 2}], backgroundColor:"rgba(221, 97, 5, .6)", hoverBackgroundColor: "rgba(221, 97, 5, .8)",},
        {label: 'Ganges',data: [{x: 1832, y: 1635000, r: 5}], backgroundColor:"rgba(221, 97, 5, .6)", hoverBackgroundColor: "rgba(221, 97, 5, .8)",},

        {label: 'Saint Lawrence',data: [{x: 1900, y: 1030000, r: 2}], backgroundColor:"rgba(46, 49, 135, .6)", hoverBackgroundColor: "rgba(46, 49, 135, .8)",},
        {label: 'Mississippi',data: [{x: 2320, y: 3202230, r: 2}], backgroundColor:"rgba(46, 49, 135, .6)", hoverBackgroundColor: "rgba(46, 49, 135, .8)",},
        ]
    },
    options: {
        legend: {
            display: true,
            position: 'right',
        },
        tooltip: {
        },
        scales: {
                xAxes: [{
                    display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Length (km)',
                    fontSize: 14,
                    fontColor: "#333",
                  }
                }],
                yAxes: [{
                    display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Drainage Area (km^2)', 
                    fontSize: 14,
                    fontColor: "#333",
                  }
                }]
            }
    }
});

/*--------------------------------------------------------------
demoLineChart
--------------------------------------------------------------*/
var ctx2b = document.getElementById("demoLineChartb");
var demoLineChartb = new Chart(ctx2b, {
    type: 'line',
    data: {
        labels: rainFallLabels,
        datasets: [
            {label: 'Charlotte',
            data: rainFallCharlotte,
            fill: false,
            lineTension: 0,
            borderWidth:3,
            pointBorderWidth:.5,
            pointRadius:4,
            pointHoverRadius:4,
            pointHitRadius:4, 
            pointHoverBorderWidth:1,
            borderDash:[10,5],
            borderColor: "#0E94A6",
            pointBackgroundColor: "#0E94A6",
            pointHoverBorderColor: "#0E94A6",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            backgroundColor:"#fff",},
            {label: 'San Antonio',
            data: rainFallSanAntonio,
            fill: false,
            lineTension: 0,
            borderWidth:3,
            pointBorderWidth:.5,
            pointRadius:4,
            pointHoverRadius:4,
            pointHitRadius:4, 
            pointHoverBorderWidth:1,
            borderColor: "#bdbdbd",
            pointBackgroundColor: "#bdbdbd",
            pointHoverBorderColor: "#bdbdbd",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            backgroundColor:"#fff",},
            { label: 'San Francisco',
            data: rainFallSanFrancisco,
            fill: false,
            lineTension: 0,
            borderWidth:3,
            pointBorderWidth:.5,
            pointRadius:4,
            pointHoverRadius:4,
            pointHitRadius:4, 
            pointHoverBorderWidth:1,
            borderColor: "#3B44A9",
            pointBackgroundColor: "#3B44A9",
            pointHoverBorderColor: "#3B44A9",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            backgroundColor:"#fff",},
            { label: 'Seattle',
            data: rainFallSeattle,
            fill: false,
            lineTension: 0,
            borderWidth:3,
            pointBorderWidth:.5,
            pointRadius:4,
            pointHoverRadius:4,
            pointHitRadius:4, 
            pointHoverBorderWidth:1,
            borderColor: "#FBC02D",
            pointBackgroundColor: "#FBC02D",
            pointHoverBorderColor: "#FBC02D",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            backgroundColor:"#fff",},
        ]
    },
    options: {
        legend: {
            display: true,
            labels: {
                padding:32,
                fontSize: 14,
                fontColor: "#333"
            }
          },
        scales: {
            yAxes: [{
                    display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Monthly Average Rainfall (in)', 
                    fontSize: 14,
                    fontColor: "#333",
                  }
            }],
        }
    }
});

var ctx2d = document.getElementById("demoLineChartd");
var demoLineChartd = new Chart(ctx2d, {
    type: 'line',
    data: {
        labels: nileLabels,
        datasets: [
            { label: 'Annual Flow',
            data: nileData,
            fill: false,
            lineTension: 0,
            borderWidth:3,
            pointBorderWidth:.5,
            pointRadius:4,
            pointHoverRadius:4,
            pointHitRadius:4, 
            pointHoverBorderWidth:1,
            borderColor: "#0E94A6",
            pointBackgroundColor: "#0E94A6",
            pointHoverBorderColor: "#0E94A6",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            backgroundColor:"#fff",},
            {label: '100-Year Average',
            data: nileAvg,
            fill: false,
            lineTension: 0,
            borderWidth:3,
            pointBorderWidth:.5,
            pointRadius:0,
            pointHoverRadius:0,
            pointHitRadius:0, 
            pointHoverBorderWidth:1,
            borderColor: "#F57C00",
            pointBackgroundColor: "#F57C00",
            pointHoverBorderColor: "#F57C00",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            backgroundColor:"#fff",},
        ]
    },
    options: {
        legend: {
            display: true,
            labels: {
                padding:32,
                fontSize: 14,
                fontColor: "#333"
            }
          },
        scales: {
            yAxes: [{
                    display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Billion Cubic Meters', 
                    fontSize: 14,
                    fontColor: "#333",
                  }
            }],
            xAxes: [{
                ticks: {
                    autoSkip: true,
                }
            }]
        }
    }
});

var ctx2c = document.getElementById("demoLineChartC");
var demoLineChart = new Chart(ctx2c, {
    type: 'line',
    data: {
        labels: nileLabels,
        datasets: [{
            label: 'Discarge (m^3/s)',
            data: nileData,
            backgroundColor:'rgba(14, 148, 166, 0.2)',
            borderWidth:3,
            pointBorderWidth:.5,
            pointRadius:4,
            pointHoverRadius:4,
            pointHitRadius:4, 
            pointHoverBorderWidth:1,
            borderColor: "#0E94A6",
            pointBackgroundColor: "#0E94A6",
            pointHoverBorderColor: "#0E94A6",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {

            yAxes: [{
                    display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Billion Cubic Meters', 
                    fontSize: 14,
                    fontColor: "#333",
                  }
                }]

        }
    }
});

var ctx2e = document.getElementById("demoSparkline");
var demoSparkline = new Chart(ctx2e, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            { label: 'San Antonio',
            data: [1.65, 1.73, 1.89, 2.6, 4.72, 4.29, 2.05, 2.56, 2.99, 3.86, 2.6, 1.97],
            fill: false,
            lineTension: 0,
            borderWidth:3,
            pointRadius:0,
            pointHoverRadius:0,
            pointHitRadius:0, 
            pointHoverBorderWidth:0,
            borderColor: "#0E94A6",
            backgroundColor:"#fff",},
        ]
    },
    options: {
        legend: {
            display: false,
          },
        scales: {
            yAxes: [{
                display: false,
            }],
            xAxes: [{
                display: false,
            }]
        }
    }
});

var ctx2e2 = document.getElementById("demoSparkline2");
var demoSparkline2 = new Chart(ctx2e2, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            { label: 'Seattle',
            data: [5.55, 3.46, 3.7, 2.68, 1.93, 1.54, 0.67, 0.87, 1.42, 3.46, 6.54, 5.31],
            fill: false,
            lineTension: 0,
            borderWidth:3,
            pointRadius:0,
            pointHoverRadius:0,
            pointHitRadius:0, 
            pointHoverBorderWidth:0,
            borderColor: "#0E94A6",
            backgroundColor:"#fff",},
        ]
    },
    options: {
        legend: {
            display: false,
          },
        scales: {
            yAxes: [{
                display: false,
            }],
            xAxes: [{
                display: false,
            }]
        }
    }
});

/*--------------------------------------------------------------
demoPieChart
--------------------------------------------------------------*/

/*--------------------------------------------------------------
demoDoughnutChart
--------------------------------------------------------------*/
var ctx4 = document.getElementById("demoDoughnutChart");
var demoDoughnutChart = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ["Africa", "Eurasia", "North America", "South America"],
        datasets: [{
            label: 'Rivers',
            data: [13, 50, 17, 55],
            backgroundColor: [
                '#0E94A6',
                '#bdbdbd',
                '#3B44A9',
                '#FBC02D',
            ],
            borderColor: [
                '#0E94A6',
                '#bdbdbd',
                '#3B44A9',
                '#FBC02D',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false,
        },
    },
});

document.getElementById('demoDoughnutChartLegend').innerHTML = demoDoughnutChart.generateLegend();
/*--------------------------------------------------------------
demoPolarAreaChart
--------------------------------------------------------------*/
var ctx5 = document.getElementById("demoPolarAreaChart");
var demoPolarAreaChart = new Chart(ctx5, {
    type: 'polarArea',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'Average Rainfall (in)',
            data: [1.65, 1.73, 1.89, 2.6, 4.72, 4.29, 2.05, 2.56, 2.99, 3.86, 2.6, 1.97],
            backgroundColor: ["#424242","#bdbdbd", "#16B9D4", "#0C7C84", "#0E94A6", "#FFEB3B", "#FBC02D", "#FFF9C4", "#6676BC", "#232968", "#3B44A9", "#757575"],
            borderColor:"#fff",
            borderWidth: .5,
        }]
    },
    options: {
        legend: {
            display: false,
        },
    },
});

document.getElementById('demoPolarAreaLegend').innerHTML = demoPolarAreaChart.generateLegend();
/*--------------------------------------------------------------
demoRadarChart
--------------------------------------------------------------*/
var ctx6 = document.getElementById("demoRadarChart");
var demoRadarChart = new Chart(ctx6, {
    type: 'radar',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: "Seattle",
            backgroundColor: "rgba(14, 148, 166, 0.2)",
            borderColor: "#0E94A6",
            borderWidth:3,
            pointBorderWidth:.5,
            pointRadius:4,
            pointHoverRadius:4,
            pointHitRadius:4, 
            pointHoverBorderWidth:1,
            pointBackgroundColor: "#0E94A6",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#0E94A6",
            data: [5.55, 3.46, 3.7, 2.68, 1.93, 1.54, 0.67, 0.87, 1.42, 3.46, 6.54, 5.31]},
        {
            label: "San Antonio",
            backgroundColor: "rgba(189, 189, 189, 0.2)",
            borderWidth:3,
            pointBorderWidth:.5,
            pointRadius:4,
            pointHoverRadius:4,
            pointHitRadius:4, 
            pointHoverBorderWidth:1,
            borderColor: "#bdbdbd",
            pointBackgroundColor: "#bdbdbd",
            pointHoverBorderColor: "#bdbdbd",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            data: [1.65, 1.73, 1.89, 2.6, 4.72, 4.29, 2.05, 2.56, 2.99, 3.86, 2.6, 1.97]},
        ],
    },
    options: {
        legend: {
            display: false,
        },
    },
});

document.getElementById('demoRadarLegend').innerHTML = demoRadarChart.generateLegend();

