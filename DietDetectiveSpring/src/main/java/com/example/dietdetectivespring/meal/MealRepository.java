package com.example.dietdetectivespring.meal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MealRepository extends JpaRepository<Meal, Integer> {

    @Query("SELECT DISTINCT m FROM Meal m JOIN m.categories c WHERE c.id IN :categoryIds ORDER BY m.name ASC")
    List<Meal> findAllByCategoryIdIn(List<Integer> categoryIds);
}