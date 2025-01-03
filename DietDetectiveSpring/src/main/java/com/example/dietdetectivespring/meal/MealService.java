package com.example.dietdetectivespring.meal;

import com.example.dietdetectivespring.user.User;
import com.example.dietdetectivespring.user.UserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MealService {

    private final MealRepository mealRepository;

    public Meal getMealById(int id) throws EntityNotFoundException {
        return mealRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public List<Meal> getMealsByCategoryIds(List<Integer> categoryIds) {
        return mealRepository.findAllByCategoryIdIn(categoryIds);
    }
}
