<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PelangganResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'idpelanggan' => $this->idpelanggan,
            'pelanggan' => $this->pelanggan,
            'alamat' => $this->alamat,
            'telp' => $this->telp,
        ];
    }
}