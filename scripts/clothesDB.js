const clothes = {
  hair: [
    {
      id: "long-hair",
      name: "Long Hair",
      category: "HAIR",
      imgHtml: `<img src="assets/hair/long.png" class="layer-6 doll-layer" id="long-hair"/>`,
      iconHtml: `<img src="assets/hair/icons/long_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="long-hair" data-category="hair">`,
      layer: -6,
      related: [],
      dependent: [],
    },
    {
      id: "ponytail",
      name: "Ponytail",
      category: "HAIR",
      imgHtml: `<img src="assets/hair/ponytail.png" class="layer-2 doll-layer" id="ponytail"/>`,
      iconHtml: `<img src="assets/hair/icons/ponytail_icon.png" class="item-btn selected-item" onclick="toggleItem(this);" data-item="ponytail" data-category="hair">`,
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
      imgHtml: `<img src="assets/under/leaf.png" class="layer1 doll-layer" id="leaf-under"/>`,
      iconHtml: `<img src="assets/under/icons/leaf_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="leaf-under" data-category="under">`,
      layer: 1,
      related: [],
      dependent: [],
    },
    {
      id: "plain-under",
      name: "Plain Underwear",
      category: "UNDER",
      imgHtml: `<img src="assets/under/plain.png" class="layer1 doll-layer" id="plain-under"/>`,
      iconHtml: `<img src="assets/under/icons/plain_icon.png" class="item-btn selected-item" onclick="toggleItem(this);" data-item="plain-under" data-category="under">`,
      layer: 1,
      related: [],
      dependent: [],
    },
  ],
  inner: [
    {
      id: "plain-inner",
      name: "Plain Inner Robe",
      category: "INNER",
      imgHtml: `<img src="assets/inner/plain_a.png" class="layer5 doll-layer" id="plain-inner"/>`,
      iconHtml: `<img src="assets/inner/icons/plain_icon.png" class="item-btn selected-item" onclick="toggleItem(this);" data-item="plain-inner" data-category="inner">`,
      layer: 5,
      related: [],
      dependent: [],
      linkedItems: [
        {
          id: "plain-inner-b",
          imgHtml: `<img src="assets/inner/plain_b.png" class="layer-1 doll-layer" id="plain-inner-b"/>`,
        },
      ],
    },
  ],
  outer: [
    {
      id: "autumn-outer",
      name: "Autumn Outer Robe",
      category: "OUTER",
      imgHtml: `<img src="assets/outer/autumn.png" class="layer7 doll-layer" id="autumn-outer"/>`,
      iconHtml: `<img src="assets/outer/icons/autumn_icon.png" class="item-btn selected-item" onclick="toggleItem(this);" data-item="autumn-outer" data-category="outer">`,
      layer: 7,
      related: [],
      dependent: [],
    },
  ],
  pants: [
    {
      id: "plain-pants",
      name: "Plain White Pants",
      category: "PANTS",
      imgHtml: `<img src="assets/pants/plain.png" class="layer2 doll-layer" id="plain-pants"/>`,
      iconHtml: `<img src="assets/pants/icons/plain_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="plain-pants" data-category="pants">`,
      layer: 2,
      related: [],
      dependent: [],
    },
  ],
  shoes: [
    {
      id: "advisor-boots",
      name: "Advisor Boots",
      category: "SHOES",
      imgHtml: `<img src="assets/shoes/advisor_boots.png" class="layer3 doll-layer" id="advisor-boots"/>`,
      iconHtml: `<img src="assets/shoes/icons/advisor_boots_icon.png" class="item-btn selected-item" onclick="toggleItem(this);" data-item="advisor-boots" data-category="shoes">`,
      layer: 3,
      related: [],
      dependent: [],
    },
  ],
  accessories: {
    belts: [
      {
        id: "green-medal-belt",
        name: "Green Medal Belt",
        category: "ACCESSORIES",
        subcategory: "BELTS",
        imgHtml: `<img src="assets/belt/green_medal_belt.png" class="layer10 doll-layer" id="green-medal-belt"/>`,
        iconHtml: `<img src="assets/belt/icons/green_medal_belt_icon.png" class="item-btn selected-item" onclick="toggleItem(this);" data-item="green-medal-belt" data-category="accessories" data-subcategory="belts">`,
        layer: 8,
        related: [],
        dependent: [],
      },
    ],
    capes: [
      {
        id: "fur-cape",
        name: "Fur Cape",
        category: "ACCESSORIES",
        subcategory: "CAPES",
        imgHtml: `<img src="assets/cape/fur_cape.png" height="700" class="layer8 doll-layer" id="fur-cape"/>`,
        iconHtml: `<img src="assets/cape/icons/fur_cape_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="fur-cape" data-category="accessories" data-subcategory="capes">`,
        layer: 9,
        related: [],
        dependent: [],
      },
      {
        id: "bottom-cape",
        name: "Bottom Cape",
        category: "ACCESSORIES",
        subcategory: "CAPES",
        imgHtml: `<img src="assets/cape/bottom_cape_a.png" class="layer6 doll-layer" id="bottom-cape"/>`,
        iconHtml: `<img src="assets/cape/icons/bottom_cape_icon.png" class="item-btn selected-item" onclick="toggleItem(this);" data-item="bottom-cape" data-category="accessories" data-subcategory="capes">`,
        layer: 6,
        related: [],
        dependent: [],
        linkedItems: [
          {
            id: "bottom-cape-b",
            imgHtml: `<img src="assets/cape/bottom_cape_b.png" class="layer-3 doll-layer" id="bottom-cape-b"/>`,
          },
        ],
      },
    ],
    armour: [
      {
        id: "light-armour",
        name: "Light Armour",
        category: "ACCESSORIES",
        subcategory: "ARMOUR",
        imgHtml: `<img src="assets/armour/light.png" class="layer9 doll-layer" id="light-armour"/>`,
        iconHtml: `<img src="assets/armour/icons/light_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="light-armour" data-category="accessories" data-subcategory="armour">`,
        layer: 8,
        related: [],
        dependent: [],
      },
    ],
    neck: [
      {
        id: "brown-collar",
        name: "Brown Collar",
        category: "ACCESSORIES",
        subcategory: "NECK",
        imgHtml: `<img src="assets/neck/collar.png" class="layer4 doll-layer" id="brown-collar"/>`,
        iconHtml: `<img src="assets/neck/icons/collar_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="brown-collar" data-category="accessories" data-subcategory="neck">`,
        layer: 8,
        related: [],
        dependent: [],
      },
    ],
    weapons: [
      {
        id: "cinnabar-sword",
        name: "Cinnabar Sword",
        category: "ACCESSORIES",
        subcategory: "WEAPONS",
        imgHtml: `<img src="assets/weapon/sword.png" class="layer11 doll-layer" id="cinnabar-sword"/>`,
        iconHtml: `<img src="assets/weapon/icons/sword_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="cinnabar-sword" data-category="accessories" data-subcategory="weapons">`,
        layer: 8,
        related: [],
        dependent: [],
      },
    ],
    others: [],
  },
};

