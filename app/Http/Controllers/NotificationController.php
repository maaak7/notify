<?php

namespace App\Http\Controllers;

use App\Models\Notifications;
use Carbon\Carbon;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function create(Request $request)
    {
        $data = $request->all();

        foreach ($data['notifications'] as $notification) {
            $obj = new Notifications();
            $obj->event_id = $data['event_id'];
            $obj->datetime = Carbon::parse($notification);

            $result = $obj->save();
        }

        return 'notifications OK';
    }
}
