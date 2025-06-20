console.log("hello");

const params = new URLSearchParams(window.location.search);
const mealID = params.get("id");

if (mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];

      document.querySelector("#recipe-name").children[1].innerHTML += meal.strMeal;
      document.querySelector("#thumb").src = meal.strMealThumb;
      let i = 1;
      while (meal[`strIngredient${i}`]) {
        document.querySelector("#recipe-ingrdients-list").innerHTML += `<li>${meal[`strIngredient${i}`]}</li>`;
         i++;
        }
         let j = 1;
        while (meal[`strMeasure${j}`]) {
        document.querySelector("#recipe-measures-list").innerHTML += `<li>${meal[`strMeasure${j}`]}</li>`;
         j++;
        }

        document.querySelector("#instructions").innerHTML += meal.strInstructions;
      console.log(meal);

    });
}
