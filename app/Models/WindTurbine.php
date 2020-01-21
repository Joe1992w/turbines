<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WindTurbine extends Model
{
    public static function generateInspectionData()
    {
        $inspection_data = [];

        for ($i = 1; $i <= 100; $i++) {
            $coating_damage = false;
            $lightning_strike = false;

            if($i % 3 == 0) {
                // If remainder from modulus operation is 0, $i is divisible by three and therefor has coating damage
                $coating_damage = true;
            }

            if($i % 5 == 0) {
                // If remainder from modulus operation is 0, $i is divisible by five and therefor has suffered a lightning strike
                $lightning_strike = true;
            }

            if($coating_damage && $lightning_strike) {
                // both $coating_damage and $lightning_strike == true, label this item appropriately
                $inspection_data[] = "Coating Damage and Lightning Strike";
                // Using continue instead of a long if/if else/if else/else statement, it exits the loop early to avoid the following conditionals
                continue;
            }

            if($coating_damage) {
                $inspection_data[] = "Coating Damage";
                continue;
            }

            if($lightning_strike) {
                $inspection_data[] = "Lightning Strike";
                continue;
            }

            $inspection_data[] = $i;
        }

        return $inspection_data;
    }
}
