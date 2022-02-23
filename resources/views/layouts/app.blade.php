<!DOCTYPE html>
<html>
<head>
	<base href="{{ Request::url(); }}">
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="author" content="Worapon Pleepattanakorn <worapon.p@redcross.or.th>">
	<title>{{ $title ?? 'App | ' }} TRCS-PDPA Service</title>
    <link rel="stylesheet" href="{{asset('assets/plugins/fontawesome-free/css/all.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/dists/css/adminlte.min.css?v=3.2.0')}}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;1,100&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('assets/dists/css/style.css?v=3.2.0')}}">
    @section('csspage')
        
    @show
</head>
<body class="hold-transition sidebar-collapse layout-top-nav">
    <div class="wrapper">
    
        <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
            <div class="container-fluid">
            <a href="{{ route('home') }}" class="navbar-brand">
            <img src="{{ asset('assets/dists/img/logotrcs-new.png') }}" alt="Logo" class="brand-image" style="opacity: .8">
            <span class="brand-text font-weight-light">PDPA Service</span>
            </a>
            <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse order-3" id="navbarCollapse">
                <ul class="navbar-nav">
                    {{-- <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                    </li> --}}
                    <li class="nav-item"><a href="{{ route('home') }}" class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}" aria-current="page">หน้าหลัก</a></li>
                    @can('appeal-list')
                    <li class="nav-item"><a href="{{ route('appeals.index') }}" class="nav-link {{ request()->routeIs('appeals.index') ? 'active' : '' }}">ใบคำร้อง</a></li>
                    @endcan
                    <li class="nav-item"><a href="{{ route('report.sitecheck') }}" class="nav-link ">รายงานตรวจสอบ PDPA</a></li>
                    
                    @hasrole('Admin')
                    <li class="nav-item dropdown">
                        <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">จัดการระบบ</a>
                        <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow">
                            <li><a class="dropdown-item" href="{{ route('roles.index') }}">จัดการกลุ่มผู้ใช้งาน</a></li>
                            <li><a class="dropdown-item" href="{{ route('users.index') }}">จัดการผู้ใช้งาน</a></li>
                            <li class="dropdown-divider"></li>
                        </ul>
                    </li>
                    @endhasrole
                </ul>
            </div>
            
            <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
{{--             
                <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="fas fa-comments"></i>
                <span class="badge badge-danger navbar-badge">3</span>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" class="dropdown-item">
                
                <div class="media">
                <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                <div class="media-body">
                <h3 class="dropdown-item-title">
                Brad Diesel
                <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">Call me whenever you can...</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
                </div>
                
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                
                <div class="media">
                <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                <div class="media-body">
                <h3 class="dropdown-item-title">
                John Pierce
                <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
                </div>
                
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                
                <div class="media">
                <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3">
                <div class="media-body">
                <h3 class="dropdown-item-title">
                Nora Silvester
                <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
                </div>
                
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                </div>
                </li>
                
                <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="far fa-bell"></i>
                <span class="badge badge-warning navbar-badge">15</span>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span class="dropdown-header">15 Notifications</span>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                <i class="fas fa-envelope mr-2"></i> 4 new messages
                <span class="float-right text-muted text-sm">3 mins</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                <i class="fas fa-users mr-2"></i> 8 friend requests
                <span class="float-right text-muted text-sm">12 hours</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                <i class="fas fa-file mr-2"></i> 3 new reports
                <span class="float-right text-muted text-sm">2 days</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                <i class="fas fa-th-large"></i>
                </a>
                </li> --}}
                <li class="nav-item dropdown">
                    <a id="dropdownSubMenu2" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">
                        <span class="image bg-red p-2 rounded">WP</span> 
                        {{ Auth::user()->name }}</a>
                    <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow">
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <li>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                                    this.closest('form').submit();">
                                    {{ __('ออกจากระบบ') }}
                                </a>
                            </li>
                        </form>
                    </ul>
                </li>
                </ul>
            </div>
        </nav>
        <section class="content-header d-none">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Dashboard v3</h1>
                        </div>
                        <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard v3</li>
                        </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="container-fluid">
            @section('content')
        
            @show
            </div>
        </section>
        
        <section class="footer">
            <footer class="main-footer">
    
                <div class="float-right d-sm-inline">
                    ฝ่ายนโยบายความมั่นคงความปลอดภัยไซเบอร์และคุ้มครองข้อมูลส่วนบุคคล 
                </div>
                <strong>สงวนลิขสิทธิ์ โดย สภากาชาดไทย</strong> | <a class="text-reset fw-bold" href="https://it.redcross.or.th">สำนักงานเทคโนโลยีสารสนเทศและดิจิทัล</a>
            </footer>
        </section>
    </div>

<script src="{{asset('assets/plugins/jquery/jquery.min.js')}}"></script>
<script src="{{asset('assets/plugins/jquery-ui/jquery-ui.min.js')}}"></script>
<script src="{{asset('assets/plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{asset('assets/plugins/moment/moment-with-locales.min.js')}}"></script>
<script src="{{asset('assets/dists/js/adminlte.min.js?v=3.2.0')}}"></script>

@section('jspage')
<!--JS Page here-->
@show
</body>
</html>