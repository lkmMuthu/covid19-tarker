function statusChart(chartData) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data1 = google.visualization.arrayToDataTable(chartData);

        var options1 = {
            title: 'Real Time Scripts Performance',
            backgroundColor: 'white',
//            curveType: 'function',
//            legend: {position: 'bottom'}
        };

        var chart1 = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart1.draw(data1, options1);
    }
}


function script3Process(dataSet, chartName) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    var color = ['#00FFFF', '#000000', '#7D6608', '#FF00FF'];
// Draw the chart and set the chart values
    function drawChart() {
        var data2 = google.visualization.arrayToDataTable(dataSet);

        // Optional; add a title and set the width and height of the chart
        var options2 = {'title': 'Seo check progress', backgroundColor: 'white', pieHole: 0.4,
            'colors': color};

        // Display the chart inside the <div> element with id="piechart"
        var chart2 = new google.visualization.PieChart(document.getElementById(chartName));
        chart2.draw(data2, options2);
    }
}

function responceCodeResult(dataSet, chartName, color) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    //var color = ['#E74C3C', '#D68910', '#7D6608', '#2ECC71'];
// Draw the chart and set the chart values
    function drawChart() {
        var data2 = google.visualization.arrayToDataTable(dataSet);

        // Optional; add a title and set the width and height of the chart
        var options2 = {'title': 'Total Response code', backgroundColor: 'white', is3D: true,
            'colors': color};

        // Display the chart inside the <div> element with id="piechart"
        var chart2 = new google.visualization.PieChart(document.getElementById(chartName));
        chart2.draw(data2, options2);
    }
}

function script1Process(dataSet, chartName, color) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    //var color = ['#4A235A', '#D68910', '#2874A6', '#0000FF', '#1B2631'];
// Draw the chart and set the chart values
    function drawChart() {
        var data2 = google.visualization.arrayToDataTable(dataSet);

        // Optional; add a title and set the width and height of the chart
        var options2 = {'title': 'Updated Page Check Progress', backgroundColor: 'white', pieHole: 0.4,
            'colors': color};

        // Display the chart inside the <div> element with id="piechart"
        var chart2 = new google.visualization.PieChart(document.getElementById(chartName));
        chart2.draw(data2, options2);
    }
}

function script2Process(dataSet, chartName, color) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
   // var color = ['#800080', '#D68910', '#00FF00', '#FF0000'];
// Draw the chart and set the chart values
    function drawChart() {
        var data2 = google.visualization.arrayToDataTable(dataSet);

        // Optional; add a title and set the width and height of the chart
        var options2 = {'title': 'Extract Url Progress', backgroundColor: 'white', pieHole: 0.4,
            'colors': color};

        // Display the chart inside the <div> element with id="piechart"
        var chart2 = new google.visualization.PieChart(document.getElementById(chartName));
        chart2.draw(data2, options2);
    }
}


function tableChart(chartData, resCode) {
    google.charts.load('current', {'packages': ['table']});
    google.charts.setOnLoadCallback(drawTable);

    function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Site Name');
        resCode.forEach(function (code) {
            data.addColumn('number', code);
        });
        data.addRows(chartData);

        var table = new google.visualization.Table(document.getElementById('siteTotalUrlListChart'));

        var options2 = {'title': 'Total Response code', backgroundColor: 'white', is3D: true, showRowNumber: true, height: '100%', width: '100%', color: '#E4E4E4',
            page: 'enable',
            pageSize: 10,
            pagingSymbols: {
                prev: 'prev',
                next: 'next'
            }, allowHtml: true
        };
        table.draw(data, options2);
    }
}


