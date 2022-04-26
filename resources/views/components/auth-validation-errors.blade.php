@props(['errors'])

@if ($errors->any())
    <div {{ $attributes }} class="alert alert-danger">
        <div class="text-white">
            {{ __('Whoops! Something went wrong.') }}
        </div>

        <ul class="mt-3 text-sm text-white">
            @foreach ($errors->all() as $error)
                <li class="text-white">{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