const multiAllowed = ["ACCESSORIES"];

let selectedOutfit = {
  hair: "ponytail",
  under: "plain-under",
  outer: "autumn-outer",
  inner: "plain-inner",
  pants: "plain-pants",
  shoes: "advisor-boots",
  accessories: ["green-medal-belt", "bottom-cape"],
};

/*----------------------------Outfits----------------------------------*/

const outfits = {
  noOutfit: {
    outfitHTML: `
    <img src="assets/base.png" class="layer0 doll-layer">
    <img src="assets/tail/tails3.png" class="layer-5 doll-layer">
    <img src="assets/stand.png" width="450" class="doll-stand" id="doll-stand">
    <img src="assets/hair/long.png" class="layer-6 doll-layer" id="long-hair">
    <img src="assets/under/leaf.png" class="layer1 doll-layer" id="leaf-under">
    `,
    outfitObj: {
      hair: "long-hair",
      under: "leaf-under",
      outer: "",
      inner: "",
      pants: "",
      shoes: "",
      accessories: [],
    },
  },
  advisorOutfit: {
    outfitHTML: `<img src="assets/base.png" class="layer0 doll-layer">
    <img src="assets/tail/tails3.png" class="layer-5 doll-layer">
    <img src="assets/stand.png" width="450" class="doll-stand" id="doll-stand">
    <img src="assets/under/leaf.png" class="layer1 doll-layer" id="leaf-under">
    <img src="assets/hair/ponytail.png" class="layer-2 doll-layer" id="ponytail">
    <img src="assets/inner/plain_a.png" class="layer5 doll-layer" id="plain-inner">
    <img src="assets/inner/plain_b.png" class="layer-1 doll-layer" id="plain-inner-b">
    <img src="assets/outer/autumn.png" class="layer7 doll-layer" id="autumn-outer">
    <img src="assets/pants/plain.png" class="layer2 doll-layer" id="plain-pants">
    <img src="assets/shoes/advisor_boots.png" class="layer3 doll-layer" id="advisor-boots">
    <img src="assets/belt/green_medal_belt.png" class="layer10 doll-layer" id="green-medal-belt">
    <img src="assets/cape/fur_cape.png" height="700" class="layer8 doll-layer" id="fur-cape">
    <img src="assets/cape/bottom_cape_a.png" class="layer6 doll-layer" id="bottom-cape">
    <img src="assets/cape/bottom_cape_b.png" class="layer-3 doll-layer" id="bottom-cape-b">
    <img src="assets/armour/light.png" class="layer9 doll-layer" id="light-armour">
    <img src="assets/neck/collar.png" class="layer4 doll-layer" id="brown-collar">
    <img src="assets/weapon/sword.png" class="layer11 doll-layer" id="cinnabar-sword">`,
    outfitObj: {
      hair: "ponytail",
      under: "plain-under",
      outer: "autumn-outer",
      inner: "plain-inner",
      pants: "plain-pants",
      shoes: "advisor-boots",
      accessories: ["green-medal-belt", "bottom-cape", "cinnabar-sword", "brown-collar", "fur-cape", "light-armour" ],
    },
  },
};

