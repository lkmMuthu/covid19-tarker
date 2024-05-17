$(document).ready(function () {
    function websiteMainChart() {
        var text = $('#hiddenDomain').val();
        $.ajax({
            type: "GET",
            url: 'requestStatusCount',
            data: {text: text},
            success: function (data) {
                $("#site-status-200").html('<b class="status-value">' + 0 + '</b>');
                $("#site-status-301").html('<b class="status-value">' + 0 + '</b>');
                $("#site-status-404").html('<b class="status-value">' + 0 + '</b>');
                $("#site-status-504").html('<b class="status-value">' + 0 + '</b>');
                $("#site-status-new").html('<b class="status-value">' + 0 + '</b>');
                $("#site-status-other").html('<b class="status-value">' + 0 + '</b>');
                data = JSON.parse(data);
                var chartData = [];
                chartData.push(['status code', 'Percentage'])
                var otherValue = 0;
                var color = [];
                data.forEach(function (value) {
                    key = value['_id'];
                    valueData = value['count'];
                    chartData.push([key, valueData]);
                    if (key == 200) {
                        color.push('#2ECC71');
                        $("#site-status-200").html('<b class="status-value">' + valueData + '</b>');
                    } else if (key == 301) {
                        color.push('#F1C40F');
                        $("#site-status-301").html('<b class="status-value">' + valueData + '</b>');
                    } else if (key == 404) {
                        color.push('#E74C3C');
                        $("#site-status-404").html('<b class="status-value">' + valueData + '</b>');
                    } else if (key == 504) {
                        $("#site-status-504").html('<b class="status-value">' + valueData + '</b>');
                    } else if (key == 'New') {
                        color.push('#2874A6');
                        $("#site-status-new").html('<b class="status-value">' + valueData + '</b>');
                    } else {
                        color.push('#5DADE2');
                        otherValue = otherValue + valueData;
                    }
                });
                $("#site-status-other").html('<b class="status-value">' + otherValue + '</b>');
                siteStatusChart(chartData, 'site-status-code', color);
            }

        });


    }

    function lastModifiedChart() {
        var text = $('#hiddenDomain').val();
        $.ajax({
            type: "GET",
            url: 'lastModifiedList',
            data: {text: text},
            success: function (data) {
                data = JSON.parse(data);
                data = data.reverse();
                var chartData = [];
                chartData.push(['Date', 'page'])
                data.forEach(function (value) {
                    chartData.push([value['_id'], value['count']]);
                });

                lastModifiedTimeChart(chartData);


            }
        });
    }

    function pageTypeChart() {
        var text = $('#hiddenDomain').val();
        $.ajax({
            type: "GET",
            url: 'pageType',
            data: {text: text},
            success: function (data) {
                data = JSON.parse(data);
                var chartData = [];
                chartData.push(['status code', 'Percentage']);
                data.forEach(function (value) {
                    var key = value['_id'];
                    if (key == 'Dynamic') {
                        key = 'Not Exists';
                    } else {
                        key = 'Exists';
                    }
                    var valueData = value['count'];
                    chartData.push([key, valueData]);
                });
                pageTypeStatusChart(chartData, 'page-type-chart')
            }
        });
    }

    function responceTime() {
        var text = $('#hiddenDomain').val();
        $.ajax({
            type: "GET",
            url: 'pageResponceTime',
            data: {text: text},
            success: function (data) {
                data = JSON.parse(data);
                data = data.reverse();
                var chartData = [];
                chartData.push(['Url', 'Responce Time']);
                data.forEach(function (value) {
                    var key = value['link'];
                    var valueData = value['responceTime'];
                    valueData = parseInt(valueData, 10)
                    chartData.push([key, valueData]);
                });
                //lastModifiedTimeChart(chartData);
                responceTimeChart(chartData, 'responce-time-chart', 'Highest Url Response Time 10');

            }
        });
    }

    function backlinkData() {
        var domainId = $('#hiddenDomain').val();
        $.ajax({
            type: "GET",
            url: '/get-backlinks',
            data: {domainId: domainId},
            success: function (data) {
                data = JSON.parse(data);
                $(".backlinkone").html("<h4>" + data['total'] + "</h4>");
                $(".backlinktwo").html("<h4>" + data['domains_num'] + "</h4>");
                $(".backlinkthree").html("<h4>" + data['ips_num'] + "</h4>");
                $(".backlinkfour").html("<h4>" + data['urls_num'] + "</h4>");
                $(".backlinkfive").html("<h4>" + data['nofollows_num'] + "</h4>");
                $(".backlinksix").html("<h4>" + data['follows_num'] + "</h4>");

            }
        });
    }

    function allUrlResponseCode() {
        var domainId = $('#hiddenDomain').val();
        $.ajax({
            type: "GET",
            url: '/get-all-url-response-code',
            data: {domainId: domainId},
            success: function (data) {
                data = JSON.parse(data);
                jQuery.each(data, function (key, value) {
                    jQuery.each(value, function (resCode, count) {
                        console.log("."+key+"-"+resCode);
                     $("."+key+"-"+resCode).html(count);
                     });
                });
            }
        });
    }


    websiteMainChart();
    lastModifiedChart();
    pageTypeChart();
    responceTime();
    allUrlResponseCode()
});

