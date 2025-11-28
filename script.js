const dogBtn = document.getElementById("loadDogBtn");
const breedBtn = document.getElementById("loadBreedBtn");
const dogContainer = document.getElementById("dogContainer");
const breedContainer = document.getElementById("breedContainer");

// Function to get random dog image
function loadDogImage() {
  fetch("https://api.thedogapi.com/v1/images/search", {
    headers: { "x-api-key": live_yxSPPmitVewn8XYl6QXEqZlhqk9ETir1aKqLB3XHSqhV351MO5abXogSKsr5WYEn }
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
    headers: { "x-api-key": live_yxSPPmitVewn8XYl6QXEqZlhqk9ETir1aKqLB3XHSqhV351MO5abXogSKsr5WYEn }
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
