$(document).ready(function () {
    function seoHeadrTagsChart() {
        var text = $('#hiddenId').val();
        $.ajax({
            type: "GET",
            url: 'seoHeaderTags',
            data: {text: text},
            success: function (data) {
                data = JSON.parse(data);
                var chartData = [];
                chartData.push(['Tags', 'Percentage'])
                data[0].h1Count
                chartData.push(['H1', data[0].h1Count], ['H2', data[0].h2Count], ['H3', data[0].h3Count], ['H4', data[0].h4Count], ['H5', data[0].h6Count], ['H6', data[0].h6Count]);
                console.log(chartData)
                headerTagChart(chartData, 'header-tags');
                $(".title-row").html('<b">' + data[0].title + '</b>');
                $(".description-row").html('<b">' + data[0].description + '</b>');
                $(".keywords-row").html('<b">' + data[0].keywords + '</b>');
            }

        });


    }

    function lastResponseTimesChart() {
        var text = $('#hiddenId').val();
        $.ajax({
            type: "GET",
            url: 'lastResponceTimes',
            data: {text: text},
            success: function (data) {
                data = JSON.parse(data);
                data = data.reverse();
                var chartData = [];
                var responseCodeChartData = [];
                var TimeData = [];
                var ResponseTimeData = ['Response Time(ms)'];
                var ResponseCodeData = ['Response Code'];


                chartData.push(['Date', 'Response Time']);
                responseCodeChartData.push(['Date', 'Response Code']);
                data.forEach(function (value) {
                    var key = value['date'];
                    var responseCode = value['responseCode'];
                    var valueData = value['responceTime'];
                    TimeData.push(key);
                    valueData = parseInt(valueData, 10)
                    responseCode = parseInt(responseCode, 10)
                    chartData.push([key, valueData]);
                    responseCodeChartData.push([key, responseCode]);
                    ResponseTimeData.push(valueData);
                    ResponseCodeData.push(responseCode);
                });
                var tableData = [ResponseTimeData, ResponseCodeData];
                responceTimeChart(chartData, 'last-10-response-time', 'Last Url Response Time 10');
                //responceTimeChart(responseCodeChartData, 'last-10-response-code', 'Last Url Response Code 10');
                pageDashboardableChart(tableData, TimeData);
            }

        });


    }

    function getAllTags() {
        var text = $('#hiddenId').val();
        $.ajax({
            type: "GET",
            url: '/get-all-tags',
            data: {text: text},
            success: function (data) {
                data = JSON.parse(data);
                var chartData = [];
                chartData.push(['Links', 'Percentage'])
                $.each(data, function (key, value) {
                    if (key != 'total') {
                        chartData.push([key, value]);
                    }

                });
                console.log(chartData);
                totalLinkChart(chartData, 'all-links');
//                var chartData = [];
//                var tag = '';
//                $.each(data, function (key, value) {
//                    switch (key) {
//                        case 'h1Count':
//                            tag = '&lth1&gt';
//                            break;
//                        case 'h2Count':
//                            tag = '&lth2&gt';
//                            break;
//                        case 'h3Count':
//                            tag = '&lth3&gt';
//                            break;
//                        case 'h4Count':
//                            tag = '&lth4&gt';
//                            break;
//                        case 'h5Count':
//                            tag = '&lth5&gt';
//                            break;
//                        case 'h6Count':
//                            tag = '&lth6&gt';
//                            break;
//                         case 'anchorTag':
//                            tag = '&lta&gt';
//                            break;
//                        case 'imgTag':
//                           tag = '&ltimg&gt';
//                            break;
//                    }
//                    chartData.push([tag, value]);
//                });


//                tagsTableChart(chartData);
                $('.page-dashboard-all-link-count').html('<b>' + data['total'] + '</b>');
//                var widgetContent = '<table><tr></tr></table>'
//                 $.each(data, function( index, value ) {
//                     
//                 });


            }
        });
    }

    seoHeadrTagsChart();
    lastResponseTimesChart();
    getAllTags();
});

