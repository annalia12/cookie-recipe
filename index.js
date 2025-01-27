function displayRecipe(response) {
    new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  function generateRecipe(event) {
    event.preventDefault();
  
    let instructionsInputElement = document.querySelector("#user-instructions");
  
    let apiKey = "6a4bo439f4518f900acccae6f3t294be";
    let prompt = `Display the best cookies recipe based on ${instructionsInputElement.value}`;
    let context =
      "return result using html: You know about all the cookies in the world and I would like for you to display the best cookie recipe with the main ingredient typed by the user in the input, please. Also, I would like for you to add a title for the recipe you choose and display the title in bold and centered on it's own line at the top, please";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let recipeEl = document.querySelector("#recipe");
    recipeEl.classList.remove("hidden");
    recipeEl.innerHTML = `<div class="generating"> ⏳ Generating an amazing cookie recipe featuring ${instructionsInputElement.value} just for you ❤️...</div>`;
  
    
  
    axios.get(apiUrl).then(displayRecipe);
  }
  
  let recipeElement = document.querySelector("#form");
  recipeElement.addEventListener("submit", generateRecipe);
  