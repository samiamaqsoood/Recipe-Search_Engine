// Get query from URL
       const  params = new URLSearchParams(window.location.search);
       const searchQuery = params.get("search");
       const container = document.querySelector("#recipe-cards");

      if (searchQuery) {
           fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
              .then(res => res.json())
                .then(data => {
                 console.log(data.meals); // build recipe cards here

                 const allMeals = data.meals;

                 allMeals.forEach(ele => {
                   const template = document.querySelector(".card");
                   const newDiv = template.cloneNode(true);
                 

                  newDiv.style.height = "300px";
                  newDiv.style.width = "100%";
                  newDiv.style.display = "flex";
                  newDiv.style.flexDirection = "column";
                  newDiv.style.backgroundColor = "#ebe2ea";
                  newDiv.style.justifyContent = "center";
                  newDiv.style.alignItems = "center";
                  newDiv.style.borderRadius = "5%";

                  newDiv.children[0].style.width = "90%";
                  newDiv.children[0].style.height = "60%";

                   // Fill in the image
                   const img = newDiv.querySelector("img");
                   img.src = ele.strMealThumb;
                   img.alt = ele.strMeal;
                   img.style.width = "100%";
                   img.style.height = "100%";

                   let recipe_name = newDiv.children[1];
                   recipe_name.innerHTML = ele.strMeal;

                   let showDetails = newDiv.children[2];
                   showDetails.style.marginTop = "10px";
                   showDetails.style.fontSize = "small";
                   let anchor = showDetails.querySelector("a"); // find the <a> tag inside
                   anchor.href = `detailCard.html?id=${ele.idMeal}`; // set link
                   anchor.textContent = "View Details"; // optional: set link text
                   

                   container.appendChild(newDiv);







                  
                



                  console.log(ele.idMeal);
                 });
    });
}
