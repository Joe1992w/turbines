<?php

namespace App\Http\Controllers;

use App\Models\WindTurbine;
use Illuminate\Http\Request;

class WindTurbineController extends Controller
{
    public function inspectionData()
    {
        $inspection_data = WindTurbine::generateInspectionData();

        return $inspection_data;
    }
}
