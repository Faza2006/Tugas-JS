<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDummyRequest;
use App\Http\Resources\V1\DummyCollection;
use App\Http\Resources\V1\DummyResource;
use App\Models\Dummy;
use Illuminate\Http\Request;

class DummyController extends Controller
{
    public function index()
    {
        // return new DummyCollection(Dummy::paginate(4));

        return new DummyCollection(Dummy::all());
    }

    public function show(Dummy $dummy)
    {
        return new DummyResource($dummy);
    }

    public function store(StoreDummyRequest $request)
    {
        Dummy::create($request->validated());
        return response()->json("Dummy Created");
    }

    public function update(StoreDummyRequest $request, Dummy $dummy)
    {
        $dummy->update($request->validated());
        return response()->json("Dummy Updated");
    }

    public function destroy(Dummy $dummy)
    {
        $dummy->delete();
        return response()->json("Dummy Deleted");
    }
}
