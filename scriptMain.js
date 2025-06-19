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

                  

                   newDiv.children[1].innerHTML = ele.strMeal;

                  // newDiv.nthChild(3).a.href = `${e.}`

                   container.appendChild(newDiv);







                  
                



                  console.log(ele.idMeal);
                 });
    });
}
