package com.example.dietdetectivespring.user;

import com.example.dietdetectivespring.meal.Meal;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.Hibernate;

import java.sql.Date;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;


@Entity
@Table(name = "users")
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "birth_date")
    private Date birthDate;

    @Column(name = "target_weight")
    private Float targetWeight;

    @Column(name = "goal")
    private String goal;

    @Column(name = "is_premium")
    private Boolean premium;

    @Column(name = "sex")
    private String sex;

    @Column(name = "height")
    private Integer height;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @JsonIgnore
    @Column(name = "password", nullable = false)
    private String password;

    @ManyToMany
    @JoinTable(
            name = "user_meals",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "meal_id")
    )
    @JsonIgnore
    private Set<Meal> meals;

    public void setSurvey(UserSurveyRequest userSurveyRequest) {
        this.birthDate = userSurveyRequest.getBirthDate();
        this.targetWeight = userSurveyRequest.getTargetWeight();
        this.goal = userSurveyRequest.getGoal();
        this.sex = userSurveyRequest.getSex();
        this.height = userSurveyRequest.getHeight();
    }

    public void addFavouriteMeal(Meal meal) {
        if (meals == null)
            meals = new HashSet<>();
        meals.add(meal);
    }

    public void deleteFavouriteMeal(Meal meal) {
        if (meals == null)
            meals = new HashSet<>();
        meals.remove(meal);
    }
}
