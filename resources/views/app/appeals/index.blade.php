@extends('layouts.app')

@section('content-header')
  <div class="col-sm-6">
    <h1>
      ภาพรวมใบคำร้อง
    </h1>
  </div>
  @canany(['appeal-create', 'appeal-manage'])
    <div class="col-6 text-right">
      <a href="{{ route('appeals.create') }}" class="btn btn-primary"><i class="fas fa-plus"></i> เพิ่มข้อมูล</a>
    </div>
  @endcanany
@endsection

@section('content')
  <div class="container-fuild">
    @if ($message = Session::get('success'))
      <div class="alert alert-success mt-3">
        <p>{{ $message }}</p>
      </div>
    @endif
    {{-- <div class="row p-3">
        <div class="col-md col-xs-6 border-right">
        <h3 class="bold no-mtop">{{ $status_count['1']??0 }}</h3>
        <p style="color:#989898" class="text-orange font-medium no-mbot">เปิด</p>
        </div>
        <div class="col-md col-xs-6 border-right">
        <h3 class="bold no-mtop">{{ $status_count['2']??0 }}</h3>
        <p style="color:#03A9F4" class="text-info font-medium no-mbot">อยู่ระหว่างดำเนินการ</p>
        </div>
        <div class="col-md col-xs-6 border-right">
        <h3 class="bold no-mtop">{{ $status_count['3']??0 }}</h3>
        <p style="color:#2d2d2d" class="text-success font-medium no-mbot">ปิด</p>
        </div>
        <div class="col-md col-xs-6 border-right">
        <h3 class="bold no-mtop">{{ $status_count['4']??0 }}</h3>
        <p style="color:#adca65" class="text-primary font-medium no-mbot">ส่งต่อหน่วยงานเจ้าของข้อมูล</p>
        </div>
        <div class="col-md col-xs-6 border-right">
            <h3 class="bold no-mtop">{{ $status_count['5']??0 }}</h3>
            <p style="color:#84c529" class="text-danger font-medium no-mbot">ปฏิเสธ</p>
        </div>
        <div class="col-md col-xs-6 border-right">
            <h3 class="bold no-mtop">{{ $status_count['6']??0 }}</h3>
            <p style="color:#84c529" class="text-pink font-medium no-mbot">ส่งต่อ สคส</p>
        </div>
        <div class="col-md col-xs-6">
            <h3 class="bold no-mtop">{{ $status_count['7']??0 }}</h3>
            <p style="color:#84c529" class="text-gray font-medium no-mbot">Re-Open</p>
        </div>
    </div> --}}
    <div class="row mb-3">
      @foreach (Helper::AppealStatus() as $key => $status)
        <div class="col-md">
          <x-card-appealstatus-box :type=$key>{{ isset($status_count[$key]) ? $status_count[$key] : 0 }}</x-card-box>
        </div>
      @endforeach
    </div>
    <div class="row form-group text-right mb-0">
      <label for="staticEmail" class="col-sm-10 col-form-label">
        สถานะใบคำร้อง
      </label>
      <div class="col-sm-2">
        {!! Form::select('filter_status', ['' => 'ทั้งหมด', '1' => 'เปิด', '2' => 'อยู่ระหว่างดำเนินการ', '3' => 'ปิด', '4' => 'ส่งต่อหน่วยงานเจ้าของข้อมูล', '5' => 'ปฏิเสธ', '6' => 'ส่งต่อ สคส', '7' => 'Re-Open'], request()->get('status'), [
            'class' => 'form-control form-control-sm',
            'id' => 'filter_status',
        ]) !!}
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card shadow bg-body rounded">
          <table class="table strip table-hover">
            <thead>
              <tr>
                <th>หมายเลขใบคำร้อง</th>
                <th>ประเภทใบคำร้อง</th>
                <th>ช่องทาง</th>
                <th>สถานะ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              @forelse ($appeals as $appeal)
                <tr>
                  <td class="align-middle" width="160">
                    <x-badge icon="fas fa-file" :type="$appeal->appeal_status_id"> {{ $appeal->appeal_uuid }}</x-badge>
                  </td>
                  <td class="align-middle">
                    {{ Helper::AppealType($appeal->appeal_type, $appeal->appeal_type_other) }}
                  </td>
                  <td class="align-middle">
                    {{ Helper::AppealChannel($appeal->appeal_channel, $appeal->appeal_channel_other, $appeal->appeal_department_id) }}
                  </td>
                  <td class="align-middle">
                    <x-badge :type="$appeal->appeal_status_id">{{ Helper::AppealStatus($appeal->appeal_status_id) }}</x-badge>
                    <span class="btn btn-outline-success d-none">{{ Helper::AppealStatus($appeal->appeal_status_id) }}</span>
                  </td>
                  <td class="align-middle" width="150">
                    <form action="{{ route('appeals.destroy', $appeal->appeal_id) }}" method="POST">
                      @csrf
                      @method('DELETE')

                      <div class="btn-group">
                        <a class="text-info" href="{{ route('appeals.show', $appeal->appeal_id) }}">
                          <button type="button" class="btn btn-default btn-sm">
                            <i class="fas fa-folder-open"></i> เปิด
                          </button>
                        </a>
                        @canany(['appeal-edit', 'appeal-manage'])
                          <button type="button" class="btn btn-default dropdown-toggle dropdown-icon btn-sm" data-toggle="dropdown">
                            <span class="sr-only">Toggle Dropdown</span>
                          </button>
                          <div class="dropdown-menu" role="menu">
                            <a class="dropdown-item" href="{{ route('appeals.edit', $appeal->appeal_id) }}"><i class="fas fa-cogs"></i> แก้ไข</a>
                            @canany(['appeal-delete', 'appeal-manage'])
                              <div class="dropdown-divider"></div>
                              <button type="submit" class="dropdown-item text-danger"><i class="fas fa-trash"></i> ลบ</button>
                            </div>
                          @endcanany
                        @endcanany
                      </div>
                    </form>
                  </td>
                </tr>
              @empty
                <tr>
                  <td colspan="5">No Appeals</td>
                </tr>
              @endforelse
            </tbody>
          </table>
          <div class="p-3">
            {!! $appeals->links() !!}
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection

@section('jspage')
  <script type="text/javascript">
    $(function() {
      $('#filter_status').change(function() {
        var url = new URL(window.location.href);
        url.searchParams.set("status", $(this).val()); // setting your param
        location.href = url.href;
      });
    });
  </script>
@endsection
