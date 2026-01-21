const dogBtn = document.getElementById("loadDogBtn");
const breedBtn = document.getElementById("loadBreedBtn");
const dogContainer = document.getElementById("dogContainer");
const breedContainer = document.getElementById("breedContainer");

// Function to get random dog image
function loadDogImage() {
  fetch("https://api.thedogapi.com/v1/images/search", {
    headers: { "x-api-key":X-Api-Key: live_cZo89Dr1trs81LaUG6cKpNexrmPjkX6IDQfarW3ayWGAvxklv9Q1osfUoNF9iIh7 }
  })
    .then(res => res.json())
    .then(data => {
      dogContainer.innerHTML = `<img src="${data[0].url}" alt="Random Dog">`;
    })
    .catch(err => console.error(err));
}

// Function to get list of dog breeds
function loadBreeds() {
  fetch("https://api.thedogapi.com/v1/breeds", {
    headers: { "x-api-key": X-Api-Key: live_cZo89Dr1trs81LaUG6cKpNexrmPjkX6IDQfarW3ayWGAvxklv9Q1osfUoNF9iIh7 }
  })
    .then(res => res.json())
    .then(data => {
      breedContainer.innerHTML = "";
      data.forEach(breed => {
        breedContainer.innerHTML += `<p>${breed.name}</p>`;
      });
    })
    .catch(err => console.error(err));
}

// Event listeners
dogBtn.addEventListener("click", loadDogImage);
breedBtn.addEventListener("click", loadBreeds);
