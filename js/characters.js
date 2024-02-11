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
        shovel: "shovel",
        attack: "dagger",
        body: "none",
        feet: "none",
        ring: "none",
        charm: "none",
      },
      Melody: {
        health: 2,
        shovel: "shovel",
        attack: "golden-lute",
        body: "none",
        feet: "none",
        ring: "none",
        charm: "none",
      },
      Aria: {
        health: 0.5,
        shovel: "shovel",
        attack: "dagger",
        body: "none",
        feet: "none",
        ring: "none",
        charm: "Nazar",
      },
      Dorian: {
        health: 4,
        shovel: "pickaxe",
        attack: "dagger",
        body: "dorians-plate-armor",
        feet: "boots-of-leaping",
        ring: "ring-of-might",
        charm: "Compass",
      },
      Eli: {
        health: 3,
        shovel: "shovel",
        attack: "none",
        body: "none",
        feet: "none",
        ring: "none",
        charm: "none",
      },
      Monk: {
        health: 3,
        shovel: "blood-shovel",
        attack: "dagger",
        body: "none",
        feet: "none",
        ring: "none",
        charm: "none",
      },
      Dove: {
        health: 3,
        shovel: "crystal-shovel",
        attack: "flower",
        body: "none",
        feet: "none",
        ring: "none",
        charm: "none",
      },
      Bolt: {
        health: 3,
        shovel: "shovel",
        attack: "spear",
        body: "none",
        feet: "none",
        ring: "none",
        charm: "none",
      },
      Bard: {
        health: 3,
        shovel: "shovel",
        attack: "dagger",
        body: "none",
        feet: "none",
        ring: "none",
        charm: "none",
      },
      Coda: {
        health: 0.5,
        shovel: "shovel",
        attack: "dagger",
        body: "none",
        feet: "none",
        ring: "none",
        charm: "Nazar",
      },
    };

    let currentChar = 0;

    function CharChange(selectedChar) {
      const charInfo = characterInfo[characters[selectedChar]];

      document
        .getElementById(characters[currentChar] + "head")
        .classList.remove("selectedhead");

      document
        .getElementById(characters[selectedChar] + "head")
        .classList.add("selectedhead");

      currentChar = selectedChar;

      //Image
      document.getElementById("characterImg").src =
        "./images/characters/" + characters[selectedChar] + ".webp";
      //Name
      document.getElementById("name").innerHTML = characters[selectedChar];

      //Health
      document.getElementById("hearts").replaceChildren();

      if (charInfo.health == 0.5) {
        let charHealth = document.createElement("img");
        charHealth.src = "./images/hud/halfheart.webp";
        charHealth.className = "heart";
        document.getElementById("hearts").appendChild(charHealth);
      } else {
        for (let i = 0; i < charInfo.health; i++) {
          let charHealth = document.createElement("img");
          charHealth.src = "./images/hud/heart.webp";
          charHealth.className = "heart";
          document.getElementById("hearts").appendChild(charHealth);
        }
      }

      const shovel = document.getElementById("shovel");
      const attack = document.getElementById("attack");
      const body = document.getElementById("body");
      const feet = document.getElementById("feet");

      // Fill item grid
      shovel.src = "./images/items/shovel-" + charInfo.shovel + ".webp";

      charInfo.attack !== "none" ? attack.style.display = "block" : attack.style.display = "none";
      attack.src = "./images/items/attack-" + charInfo.attack + ".webp";

      charInfo.body !== "none" ? body.style.display = "block" : "none";
      body.src = charInfo.body !== "none" ? "./images/items/body-" + charInfo.body + ".webp" : "";

      charInfo.feet !== "none" ? feet.style.display = "block" : "none";
      feet.src = charInfo.feet !== "none" ? "./images/items/feet-" + charInfo.feet + ".webp" : "";
      
      //Shovel
      /*let charShovel = document.createElement("p");
      charShovel.innerHTML = charInfo.shovel;
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