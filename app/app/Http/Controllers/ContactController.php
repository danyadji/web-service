<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use App\Models\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'contact' => ['required', 'string', 'max:100'],
            'city' => ['nullable', 'string', 'max:100'],
            'message' => ['required', 'string', 'max:2000'],
            'service' => ['nullable', 'string', 'max:50'],
            'tier' => ['nullable', 'string', 'max:50'],
        ], [], [
            'name' => 'nama',
            'contact' => 'kontak',
            'city' => 'kota',
            'message' => 'kebutuhan',
        ]);

        $name = strip_tags($validated['name']);
        $contact = strip_tags($validated['contact']);
        $city = isset($validated['city']) ? strip_tags($validated['city']) : null;
        $message = strip_tags($validated['message']);

        $serviceName = null;
        if (! empty($validated['service'])) {
            $serviceName = Service::where('slug', $validated['service'])->value('name')
                ?? $validated['service'];
        }

        $interested = $serviceName
            ? $serviceName . (! empty($validated['tier']) ? ' tier ' . strip_tags($validated['tier']) : '')
            : null;

        $waText = "Halo, saya {$name} ({$contact}). {$message}";

        Lead::create([
            'name' => $name,
            'contact' => $contact,
            'city' => $city ?: null,
            'service_interested' => $interested,
            'message' => $message,
            'wa_message_sent' => $waText,
            'status' => 'new',
            'ip_address' => $request->ip(),
        ]);

        $number = config('services.admin_whatsapp');

        return response()->json([
            'wa_url' => $number
                ? 'https://wa.me/' . $number . '?text=' . rawurlencode($waText)
                : null,
        ], 201);
    }
}
