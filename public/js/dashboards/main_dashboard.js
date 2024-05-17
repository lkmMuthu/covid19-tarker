$(document).ready(function () {
    function lastResponceCodeAjax() {
        $.ajax({
            type: "GET",
            url: 'dashboardStatusCode',
            success: function (data) {
                data = JSON.parse(data);
                var chartData = [];
                chartData.push(['Status Code', 'Count']);
                var color = [];
                var otherColor = ['#2874A6', '#873600', '#4D5656', '#F7F8F9', '#0A0213', '#4AF1DD'];
                var i = 0;
                data.forEach(function (value) {
                    key = value['_id'];
                    valueData = value['count'];
                    chartData.push([key, valueData]);
                    if (key == "200") {
                        color.push('#2ECC71');
                    } else if (key == "404") {
                        color.push('#E74C3C');
                    } else if (key == "403") {
                        color.push('#F5B7B1');
                    } else if (key == "301") {
                        color.push('#F1C40F');
                    } else if (key == "New") {
                        color.push('#5DADE2');
                    } else {
                        color.push(otherColor[i]);
                        i = i + 1;
                    }
                });

                responceCodeResult(chartData, 'piechart', color);
            }

        });
    }

    function siteTotalUrlListAjax() {
        $.ajax({
            type: "GET",
            url: 'siteStatusCountChart',
            success: function (data) {
                data = JSON.parse(data);
                var chartData = [];
                var resCode = data['resCodes'];
                var proceesData = data['data'];
                $.each(proceesData, function (key, value) {
                    var codesData = [key];
                    resCode.forEach(function (code) {
                        codesData.push(value[code]);
                    });
                    chartData.push(codesData);
                });

                tableChart(chartData, resCode)
            }

        });
    }


    function runningUrl() {
        $.ajax({
            type: "GET",
            url: 'runungData',
            success: function (data) {
                data = JSON.parse(data);
                data = data.reverse();
                var chartDataScript = [];
                var chartDataAvgTime = [];
                chartDataScript.push(['Date', 'script1', 'script2', 'script3', 'script4'])
                chartDataAvgTime.push(['Date', 'script1', 'script2', 'script3', 'script4'])
                data.forEach(function (value) {
                    if ('script1' in value) {
                        var value1 = value['script1'];
                    } else {
                        var value1 = 0;
                    }
                    if ('script2' in value) {
                        var value2 = value['script2'];
                    } else {
                        var value2 = 0;
                    }
                    if ('script3' in value) {
                        var value3 = value['script3'];
                    } else {
                        var value3 = 0;
                    }
                    if ('script4' in value) {
                        var value4 = value['script4'];
                    } else {
                        var value4 = 0;
                    }

                    if ('script1ProcessTime' in value) {
                        var script1ProcessTime = value['script1ProcessTime'];
                    } else {
                        var script1ProcessTime = 0;
                    }
                    if ('script2ProcessTime' in value) {
                        var script2ProcessTime = value['script2ProcessTime'];
                    } else {
                        var script2ProcessTime = 0;
                    }
                    if ('script3ProcessTime' in value) {
                        var script3ProcessTime = value['script3ProcessTime'];
                    } else {
                        var script3ProcessTime = 0;
                    }
                    if ('script4ProcessTime' in value) {
                        var script4ProcessTime = value['script4ProcessTime'];
                    } else {
                        var script4ProcessTime = 0;
                    }

                    if (value1 != 0) {
                        var chart1Value = script1ProcessTime / value1;
                    } else {
                        var chart1Value = 0;
                    }
                    if (value2 != 0) {
                        var chart2Value = script2ProcessTime / value2;
                    } else {
                        var chart2Value = 0;
                    }
                    if (value3 != 0) {
                        var chart3Value = script3ProcessTime / value3;
                    } else {
                        var chart3Value = 0;
                    }
                    if (value4 != 0) {
                        var chart4Value = script4ProcessTime / value4;
                    } else {
                        var chart4Value = 0;
                    }

                    chartDataScript.push([value['date'], value1, value2, value3, value4])
                    chartDataAvgTime.push([value['date'], chart1Value, chart2Value, chart3Value, chart4Value])
                });
                dateCount(chartDataScript)
                averageTime(chartDataAvgTime)
            }

        });
    }


    function todayProcessing(chartData) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: 'todayProcess',
                success: function (data) {
                    data = JSON.parse(data);

                    resolve(data);
                }

            });
        });
    }

    function urlStatusAjax() {
        $.ajax({
            type: "GET",
            url: 'ReadyForContentStatusChart',
            success: function (data) {
                data = JSON.parse(data);
                var chartData = [];
                chartData.push(['Status', 'Count'])
                var color = [];
                var otherColor = ['#2874A6', '#873600', '#4D5656'];
                var i = 0;
                data.forEach(function (value) {
                    key = value['_id'];
                    valueData = value['count'];
                    chartData.push([key, valueData]);
                    if (key == "ContentExtracted") {
                        color.push('#2ECC71');
                    } else if (key == "Error") {
                        color.push('#E74C3C');
                    } else if (key == "ReadyForContent") {
                        color.push('#566573');
                    } else if (key == "Redirected") {
                        color.push('#F1C40F');
                    } else if (key == "New") {
                        color.push('#5DADE2');
                    } else {
                        color.push(otherColor[i]);
                        i = i + 1;
                    }
                });

                script1Process(chartData, 'satusCharts', color);
            }

        });
    }

    function readyForSeoAjax() {
        $.ajax({
            type: "GET",
            url: 'contentExtractStatusChart',
            success: function (data) {
                data = JSON.parse(data);
                var chartData = [];
                chartData.push(['Status', 'Count']);
                var color = [];
                var otherColor = ['#2874A6', '#873600', '#4D5656'];
                var i = 0;
                data.forEach(function (value) {
                    key = value['_id'];
                    valueData = value['count'];
                    chartData.push([key, valueData]);

                    if (key == "Expired") {
                        color.push('#800080');
                    } else if (key == "ReadyForExtractUrl") {
                        color.push('#F1C40F');
                    } else if (key == "UrlExtracted") {
                        color.push('#138D75');
                    } else {
                        color.push(otherColor[i]);
                        i = i + 1;
                    }
                });

                script2Process(chartData, 'readyForExtractCharts', color);
            }

        });
    }

    function readyForExtractAjax() {
        $.ajax({
            type: "GET",
            url: 'readyForSeoStatusChart',
            success: function (data) {
                data = JSON.parse(data);
                var chartData = [];
                chartData.push(['Status', 'Count'])
                data.forEach(function (value) {
                    key = value['_id'];
                    valueData = value['count'];
                    chartData.push([key, valueData]);
                });

                script3Process(chartData, 'readyForSeoCharts');
            }

        });
    }

    function todayTimeline() {
        var chartData = [];
        chartData.push(['Date', 'script1', 'script2', 'script3', 'script4'])
        setInterval(function () {
            todayProcessing(chartData).then(function (data) {
                var a = chartData;
                var script1Avg = 0;
                var script2Avg = 0;
                var script3Avg = 0;
                var script4Avg = 0;
//                if (data[0]['script1ProcessTimeCurrentAvg'] != 'undefined'){
                if (0 in data && 'script1ProcessTimeCurrentAvg' in data[0]) {
                    script1Avg = data[0]['script1ProcessTimeCurrentAvg'];
                }
                if (0 in data && 'script2ProcessTimeCurrentAvg' in data[0]) {
                    script2Avg = data[0]['script2ProcessTimeCurrentAvg'];
                }
                if (0 in data && 'script3ProcessTimeCurrentAvg' in data[0]) {
                    script3Avg = data[0]['script3ProcessTimeCurrentAvg'];
                }
                if (0 in data && 'script4ProcessTimeCurrentAvg' in data[0]) {
                    script4Avg = data[0]['script4ProcessTimeCurrentAvg'];
                }

                // chartData.push(['', data[0]['script1ProcessTime'] / data[0]['script1'], data[0]['script2ProcessTime'] / data[0]['script2'], data[0]['script3ProcessTime'] / data[0]['script3'], data[0]['script4ProcessTime'] / data[0]['script4']])
                chartData.push(['', script1Avg, script2Avg, script3Avg, script4Avg])
                if (chartData.length > 20) {
                    chartData.splice(1, 1);
                }
                statusChart(chartData);
            });
        }, 20000)
    }

    urlStatusAjax()
    siteTotalUrlListAjax()
    runningUrl()
    lastResponceCodeAjax()
    readyForSeoAjax()
    readyForExtractAjax()
    todayTimeline()

    $(window).resize(function () {
        urlStatusAjax()
        siteTotalUrlListAjax()
        runningUrl()
        lastResponceCodeAjax()
        readyForSeoAjax()
        readyForExtractAjax()
    });

});

