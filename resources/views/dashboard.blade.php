@extends('layouts.app')

@section('content')
    <div class="row pt-3">
        @foreach (Helper::AppealStatus() as $key => $status)
        <div class="col-md">
            <x-card-appealstatus-box :type=$key>{{ isset($status_count[$key])?$status_count[$key]:0 }}</x-card-box>
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
<script src="{{ asset('assets/plugins/chart.js/chart.min.js') }}"></script>
<script type="text/javascript">
    $(function () {
        $('.connectedSortable').sortable({placeholder:'sort-highlight',connectWith:'.connectedSortable',handle:'.card-header, .nav-tabs',forcePlaceholderSize:true,zIndex:999999});
        $('.connectedSortable .card-header').css('cursor','move');

        $.ajax({
        url: '{{ url('api/chart/appeal/requestdate') }}',
        dataType: 'json',
        }).done(function(results) {
            var lineChartCanvas = $('#lineChart').get(0).getContext('2d');
            var requestDateData = {
                labels: [],
                datasets: [{
                    label: 'จำนวนใบคำร้อง',
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
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            };
            requestDateData.labels = results.map(x=>x.label);
            requestDateData.datasets[0].data = results.map(x=>x.total);
            new Chart(lineChartCanvas, {
                type: 'line',
                data: requestDateData
            });
        });

        $.ajax({
        url: '{{ url('api/chart/appeal/type') }}',
        dataType: 'json',
        }).done(function(results) {
            var pieChartCanvas = $('#pieChart').get(0).getContext('2d');
            var typeData = {
                labels: [],
                datasets: [{
                    label: '',
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
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            };
            typeData.labels = results.map(x=>x.label);
            typeData.datasets[0].data = results.map(x=>x.total);
            new Chart(pieChartCanvas, {
                type: 'pie',
                data: typeData
            });
        });
        
        $.ajax({
        url: '{{ url('api/chart/appeal/channel') }}',
        dataType: 'json',
        }).done(function(results) {
            var pieChartCanvas2 = $('#pieChart2').get(0).getContext('2d');
            var channelData = {
                labels: [],
                datasets: [{
                    label: '',
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
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            };
            channelData.labels = results.map(x=>x.label);
            channelData.datasets[0].data = results.map(x=>x.total);
            new Chart(pieChartCanvas2, {
                type: 'pie',
                data: channelData
            });
        });    
    });
</script>
@endsection