function dateCount(chartData) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(chartData);

        var options = {
            title: 'Process Url Count Per Day',
            backgroundColor: 'white',
            hAxis: {title: 'Date', titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
}



function averageTime(chartData) {
    google.charts.load('current', {'packages': ['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(chartData);

        var options = {
            backgroundColor: 'white',
            chart: {
                title: 'Script Performance',
                subtitle: 'Average time(s) for one url process',
            }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
}

function siteStatusChart(dataSet, chartName, color) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    //var color = ['#00FFFF', '#000000', '#7D6608', '#FF00FF'];
// Draw the chart and set the chart values
    function drawChart() {
        var data2 = google.visualization.arrayToDataTable(dataSet);

        // Optional; add a title and set the width and height of the chart
        var options2 = {'title': 'Url Last Response Codes', backgroundColor: 'white', pieHole: 0.4,
            'colors': color};

        // Display the chart inside the <div> element with id="piechart"
        var chart2 = new google.visualization.PieChart(document.getElementById(chartName));
        chart2.draw(data2, options2);
    }
}


function lastModifiedTimeChart(chartData) {
    google.charts.load('current', {'packages': ['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(chartData);

        var options = {
            backgroundColor: 'white',
            chart: {
                title: 'Latest Modified 10',
               // subtitle: 'Average time(s) for one url process',
            }
        };

        var chart = new google.charts.Bar(document.getElementById('lastModifiedTimeChart'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }

}


function pageTypeStatusChart(dataSet, chartName) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    var color = ['#00FFFF', '#F016E6', '#FF00FF', '#FF00FF'];
// Draw the chart and set the chart values
    function drawChart() {
        var data2 = google.visualization.arrayToDataTable(dataSet);

        // Optional; add a title and set the width and height of the chart
        var options2 = {'title': 'Last modified time exist or not', backgroundColor: 'white', pieHole: 0.4,
            'colors': color};

        // Display the chart inside the <div> element with id="piechart"
        var chart2 = new google.visualization.PieChart(document.getElementById(chartName));
        chart2.draw(data2, options2);
    }
}

function responceTimeChart(chartData, chartName, title) {
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(chartData);

        var options = {
          title: title,
//          backgroundColor: 'white',
 backgroundColor: 'white',
        };

        var chart = new google.visualization.LineChart(document.getElementById(chartName));

        chart.draw(data, options);
      }
}

function headerTagChart(dataSet, chartName) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    var color = ['#00FFFF', '#000000', '#7D6608', '#FF00FF'];
    function drawChart() {
        var data2 = google.visualization.arrayToDataTable(dataSet);

        // Optional; add a title and set the width and height of the chart
        var options2 = {'title': 'Header Tags', backgroundColor: 'white', pieHole: 0.4,
            'colors': color};

        // Display the chart inside the <div> element with id="piechart"
        var chart2 = new google.visualization.PieChart(document.getElementById(chartName));
        chart2.draw(data2, options2);
    }
}


function pageDashboardableChart(chartData, resCode) {
    google.charts.load('current', {'packages': ['table']});
    google.charts.setOnLoadCallback(drawTable);

    function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Time');
        resCode.forEach(function (code) {
            data.addColumn('number', code);
        });
        data.addRows(chartData);

        var table = new google.visualization.Table(document.getElementById('last-10-response-code'));

        var options2 = {'title': 'Total Response code', backgroundColor: 'white', is3D: true, showRowNumber: true, height: '100%', width: '100%', color: '#E4E4E4',
            page: 'enable',
            pageSize: 10,
            pagingSymbols: {
                prev: 'prev',
                next: 'next'
            }, allowHtml: true
        };
        table.draw(data, options2);
    }
}


function tagsTableChart(chartData) {
    google.charts.load('current', {'packages': ['table']});
    google.charts.setOnLoadCallback(drawTable);
    console.log(chartData);
    function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Tag');
        data.addColumn('number', 'Count');
        data.addRows(chartData);

        var table = new google.visualization.Table(document.getElementById('allTagsCharts'));

        var options2 = {'title': 'Total Response code', backgroundColor: 'white', is3D: true, showRowNumber: true, height: '100%', width: '100%', color: '#E4E4E4',
            page: 'enable',
            pageSize: 10,
            pagingSymbols: {
                prev: 'prev',
                next: 'next'
            }, allowHtml: true
        };
        table.draw(data, options2);
    }
}

function totalLinkChart(dataSet, chartName) {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    var color = ['#00FFFF', '#000000', '#7D6608', '#FF00FF'];
    function drawChart() {
        var data2 = google.visualization.arrayToDataTable(dataSet);

        // Optional; add a title and set the width and height of the chart
        var options2 = {'title': 'All Links Tag Count', backgroundColor: 'white', pieHole: 0.4,
            'colors': color};

        // Display the chart inside the <div> element with id="piechart"
        var chart2 = new google.visualization.PieChart(document.getElementById(chartName));
        chart2.draw(data2, options2);
    }
}

