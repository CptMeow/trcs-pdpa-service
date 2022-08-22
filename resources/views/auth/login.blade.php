@extends('layouts.guest')

@section('content')
<!-- Session Status -->
<x-auth-session-status class="mb-4" :status="session('status')" />

<!-- Validation Errors -->
<x-auth-validation-errors class="mb-4 alert alert-danger" :errors="$errors" />
<div class="login-box">
    
    <div class="card " style="opacity: 0.95">
        <div class="login-logo pb-0 mb-0">
            PDPA Service
        </div>
        <div class="card-body login-card-body rounded">
            <p class="login-box-msg"></p>
            <form method="POST" action="{{ route('login') }}" id="login-form" class="form">
                @csrf
                <div class="input-group mb-3">
                    <input type="email" name="email" id="email" class="form-control" placeholder="Email" value="{{old('email')}}" required>
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                        </div>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <input type="password" name="password" id="password" class="form-control" placeholder="Password" required autocomplete="current-password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-12 ">
                        <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                    </div>

                </div>
            </form>

        </div>

    </div>
    <div class="col-12 mt-2 text-center">
        <a class="btn bg-info btn-app" href="https://it.redcross.or.th/pdpaforthairedcross/" target="_blank" >
            <i class="fas fa-book"></i> เอกสาร PDPA
        </a>
        
        <a class="btn bg-info btn-app" href="https://pdpa.redcross.or.th/tools/checklist/" >
            <i class="fas fa-tasks"></i> PDPA Checklist
        </a>
        {{-- <a href="https://it.redcross.or.th/pdpaforthairedcross/" target="_blank" class="btn btn-success btn-block btn-sm">เอกสารเกี่ยวกับนโยบายและแนวปฏิบัติในการคุ้มครองข้อมูลส่วนบุคคล</a>
        <a href="https://pdpa.redcross.or.th/tools/checklist/" class="btn btn-success btn-block btn-sm">Checklist แนวปฏิบัติด้านการคุ้มครองข้อมูลส่วนบุคคล</a> --}}
    </div>
</div>
@endsection