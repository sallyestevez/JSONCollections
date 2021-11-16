let contentGridElement = document.getElementById("content");

let jsonDatabase = [

  {
    "name": "Lora",
    "picture_url": "images/Lora.png",
    "favorite_color": "#5C374C",
    "crafting_specialty": "Charm-making",
    "favorite_food": "Ruby-Stew Buloofo"
  },
  {
    "name": "Jin",
    "picture_url": "images/Jin.png",
    "favorite_color": "#585481",
    "crafting_specialty": "Home cooking",
    "favorite_food": "Steel Salmon Tempura"
  },
  {
    "name": "Haze",
    "picture_url": "images/Haze.png",
    "favorite_color": "#A4508B",
    "crafting_specialty": "Talisman-making",
    "favorite_food": "Wildflower Salad"
  },
  {
    "name": "Addam",
    "picture_url": "images/Addam.png",
    "favorite_color": "#AE4944",
    "crafting_specialty": "Replica-artifact-making",
    "favorite_food": "Energy Stir-Fry"
  },
  {
    "name": "Mythra",
    "picture_url": "images/Mythra.png",
    "favorite_color": "#31D88A",
    "crafting_specialty": '"Creative" cuisine',
    "favorite_food": "Miracle Parfait"
  },
  {
    "name": "Minoth",
    "picture_url": "images/Minoth.png",
    "favorite_color": "#3B1F2B",
    "crafting_specialty": "Dramaturgy",
    "favorite_food": "Ruska Dumpling Soup"
  },
  {
    "name": "Hugo",
    "picture_url": "images/Hugo.png",
    "favorite_color": "#40476D",
    "crafting_specialty": "Machine-tinkering",
    "favorite_food": "Rhogul à la Ardainaise"
  },
  {
    "name": "Brighid",
    "picture_url": "images/Brighid.png",
    "favorite_color": "#B17DE6",
    "crafting_specialty": "Perfumery",
    "favorite_food": "Gormotti Sashimi Plate"
  },
  {
    "name": "Aegaeon",
    "picture_url": "images/Aegaeon.png",
    "favorite_color": "#2E86AB",
    "crafting_specialty": "Refined cuisine",
    "favorite_food": "Rich Platinum Bonbon"
  }

];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}

function createElement(incomingJSON) {
  // create content div
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON["favorite_color"];
  newContentElement.classList.add("contentItem");

  // create and add image
  let image = document.createElement("IMG");
  image.classList.add("portrait");
  image.src = incomingJSON["picture_url"];
  newContentElement.appendChild(image);

  // create headline h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add("contentName");
  newContentHeading.innerText = incomingJSON["name"];

  // add headline to item
  newContentElement.appendChild(newContentHeading);

  // create and add h4 (crafting_specialty)
  let newCraftingElement = document.createElement("H4");
  newCraftingElement.classList.add("craftingSpecialty");
  newCraftingElement.innerText = incomingJSON["crafting_specialty"];
  newContentElement.appendChild(newCraftingElement);

  // create and add h4 (favorite_food)
  let newFoodElement = document.createElement("H4");
  newFoodElement.classList.add("favoriteFood");
  newFoodElement.innerText = incomingJSON["favorite_food"];
  newContentElement.appendChild(newFoodElement);

  contentGridElement.appendChild(newContentElement);

}
