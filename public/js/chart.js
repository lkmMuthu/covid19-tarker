/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function barGraph(data) {
    let admit = data.admit_date;
    let positive = data.positive_date;
    let death = data.date_of_death;
    let discharges = data.discharge_date;
    let date_arr = [];
    let count = 0;
    admit.forEach(function (item) {
        date_arr[item.admit_date] = [item.admit_date, item.count, 0, 0, 0];
        count++;
    });

    let count1 = 0;
    positive.forEach(function (item) {
        if (date_arr[item.positive_date]) {
            date_arr[item.positive_date][2] = item.count;
        } else {
            date_arr[item.positive_date] = [item.positive_date, 0, item.count, 0, 0];
        }
        count1++;
    });

    let count2 = 0;
    death.forEach(function (item) {
        if (date_arr[item.date_of_death]) {
            date_arr[item.date_of_death][3] = item.count;
        } else {
            date_arr[item.date_of_death] = [item.date_of_death, 0, 0, item.count, 0];
        }
        count2++;
    });

    let count3 = 0;
    discharges.forEach(function (item) {
        if (date_arr[item.discharge_date]) {
            date_arr[item.discharge_date][4] = item.count;
        } else {
            date_arr[item.discharge_date] = [item.discharge_date, 0, 0, 0, item.count];
        }

        count3++;
    });
    date_arr = array_values(ksort(date_arr));
    date_arr.unshift(['Date', 'Suspected & Hospitalized', 'Confimed', 'Deaths', 'Recovered & Discharged']);
    google.charts.load('current', {'packages': ['bar']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable(date_arr);

        var options = {
            backgroundColor: 'white',
            chart: {
                title: 'Covid19 Patients',
                subtitle: 'Patients count',
            },
            fontName: 'Roboto',
            fontSize: 14,
            colors: ['#ff9501', '#76c80d', '#971a37', '#004f58']
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}

function pieChart(data) {
    let admit = data.admit_date;
    let discharges = data.discharge_date;
    let status = data.status;
    let percentage_arr = [['Type', 'Count']];
    let discharge_count = 0;
    let admit_count = 0;
    let count = 0;
    discharges.forEach(function (item) {
        discharge_count = discharge_count + item.count;
        count++;
    });

    let count2 = 0;
    admit.forEach(function (item) {
        admit_count = admit_count + item.count;
        count2++;
    });

    status.forEach(function (item) {
        if (item.status == 'dead') {
            percentage_arr.push(['Deaths', item.count]);
        }
        if (item.status == 'positive') {
            percentage_arr.push(['Confimed', item.count]);
        }
    });
    percentage_arr.push(['Suspected & Hospitalized', admit_count]);
    percentage_arr.push(['Recovered & Discharged', discharge_count]);
    var color = ['#ff9501', '#76c80d', '#971a37', '#004f58'];
    chartName = 'covid19-summary';
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
// Draw the chart and set the chart values
    function drawChart() {
        var data2 = google.visualization.arrayToDataTable(percentage_arr);
        // Optional; add a title and set the width and height of the chart
        var options2 = {'title': 'Covid19 summary in Sri Lanka', backgroundColor: 'white', is3D: true,
            'colors': color,
            fontName: 'Roboto',
            fontSize: 14
        };
        // Display the chart inside the <div> element with id="piechart"
        var chart2 = new google.visualization.PieChart(document.getElementById(chartName));
        chart2.draw(data2, options2);
    }
}

function totalvsActive(data) {
    let admit = data.admit_date;
    let positive = data.positive_date;
    let data_arr = [];
    let count = 0;
    admit.forEach(function (item) {
        data_arr[item.admit_date] = [item.admit_date, item.count, 0];
        count++;
    });
    let count1 = 0;
    positive.forEach(function (item) {
        if (data_arr[item.positive_date]) {
            data_arr[item.positive_date][2] = item.count;
        } else {
            data_arr[item.positive_date] = [item.positive_date, 0, item.count];
        }
        count1++;
    });
    data_arr = array_values(ksort(data_arr));
    data_arr.unshift(['Date', 'Total Cases', 'Active Cases']);

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable(data_arr);
        var options = {
            title: 'Total vs Active Cases',
            backgroundColor: 'white',
            hAxis: {title: 'Date', titleTextStyle: {color: '#333'}},
            vAxis: {title: 'Patients count', minValue: 0},
            colors: ['#971a37', '#76c80d'],
            fontName: 'Roboto',
            fontSize: 14
        };

        var chart = new google.visualization.AreaChart(document.getElementById('covid-total-patient'));
        chart.draw(data, options);
    }
}

function array_values(input) {
    let tmpArr = []
    for (let key in input) {
        tmpArr[tmpArr.length] = input[key]
    }
    return tmpArr;
}

function ksort(obj) {
    let keys = Object.keys(obj).sort()
    let sortedObj = {};
    for (let i in keys) {
        sortedObj[keys[i]] = obj[keys[i]];
    }
    return sortedObj;
}