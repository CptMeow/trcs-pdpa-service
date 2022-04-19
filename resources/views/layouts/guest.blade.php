<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title ?? 'App | ' }} {{ isset($title) ? '|':'' }} TRCS-PDPA Service</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;1,100&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('assets/plugins/fontawesome-free/css/all.min.css') }}">

    <link rel="stylesheet" href="{{ asset('assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">

    <link rel="stylesheet" href="{{ asset('assets/dists/css/adminlte.min.css?v=3.2.0') }}">
    <link rel="stylesheet" href="{{asset('assets/dists/css/style.css?v=3.2.0')}}">
</head>

<body class="hold-transition login-page sidebar-collapse ">
    @section('content')
        
    @show
    <div>
        <section class="footer">
            <footer class="main-footer fixed-bottom">
                <div class="float-right d-sm-inline">
                    ฝ่ายนโยบายความมั่นคงปลอดภัยไซเบอร์และคุ้มครองข้อมูลส่วนบุคคล 
                </div>
                <strong>สงวนลิขสิทธิ์ โดย สภากาชาดไทย</strong> | <a class="text-reset fw-bold" href="https://it.redcross.or.th">สำนักงานเทคโนโลยีสารสนเทศและดิจิทัล</a>
            </footer>
        </section>
    </div>
    <script src="{{ asset('assets/plugins/jquery/jquery.min.js') }}"></script>

    <script src="{{ asset('assets/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>

    <script src="{{ asset('assets/dists/js/adminlte.min.js?v=3.2.0') }}"></script>
    @section('jspage')
        
    @show
</body>

</html>
