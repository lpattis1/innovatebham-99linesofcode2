const button = document.querySelector(".sing");
const massEffectCharacters = ["Shepard", "Liara", "Garrus", "Jack", "Wrex"];
let song;

function run99LinesOfCode(characters) {
  characters.forEach((character) => {
    button.addEventListener("click", function (e) {
      const friendDiv = document.createElement("div");
      friendDiv.className = "friend";
      friendDiv.style.marginBottom = "2rem";

      const friendTitle = document.createElement("h3");
      friendTitle.textContent = character;

      friendDiv.appendChild(friendTitle);
      document.body.appendChild(friendDiv);

      for (let i = 99; i > 0; i--) {
        const friendSong = document.createElement("p");

        friendSong.textContent = `I'm Commander ${character} and this is my favorite song on the Citadel. Take number: ${i}`;

        friendDiv.appendChild(friendSong);
      }

      if (friendTitle.textContent === "Shepard") {
        friendTitle.parentElement.classList.add("red-bg");
      } else if (friendTitle.textContent === "Liara") {
        friendTitle.parentElement.classList.add("blue-bg");
      } else if (friendTitle.textContent === "Garrus") {
        friendTitle.parentElement.classList.add("green-bg");
      } else if (friendTitle.textContent === "Jack") {
        friendTitle.parentElement.classList.add("black-bg");
      } else if (friendTitle.textContent === "Wrex") {
        friendTitle.parentElement.classList.add("purple-bg");
      }
    });
  });
}

run99LinesOfCode(massEffectCharacters);
