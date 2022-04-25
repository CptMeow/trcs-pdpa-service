@extends('layouts.app')


@section('content')
<div class="container">
    <div class="row my-4 align-items-center">
    @if (count($errors) > 0)
    <div class="alert alert-danger mt-3">
        <strong>Whoops!</strong> There were some problems with your input.<br><br>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif
        <div class="col">
            <div class="card shadow bg-body rounded">
                <div class="card-header text-white bg-light">
                    <div class="row">
                        <div class="col-6 align-middle"><strong class="align-middle"><i class="fa-solid fa-file-lines"></i> {{ __('แก้ไขข้อมูลส่วนตัว') }} </strong></div>
                        <div class="col-6 text-right">
                            <a href="{{ route('users.index') }}" class="btn btn-danger btn-xs">
                                <i class="fas fa-chevron-circle-left"></i></a>
                        </div>
                    </div>
                </div>
                {!! Form::model($user, ['method' => 'PATCH','route' => ['users.update', $user->id],'class' => 'form-horizontal']) !!}
                    <div class="card-body">        
                        @csrf
                        @method('PUT')
                        <div class="form-group row">
                            <label for="appeal_status" class="col-sm-2 col-form-label">ชื่อ:</label>
                            <div class="col-sm-10">
                                {!! Form::text('firstname', null, array('placeholder' => 'First name','class' => 'form-control')) !!}
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="appeal_status" class="col-sm-2 col-form-label">สกุล:</label>
                            <div class="col-sm-10">
                                {!! Form::text('lastname', null, array('placeholder' => 'Last name','class' => 'form-control')) !!}
                            </div>
                        </div>
                        @hasrole('Admin')
                        <div class="form-group row">
                            <label for="appeal_status" class="col-sm-2 col-form-label">Email:</label>
                            <div class="col-sm-10">
                                {!! Form::text('email', null, array('placeholder' => 'Email','class' => 'form-control')) !!}
                            </div>
                        </div>
                        @endhasrole
                        <div class="form-group row">
                            <label for="appeal_status" class="col-sm-2 col-form-label">รหัสผ่าน:</label>
                            <div class="col-sm-10">
                                {!! Form::password('password', array('placeholder' => 'Password','class' => 'form-control')) !!}
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="appeal_status" class="col-sm-2 col-form-label">ยืนยันรหัสผ่าน:</label>
                            <div class="col-sm-10">
                                {!! Form::password('confirm-password', array('placeholder' => 'Confirm Password','class' => 'form-control')) !!}
                            </div>
                        </div>
                        @hasrole('Admin')
                        <div class="form-group row">
                            <label for="appeal_status" class="col-sm-2 col-form-label">หน่วยงาน:</label>
                            <div class="col-sm-10">
                                {!! Form::select('department', Helper::Department(),$user->department, array('class' => 'form-control')) !!}
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="appeal_status" class="col-sm-2 col-form-label">Role:</label>
                            <div class="col-sm-10">
                                {!! Form::select('roles[]', $roles,$userRole, array('class' => 'form-control','multiple')) !!}
                            </div>
                        </div>
                        @endhasrole

                    </div>  
                    <div class="card-footer bg-light">
                        <div class="d-grid gap-2 col-12 col-lg-6 mx-auto py-3 align-items-center">
                            <button type="submit" class="btn btn-danger">แก้ไขข้อมูล</button>
                        </div>
                    </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
</div>


@endsection