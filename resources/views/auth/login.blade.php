@extends('layouts.guest')

@section('content')
<!-- Session Status -->
<x-auth-session-status class="mb-4" :status="session('status')" />

<!-- Validation Errors -->
<x-auth-validation-errors class="mb-4" :errors="$errors" />
<div class="login-box">
    <div class="login-logo">
        PDPA Service
    </div>
    <div class="card">
        <div class="card-body login-card-body">
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
    <div class="col-12">
        <a href="https://it.redcross.or.th/pdpaforthairedcross/" target="_blank">เอกสารเกี่ยวกับนโยบายและแนวปฏิบัติในการคุ้มครองข้อมูลส่วนบุคคล</a>
    </div>
</div>
@endsection