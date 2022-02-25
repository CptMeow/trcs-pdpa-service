@extends('layouts.app')

@section('content')
    <div class="row pt-3">
        @foreach (Helper::AppealStatus() as $key => $status)
        <div class="col-md">
            <x-card-box :type=$key>{{ isset($status_count[$key])?$status_count[$key]:0 }}</x-card-box>
        </div>
        @endforeach
    </div>
    <div class="row">
        <section class="col-lg-12 connectedSortable">
            <x-card title="จำนวนใบคำร้องแยกรายวัน" class="card-danger">
                <div class="chart">
                    <canvas id="lineChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                </div>
            </x-card>
        </section>
        <section class="col-lg-6 connectedSortable">
            <x-card title="ประเภทใบคำร้อง" class="card-danger">
                <canvas id="pieChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
            </x-card>
        </section>
        
        <section class="col-lg-6 connectedSortable">
            <x-card title="ช่องทางแจ้งใบคำร้อง" class="card-danger">
                <canvas id="pieChart2" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
            </x-card>
        </section>
    </div>
@endsection

@section('jspage')
<script src="{{ asset('assets/plugins/chart.js/Chart.min.js') }}"></script>
<script type="text/javascript">
    $(function () {
        $('.connectedSortable').sortable({placeholder:'sort-highlight',connectWith:'.connectedSortable',handle:'.card-header, .nav-tabs',forcePlaceholderSize:true,zIndex:999999});
        $('.connectedSortable .card-header').css('cursor','move');

        var channelData        = {
            labels: [],
            datasets: [
                {
                    data: [12,4,3,4,5,5,1],
                    backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
                }
            ]
        };
        var typeData        = {
            labels: [],
            datasets: [
                {
                    data: [12,4,3,4,5,5,1],
                    backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
                }
            ]
        };

        /*
        //-------------
        //- PIE CHART -
        //-------------
        // Get context with jQuery - using jQuery's .get() method.
        */
        var pieChartCanvas = $('#pieChart').get(0).getContext('2d');
        var pieChartCanvas2 = $('#pieChart2').get(0).getContext('2d');
        var pieOptions     = {
            maintainAspectRatio : false,
            responsive : true,
        };
        /*
        // Create pie or douhnut chart
        // You can switch between pie and douhnut using the method below.*/

        $.ajax({
            url: '{{ url('api/chart/appeal/type') }}',
            dataType: 'json',
            }).done(function(results) {
            /*get values that only needed*/
                typeData.labels = results.map(x=>x.label);
                typeData.datasets[0].data = results.map(x=>x.total);
                new Chart(pieChartCanvas, {
                    type: 'pie',
                    data: typeData,
                    options: pieOptions
                })
            });

            $.ajax({
            url: '{{ url('api/chart/appeal/channel') }}',
            dataType: 'json',
            }).done(function(results) {
            /*get values that only needed*/
                channelData.labels = results.map(x=>x.label);
                channelData.datasets[0].data = results.map(x=>x.total);
                new Chart(pieChartCanvas2, {
                    type: 'pie',
                    data: channelData,
                    options: pieOptions
                })
            });
        /*
        //-------------
        //- LINE CHART -
        //--------------
        */
        var areaChartData = {
            labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                label               : 'Digital Goods',
                backgroundColor     : 'rgba(60,141,188,0.9)',
                borderColor         : 'rgba(60,141,188,0.8)',
                pointRadius          : false,
                pointColor          : '#3b8bba',
                pointStrokeColor    : 'rgba(60,141,188,1)',
                pointHighlightFill  : '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data                : [28, 48, 40, 19, 86, 27, 90]
                },
                {
                label               : 'Electronics',
                backgroundColor     : 'rgba(210, 214, 222, 1)',
                borderColor         : 'rgba(210, 214, 222, 1)',
                pointRadius         : false,
                pointColor          : 'rgba(210, 214, 222, 1)',
                pointStrokeColor    : '#c1c7d1',
                pointHighlightFill  : '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data                : [65, 59, 80, 81, 56, 55, 40]
                },
            ]
        };
        var areaChartOptions = {
            maintainAspectRatio : false,
            responsive : true,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                gridLines : {
                    display : false,
                }
                }],
                yAxes: [{
                gridLines : {
                    display : false,
                }
                }]
            }
        };
        var lineChartCanvas = $('#lineChart').get(0).getContext('2d');
        var lineChartOptions = $.extend(true, {}, areaChartOptions);
        var lineChartData = $.extend(true, {}, areaChartData);
        
        lineChartData.datasets[0].fill = false;
        lineChartData.datasets[1].fill = false;
        lineChartOptions.datasetFill = false;

        var lineChart = new Chart(lineChartCanvas, {
            type: 'line',
            data: lineChartData,
            options: lineChartOptions
        });

    });
</script>
@endsection