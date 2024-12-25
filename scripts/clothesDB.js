const clothes = {
  hair: [
    {
      id: "long-hair",
      name: "Long Hair",
      category: "HAIR",
      imgHtml: `<img src="assets/hair/long.png" height="700" class="layer-6" id="long-hair"/>`,
      iconHtml: `<img src="assets/hair/icons/long_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="long-hair" data-category="hair">`,
      layer: -6,
      related: [],
      dependent: [],
    },
    {
      id: "ponytail",
      name: "Ponytail",
      category: "HAIR",
      imgHtml: `<img src="assets/hair/ponytail.png" height="700" class="layer-2" id="ponytail"/>`,
      iconHtml: `<img src="assets/hair/icons/ponytail_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="ponytail" data-category="hair">`,
      layer: -2,
      related: [],
      dependent: [],
    },
  ],
  under: [
    {
      id: "leaf-under",
      name: "Leaf",
      category: "UNDER",
      imgHtml: `<img src="assets/under/leaf.png" height="700" class="layer1" id="leaf-under"/>`,
      iconHtml: `<img src="assets/under/icons/leaf_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="leaf-under" data-category="under">`,
      layer: 1,
      related: [],
      dependent: [],
    },
    {
      id: "plain-under",
      name: "Plain Underwear",
      category: "UNDER",
      imgHtml: `<img src="assets/under/plain.png" height="700" class="layer1" id="plain-under"/>`,
      iconHtml: `<img src="assets/under/icons/plain_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="plain-under" data-category="under">`,
      layer: 1,
      related: [],
      dependent: [],
    },
  ],
};

const multiAllowed = ["ACCESSORIES"];

const selectedOutfit = {
  hair: "ponytail",
  under: "leaf-under",
  outer: "",
  inner: "",
  pants: "",
  shoes: "",
  accessories: [],
};
