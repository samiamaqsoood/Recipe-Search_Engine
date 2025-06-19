console.log("hello");

document.querySelector("#submit-form").addEventListener('submit', (e) => {
     e.preventDefault();

     const query = document.querySelector("#ingredient-name").value.trim();
     
     if(query != "") {
        window.location.href = `main.html?search=${encodeURIComponent(query)}`;    }
    })