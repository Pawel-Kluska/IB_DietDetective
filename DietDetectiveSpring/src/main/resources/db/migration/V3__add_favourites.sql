CREATE TABLE user_meals
(
    id      SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    meal_id INT NOT NULL REFERENCES meals (id) ON DELETE CASCADE,
    UNIQUE (user_id, meal_id)
);
