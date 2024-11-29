package com.example.dietdetectivespring.user;

import com.example.dietdetectivespring.meal.Meal;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserFavouriteMeals {
    Set<Meal> favouriteMeals;
}
