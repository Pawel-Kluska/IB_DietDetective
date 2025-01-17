package com.example.dietdetectivespring.eatenmeals;

import com.example.dietdetectivespring.meal.Meal;
import com.example.dietdetectivespring.meal.MealService;
import com.example.dietdetectivespring.user.User;
import com.example.dietdetectivespring.user.UserRepository;
import com.example.dietdetectivespring.utils.BMRCalculator;
import com.example.dietdetectivespring.weightrecords.WeightRecord;
import com.example.dietdetectivespring.weightrecords.WeightRecordService;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EatenMealsService {

    private final EatenMealRepository eatenMealRepository;
    private final UserRepository userRepository;
    private final MealService mealService;
    private final WeightRecordService weightRecordService;

    public EatenMeal addEatenMeal(EatenMealRequest eatenMealRequest, String email) {
        User userByEmail = userRepository.findByEmail(email).orElseThrow(EntityNotFoundException::new);
        Meal mealById = mealService.getMealById(eatenMealRequest.getMealId());

        Optional<EatenMeal> dbEatenMeal = eatenMealRepository
                .findByMealIdAndUserIdAndDate(
                        mealById.getId(),
                        userByEmail.getId(),
                        new Date(System.currentTimeMillis()));
        if (dbEatenMeal.isPresent()) {
            EatenMeal eatenMeal = dbEatenMeal.get();
            eatenMeal.setEatenWeight(eatenMeal.getEatenWeight() + eatenMealRequest.getEatenWeight());
            return eatenMealRepository.save(eatenMeal);
        }

        EatenMeal eatenMeal = EatenMeal.builder()
                .date(new Date(System.currentTimeMillis()))
                .meal(mealById)
                .eatenWeight(eatenMealRequest.getEatenWeight())
                .user(userByEmail)
                .build();
        return eatenMealRepository.save(eatenMeal);
    }

    public EatenMeal editEatenMeal(EatenMealRequest eatenMealRequest, String email) {
        User userByEmail = userRepository.findByEmail(email).orElseThrow(EntityNotFoundException::new);
        Meal mealById = mealService.getMealById(eatenMealRequest.getMealId());

        Optional<EatenMeal> dbEatenMeal = eatenMealRepository
                .findByMealIdAndUserIdAndDate(
                        mealById.getId(),
                        userByEmail.getId(),
                        new Date(System.currentTimeMillis()));
        if (dbEatenMeal.isPresent()) {
            EatenMeal eatenMeal = dbEatenMeal.get();
            eatenMeal.setEatenWeight(eatenMealRequest.getEatenWeight());
            return eatenMealRepository.save(eatenMeal);
        } else throw new EntityNotFoundException();
    }

    public List<EatenMeal> getEatenMealsForToday(String email) {
        return eatenMealRepository.findAllByUserEmailAndDate(email, new Date(System.currentTimeMillis()));
    }

    public List<EatenMeal> getEatenMealsWithoutDateForToday(String email) {
        return getEatenMealsForToday(email)
                .stream()
                .peek(eatenMeal -> eatenMeal.getMeal().multiplyProperties(eatenMeal.getEatenWeight() / 100F))
                .toList();
    }


    public List<Meal> getEatenMealsWithoutDate(List<EatenMeal> eatenMeals) {
        return eatenMeals.stream()
                .map(EatenMeal::getMeal)
                .toList();
    }

    public Integer getCaloriesConsumedForToday(String email) {
        return getCaloriesConsumed(getEatenMealsForToday(email));
    }

    public List<CaloriesPerDayDto> getCaloriesPerDayFromLastWeek(String email) {
        return eatenMealRepository.calculateCaloriesPerDayAfterDateByUserEmail(
                email,
                new Date(System.currentTimeMillis() - 7 * 24 * 60 * 60 * 1000L));
    }

    public Integer getCaloriesConsumed(List<EatenMeal> eatenMeals) {
        return eatenMeals.stream()
                .map(EatenMeal::getMeal)
                .map(Meal::getCalories)
                .reduce(0, Integer::sum);
    }

    public Float getCarbohydratesConsumed(List<EatenMeal> eatenMeals) {
        return eatenMeals.stream()
                .map(EatenMeal::getMeal)
                .map(Meal::getCarbohydrates)
                .reduce(0f, Float::sum);
    }

    public Float getFatsConsumed(List<EatenMeal> eatenMeals) {
        return eatenMeals.stream()
                .map(EatenMeal::getMeal)
                .map(Meal::getFats)
                .reduce(0f, Float::sum);
    }

    public Float getProteinsConsumed(List<EatenMeal> eatenMeals) {
        return eatenMeals.stream()
                .map(EatenMeal::getMeal)
                .map(Meal::getProteins)
                .reduce(0f, Float::sum);
    }

    public int getCaloriesDemand(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(EntityExistsException::new);
        WeightRecord weightRecordByToday = weightRecordService.getWeightRecordByToday(email);
        return BMRCalculator.calculateBMR(
                user.getSex(),
                weightRecordByToday.getWeight(),
                user.getHeight(),
                user.getBirthDate());
    }

    public void deleteEatenMeal(Integer id, String email) {
        User user = userRepository.findByEmail(email).orElseThrow(EntityNotFoundException::new);
        Optional<EatenMeal> eatenMeals = eatenMealRepository
                .findByMealIdAndUserIdAndDate(
                        id,
                        user.getId(),
                        new Date(System.currentTimeMillis()));
        eatenMealRepository.delete(eatenMeals.orElseThrow(EntityNotFoundException::new));
    }

    public EatenMealsSummaryResponse getMealsSummary(String email) {
        List<EatenMeal> eatenMealsToday = eatenMealRepository
                .findAllByUserEmailAndDate(email, new Date(System.currentTimeMillis())).stream()
                .peek(eatenMeal -> eatenMeal.getMeal().multiplyProperties(eatenMeal.getEatenWeight() / 100F))
                .toList();

        return EatenMealsSummaryResponse.builder()
                .eatenMealsToday(getEatenMealsWithoutDate(eatenMealsToday))
                .eatenMealsFromLastWeek(getCaloriesPerDayFromLastWeek(email))
                .caloriesConsumedToday(getCaloriesConsumed(eatenMealsToday))
                .caloriesDailyDemand(getCaloriesDemand(email))
                .carbohydratesConsumedToday(getCarbohydratesConsumed(eatenMealsToday))
                .fatsConsumedToday(getFatsConsumed(eatenMealsToday))
                .proteinsConsumedToday(getProteinsConsumed(eatenMealsToday))
                .build();
    }

}
