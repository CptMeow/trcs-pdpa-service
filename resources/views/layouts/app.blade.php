<!DOCTYPE html>
<html>

<head>
  <base href="{{ Request::url() }}">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="author" content="Worapon Pleepattanakorn <worapon.p@redcross.or.th>">
  <title>{{ $title ?? 'App | ' }} {{ isset($title) ? ' | ' : '' }} TRCS-PDPA Service</title>
  <link rel="stylesheet" href="{{ asset('assets/plugins/fontawesome-free/css/all.min.css') }}">
  <link rel="stylesheet" href="{{ asset('assets/dists/css/adminlte.min.css?v=3.2.0') }}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;1,100&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{{ asset('assets/dists/css/style.css?v=3.2.0') }}">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css">
  @section('csspage')

  @show
  <script id="becookies.tech-scripts" src="https://core.becookies.tech/script.js" data-id="31e2e680-b4a5-11ec-b933-19e2e851382f" charset="utf-8"></script>
</head>

<body class="hold-transition sidebar-mini layout-navbar-fixed">
  <div class="wrapper">
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
      </ul>
      <div class="container-fluid">
        <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
          <li class="nav-item dropdown">
            <a id="dropdownSubMenu2" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">
              <span class="image bg-red p-2 rounded">{{ Helper::NameLogo(Auth::user()) }}</span>
              {{ Auth::user()->firstname . ' ' . Auth::user()->lastname }}</a>
            <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow">
              <li>
                <a class="dropdown-item" href="{{ route('users.edit', Auth::id()) }}">
                  <i class="fas fa-cog"></i>
                  {{ __('แก้ไขข้อมูลส่วนตัว') }}
                </a>
              </li>
              <form method="POST" action="{{ route('logout') }}">
                @csrf
                <li>
                  <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                    this.closest('form').submit();">
                    <i class="fas fa-sign-out-alt"></i>
                    {{ __('ออกจากระบบ') }}
                  </a>
                </li>
              </form>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

    <aside class="main-sidebar sidebar-dark-primary">
      <a href="{{ route('home') }}" class="brand-link">
        <img src="{{ asset('assets/dists/img/logotrcs-new.png') }}" alt="Logo" class="brand-image">
        <span class="brand-text font-weight-light text-light">PDPA Service</span>
      </a>

      <div class="sidebar">
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            {{-- <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li> --}}
            <li class="nav-item">
              <a href="{{ route('home') }}" class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}" aria-current="page">
                <i class="nav-icon fas fa-home"></i>
                <p>
                  หน้าหลัก
                </p>
              </a>
            </li>
            @canany(['appeal-list', 'appeal-manage', 'appeal-list-all'])
              <li class="nav-item">
                <a href="{{ route('appeals.index') }}" class="nav-link {{ request()->routeIs('appeals.index') ? 'active' : '' }}">
                  <i class="nav-icon fas fa-list"></i>
                  <p>
                    ใบคำร้อง
                  </p>
                </a>
              </li>
            @endcanany
            @hasanyrole('Staff|Admin')
              <li class="nav-item">
                <a href="{{ route('report.sitecheck') }}" class="nav-link ">
                  <i class="nav-icon fas fa-check"></i>
                  <p>
                    รายงานตรวจสอบ PDPA
                  </p>
                </a>
              </li>
            @endhasanyrole

            @hasrole('Admin')
              <li class="nav-item">
                <a href="{{ route('report.sitecheck') }}" class="nav-link ">
                  <i class="nav-icon fas fa-tools"></i>
                  <p>
                    จัดการระบบ
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li>
                    <a class="nav-link" href="{{ route('roles.index') }}">
                      <p>
                        <i class="fas fa-users-cog nav-icon"></i>
                        จัดการกลุ่มผู้ใช้งาน
                      </p>
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="{{ route('users.index') }}">
                      <p>
                        <i class="fas fa-user-cog nav-icon"></i>
                        จัดการผู้ใช้งาน
                      </p>
                    </a>
                  </li>
                </ul>
              </li>
            @endhasrole
          </ul>
        </nav>
      </div>
    </aside>

    <div class="content-wrapper">
      <section class="content-header ">
        <div class="container-fluid">
          <div class="row mb-2">
            @section('content-header')
              <div class="col-sm-6">
                <h1>

                </h1>
              </div>
              <div class="col-sm-6 d-none">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Layout</a></li>
                  <li class="breadcrumb-item active">Fixed Navbar Layout</li>
                </ol>
              </div>
            @show
          </div>
        </div>
      </section>

      <section class="content">
        <div class="container-fluid">
          @section('content')

          @show
        </div>
      </section>
    </div>

    <section class="footer">
      <footer class="main-footer">
        <div class="float-right d-sm-inline">
          ฝ่ายนโยบายความมั่นคงปลอดภัยไซเบอร์และคุ้มครองข้อมูลส่วนบุคคล
        </div>
        <strong>สงวนลิขสิทธิ์ โดย สภากาชาดไทย</strong> | <a class="text-reset fw-bold" href="https://it.redcross.or.th">สำนักงานเทคโนโลยีสารสนเทศและดิจิทัล</a>
      </footer>
    </section>
  </div>

  <script src="{{ asset('assets/plugins/jquery/jquery.min.js') }}"></script>
  <script src="{{ asset('assets/plugins/jquery-ui/jquery-ui.min.js') }}"></script>
  <script src="{{ asset('assets/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset('assets/plugins/moment/moment-with-locales.min.js') }}"></script>
  <script src="{{ asset('assets/dists/js/adminlte.min.js?v=3.2.0') }}"></script>
  @section('jspage')
    <!--JS Page here-->
  @show
</body>

</html>
