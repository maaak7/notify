<?php

namespace App\Http\Controllers;

use App\Models\Events;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    public function create(Request $request)
    {
        $event_data = $request->all();

        $new_event = new Events();
        $new_event->fill($event_data);
        $new_event->user_id = Auth::id();

        try {
            $result = $new_event->save();

            return response()->json([
                'status' => $result ? 'success' : 'error',
                'message' => $result ? 'ok' : 'error',
                'event_id' => $new_event->id,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'something goes wrong',
            ]);
        }
    }
}
