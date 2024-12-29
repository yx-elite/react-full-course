import axios from "axios";
import { useState, useEffect } from "react";
import "../style.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setMeals(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const mealsList = meals.map((meal) => {
    return (
      <section className="card" key={meal.idMeal}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <section className="content">
          <h2 className="title">{meal.strMeal}</h2>
          <p className="id">#{meal.idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{mealsList}</div>;
};

export default Meals;
