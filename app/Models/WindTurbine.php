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

            $item_data = [
                "part_number" => $i
            ];

            if($coating_damage && $lightning_strike) {
                // both $coating_damage and $lightning_strike == true, label this item appropriately
                $item_data["condition"] = "Coating Damage and Lightning Strike";
                $inspection_data[] = $item_data;
                // Using continue instead of a long if/if else/if else/else statement, it exits the loop early to avoid the following conditionals
                continue;
            }

            if($coating_damage) {
                $item_data["condition"] = "Coating Damage";
                $inspection_data[] = $item_data;
                continue;
            }

            if($lightning_strike) {
                $item_data["condition"] = "Lightning Strike";
                $inspection_data[] = $item_data;
                continue;
            }

            // For a better UX I've opted to set the value to the string 'Good' instead of $i
            // $i is used as the index and is displayed on the front end
            // Could've assigned $i instead if it is preferable - $inspection_data[$i] = $i;
            $item_data["condition"] = "Good";

            $inspection_data[] = $item_data;

        }

        return $inspection_data;
    }
}
