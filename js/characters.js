const characters = [
  "Cadence",
  "Melody",
  "Aria",
  "Dorian",
  "Eli",
  "Monk",
  "Dove",
  "Bolt",
  "Bard",
  "Coda",
];

const characterInfo = {
  Cadence: {
    health: 3,
    shovel: "Shovel",
    attack: "Dagger",
    body: "none",
    feet: "none",
    ring: "none",
    charm: "none",
  },
  Melody: {
    health: 2,
    shovel: "Shovel",
    attack: "Golden Lute",
    body: "none",
    feet: "none",
    ring: "none",
    charm: "none",
  },
  Aria: {
    health: 0.5,
    shovel: "Shovel",
    attack: "Dagger",
    body: "none",
    feet: "none",
    ring: "none",
    charm: "Nazar",
  },
  Dorian: {
    health: 4,
    shovel: "Pickaxe",
    attack: "Dagger",
    body: "Dorian's Plate Armor",
    feet: "Leaping Boots",
    ring: "Ring Of Might",
    charm: "Compass",
  },
  Eli: {
    health: 3,
    shovel: "Shovel",
    attack: "Dagger",
    body: "none",
    feet: "none",
    ring: "none",
    charm: "none",
  },
  Monk: {
    health: 3,
    shovel: "Shovel",
    attack: "Dagger",
    body: "none",
    feet: "none",
    ring: "none",
    charm: "none",
  },
  Dove: {
    health: 3,
    shovel: "Shovel",
    attack: "Dagger",
    body: "none",
    feet: "none",
    ring: "none",
    charm: "none",
  },
  Bolt: {
    health: 3,
    shovel: "Shovel",
    attack: "Dagger",
    body: "none",
    feet: "none",
    ring: "none",
    charm: "none",
  },
  Bard: {
    health: 3,
    shovel: "Shovel",
    attack: "Dagger",
    body: "none",
    feet: "none",
    ring: "none",
    charm: "none",
  },
  Coda: {
    health: 0.5,
    shovel: "Shovel",
    attack: "Dagger",
    body: "none",
    feet: "none",
    ring: "none",
    charm: "Nazar",
  },
};

let currentChar = 0;

function CharChange(selectedChar) {
  document
    .getElementById(characters[currentChar] + "head")
    .classList.remove("selectedhead");

  document
    .getElementById(characters[selectedChar] + "head")
    .classList.add("selectedhead");

  currentChar = selectedChar;

  //Image
  document.getElementById("characterImg").src =
    "../images/characters/" + characters[selectedChar] + ".webp";
  //Name
  document.getElementById("name").innerHTML = characters[selectedChar];

  //Health
  document.getElementById("hearts").replaceChildren();

  if (characterInfo[characters[selectedChar]].health == 0.5) {
    let charHealth = document.createElement("img");
    charHealth.src = "../images/hud/halfheart.webp";
    charHealth.className = "heart";
    document.getElementById("hearts").appendChild(charHealth);
  } else {
    for (let i = 0; i < characterInfo[characters[selectedChar]].health; i++) {
      let charHealth = document.createElement("img");
      charHealth.src = "../images/hud/heart.webp";
      charHealth.className = "heart";
      document.getElementById("hearts").appendChild(charHealth);
    }
  }
  //Shovel
  /*let charShovel = document.createElement("p");
  charShovel.innerHTML = characterInfo[characters[selectedChar]].shovel;
  charShovel.className = "characterInfo";
  document.getElementById("charDetails").appendChild(charShovel);*/
}

function leftClick() {
  document
    .getElementById(characters[currentChar] + "head")
    .classList.remove("selectedhead");

  if (currentChar == 0) currentChar = 9;
  else currentChar--;
  CharChange(currentChar);
}

function rightClick() {
  document
    .getElementById(characters[currentChar] + "head")
    .classList.remove("selectedhead");

  if (currentChar == 9) currentChar = 0;
  else currentChar++;
  CharChange(currentChar);
}
