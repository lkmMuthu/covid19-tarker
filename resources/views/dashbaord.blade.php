<!DOCTYPE html>
<html>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="/css/bootstrap/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="/css/dataTables/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/dashboard.css">

    <script src="/js/jquery/jquery-3.3.1.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link rel="icon" type="/image/ico" href="images/coronavirus.svg" />
    <script type="text/javascript" src="/js/chart.js"></script>
    <script type="text/javascript" src="/js/dashboard.js"></script>

    <title>Covid19 Traking APP</title>
    <body>
        <div class="main-content">
            <div class="title"><span class="covid-icon"></span> COVID-19 Analysis Sri Lanka</div>
            <!--            <div class="sub-content">
                            <div class="card daily-card">
                                <div class="card-header daily-title .main-card-title">
                                    Today 
                                </div>
                                <div class="card-body daily-cont">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Confimed Patients</h5>
                                                    <p class="card-text">12</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Death</h5>
                                                    <p class="card-text">10</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Discharge</h5>
                                                    <p class="card-text">12</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>-->
            <div class="sub-content">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-3 card-cont" style="max-width: 540px;">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="/images/patient.svg" class="card-icon">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Confimed Patients</h5>
                                        <p class="card-text">{{ $data['total_positive'] }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mb-3 card-cont" style="max-width: 540px;">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="/images/death.svg" class="card-icon" >
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Death</h5>
                                        <p class="card-text">{{ $data['total_death'] }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mb-3 card-cont" style="max-width: 540px;">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="/images/check.svg" class="card-icon">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Recovered & Discharged</h5>
                                        <p class="card-text">{{ $data['total_discharge'] }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!--chars-->
        <div class="wrapper">
            <div class="container">
                <div id="content">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="main-content-sub">
                                <div class="row">
                                    <div class="col-sm-12 mb-12 mt-12">
                                        <div class="widget">
                                            <div id="columnchart_material" class="widget-width">
                                                <div class="lds-facebook widget-loader"><div></div><div></div><div></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6 mb-2 mt-4">
                                        <div class="widget">
                                            <div id="covid19-summary" class="widget-width"f>
                                                <div class="lds-facebook widget-loader"><div></div><div></div><div></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 mb-2 mt-4">
                                        <div class="widget">
                                            <div id="covid-total-patient" class="widget-width">
                                                <div class="lds-facebook widget-loader"><div></div><div></div><div></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
                                <!--                                        <div class="row">
                                                                            <div class="col-sm-6 mb-2 mt-4">
                                                                                <div class="widget">
                                                                                    <div id="regions_div" class="widget-width"f>
                                                                                        <div class="lds-facebook widget-loader"><div></div><div></div><div></div></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-sm-6 mb-2 mt-4">
                                                                                <div class="widget">
                                                                                    <div id="columnchart_materiall" class="widget-width">
                                                                                        <div class="lds-facebook widget-loader"><div></div><div></div><div></div></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
</body>
</html>