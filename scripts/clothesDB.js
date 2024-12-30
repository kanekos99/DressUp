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
    {
      id: "short-ponytail",
      name: "Short Ponytail",
      category: "HAIR",
      imgHtml: `<img src="assets/hair/short-ponytail.png" class="layer-2 doll-layer" id="short-ponytail"/>`,
      iconHtml: `<img src="assets/hair/icons/short-ponytail-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="short-ponytail" data-category="hair">`,
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
    {
      id: "white-under",
      name: "White Underwear",
      category: "UNDER",
      imgHtml: `<img src="assets/under/white-under.png" class="layer1 doll-layer" id="white-under"/>`,
      iconHtml: `<img src="assets/under/icons/white-under-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="white-under" data-category="under">`,
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
    {
      id: "dancer-inner",
      name: "Dancer Inner Vest",
      category: "INNER",
      imgHtml: `<img src="assets/inner/dancer-inner.png" class="layer5 doll-layer" id="dancer-inner"/>`,
      iconHtml: `<img src="assets/inner/icons/dancer-inner-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="dancer-inner" data-category="inner">`,
      layer: 5,
      related: [],
      dependent: [],
    },
    {
      id: "secretary-shirt",
      name: "Secretary Shirt",
      category: "INNER",
      imgHtml: `<img src="assets/inner/secretary-shirt.png" class="layer5 doll-layer" id="secretary-shirt"/>`,
      iconHtml: `<img src="assets/inner/icons/secretary-shirt-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="secretary-shirt" data-category="inner">`,
      layer: 5,
      related: [],
      dependent: [],
    },
    {
      id: "consort-inner",
      name: "Consort Inner Robe",
      category: "INNER",
      imgHtml: `<img src="assets/inner/consort-inner-a.png" class="layer5 doll-layer" id="consort-inner"/>`,
      iconHtml: `<img src="assets/inner/icons/consort-inner-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="consort-inner" data-category="inner">`,
      layer: 5,
      related: [],
      dependent: [],
      linkedItems: [
        {
          id: "consort-inner-b",
          imgHtml: `<img src="assets/inner/consort-inner-b.png" class="layer-1 doll-layer" id="consort-inner-b"/>`,
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
    {
      id: "autumn-casual-outer",
      name: "Autumn Outer Robe (Casual)",
      category: "OUTER",
      imgHtml: `<img src="assets/outer/autumn_casual.png" class="layer7 doll-layer" id="autumn-casual-outer"/>`,
      iconHtml: `<img src="assets/outer/icons/autumn_casual_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="autumn-casual-outer" data-category="outer">`,
      layer: 7,
      related: [],
      dependent: [],
    },
    {
      id: "dancer-outer",
      name: "Dancer Outer Vest",
      category: "OUTER",
      imgHtml: `<img src="assets/outer/dancer-outer.png" class="layer7 doll-layer" id="dancer-outer"/>`,
      iconHtml: `<img src="assets/outer/icons/dancer-outer-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="dancer-outer" data-category="outer">`,
      layer: 7,
      related: [],
      dependent: [],
    },
    {
      id: "consort-outer",
      name: "Consort Outer Vest",
      category: "OUTER",
      imgHtml: `<img src="assets/outer/consort-outer-a.png" class="layer7 doll-layer" id="consort-outer"/>`,
      iconHtml: `<img src="assets/outer/icons/consort-outer-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="consort-outer" data-category="outer">`,
      layer: 7,
      related: [],
      dependent: [],
      linkedItems: [
        {
          id: "consort-outer-b",
          imgHtml: `<img src="assets/outer/consort-outer-b.png" class="layer-1 doll-layer" id="consort-outer-b"/>`,
        },
      ],
    },
  ],
  pants: [
    {
      id: "plain-pants",
      name: "Plain White Pants",
      category: "PANTS",
      imgHtml: `<img src="assets/pants/plain.png" class="layer2 doll-layer" id="plain-pants"/>`,
      iconHtml: `<img src="assets/pants/icons/plain_icon.png" class="item-btn selected-item" onclick="toggleItem(this);" data-item="plain-pants" data-category="pants">`,
      layer: 2,
      related: [],
      dependent: [],
    },
    {
      id: "black-shorts",
      name: "Black Shorts",
      category: "PANTS",
      imgHtml: `<img src="assets/pants/black-shorts.png" class="layer2 doll-layer" id="black-shorts"/>`,
      iconHtml: `<img src="assets/pants/icons/black-shorts-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="black-shorts" data-category="pants">`,
      layer: 2,
      related: [],
      dependent: [],
    },
    {
      id: "dress-pants",
      name: "Dress Pants",
      category: "PANTS",
      imgHtml: `<img src="assets/pants/dress-pants.png" class="layer3 doll-layer" id="dress-pants"/>`,
      iconHtml: `<img src="assets/pants/icons/dress-pants-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="dress-pants" data-category="pants">`,
      layer: 3,
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
    {
      id: "dress-shoes",
      name: "Dress Shoes",
      category: "SHOES",
      imgHtml: `<img src="assets/shoes/dress-shoes.png" class="layer2 doll-layer" id="dress-shoes"/>`,
      iconHtml: `<img src="assets/shoes/icons/dress-shoes-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="dress-shoes" data-category="shoes">`,
      layer: 2,
      related: [],
      dependent: [],
    },
    {
      id: "leg-ribbon",
      name: "Leg Ribbon",
      category: "SHOES",
      imgHtml: `<img src="assets/shoes/leg_ribbon.png" class="layer2 doll-layer" id="leg-ribbon"/>`,
      iconHtml: `<img src="assets/shoes/icons/leg-ribbon-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="leg-ribbon" data-category="shoes">`,
      layer: 2,
      related: [],
      dependent: [],
    },
    {
      id: "sandals",
      name: "Sandals",
      category: "SHOES",
      imgHtml: `<img src="assets/shoes/sandals.png" class="layer2 doll-layer" id="sandals"/>`,
      iconHtml: `<img src="assets/shoes/icons/sandals-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="sandals" data-category="shoes">`,
      layer: 2,
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
      {
        id: "green-bow-belt",
        name: "Green Bow Belt",
        category: "ACCESSORIES",
        subcategory: "BELTS",
        imgHtml: `<img src="assets/belt/green_bow_belt.png" class="layer10 doll-layer" id="green-bow-belt"/>`,
        iconHtml: `<img src="assets/belt/icons/green_bow_belt_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="green-bow-belt" data-category="accessories" data-subcategory="belts">`,
        layer: 8,
        related: [],
        dependent: [],
      },
      {
        id: "dancer-belt",
        name: "Dancer Belt",
        category: "ACCESSORIES",
        subcategory: "BELTS",
        imgHtml: `<img src="assets/belt/dancer-belt.png" class="layer10 doll-layer" id="dancer-belt"/>`,
        iconHtml: `<img src="assets/belt/icons/dancer-belt-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="dancer-belt" data-category="accessories" data-subcategory="belts">`,
        layer: 8,
        related: [],
        dependent: [],
      },
      {
        id: "leather-belt",
        name: "Leather Belt",
        category: "ACCESSORIES",
        subcategory: "BELTS",
        imgHtml: `<img src="assets/belt/leather-belt.png" class="layer10 doll-layer" id="leather-belt"/>`,
        iconHtml: `<img src="assets/belt/icons/leather-belt-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="leather-belt" data-category="accessories" data-subcategory="belts">`,
        layer: 8,
        related: [],
        dependent: [],
      },
      {
        id: "gold-bow-belt",
        name: "Gold Bow Belt",
        category: "ACCESSORIES",
        subcategory: "BELTS",
        imgHtml: `<img src="assets/belt/gold-bow-belt.png" class="layer10 doll-layer" id="gold-bow-belt"/>`,
        iconHtml: `<img src="assets/belt/icons/gold-bow-belt-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="gold-bow-belt" data-category="accessories" data-subcategory="belts">`,
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
        imgHtml: `<img src="assets/cape/fur_cape.png" height="700" class="layer11 doll-layer" id="fur-cape"/>`,
        iconHtml: `<img src="assets/cape/icons/fur_cape_icon.png" class="item-btn" onclick="toggleItem(this);" data-item="fur-cape" data-category="accessories" data-subcategory="capes">`,
        layer: 11,
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
      {
        id: "chrys-ribbon",
        name: "Chrysanthemum Ribbon",
        category: "ACCESSORIES",
        subcategory: "CAPES",
        imgHtml: `<img src="assets/cape/chrys-ribbon.png" height="700" class="layer11 doll-layer" id="chrys-ribbon"/>`,
        iconHtml: `<img src="assets/cape/icons/chrys-ribbon-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="chrys-ribbon" data-category="accessories" data-subcategory="capes">`,
        layer: 11,
        related: [],
        dependent: [],
      },
      {
        id: "dancer-cape",
        name: "Dancer Cape",
        category: "ACCESSORIES",
        subcategory: "CAPES",
        imgHtml: `<img src="assets/cape/dancer-cape-a.png" class="layer12 doll-layer" id="dancer-cape"/>`,
        iconHtml: `<img src="assets/cape/icons/dancer-cape-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="dancer-cape" data-category="accessories" data-subcategory="capes">`,
        layer: 12,
        related: [],
        dependent: [],
        linkedItems: [
          {
            id: "dancer-cape-b",
            imgHtml: `<img src="assets/cape/dancer-cape-b.png" class="layer-4 doll-layer" id="dancer-cape-b"/>`,
          },
        ],
      },
      {
        id: "consort-cape",
        name: "Consort Cape",
        category: "ACCESSORIES",
        subcategory: "CAPES",
        imgHtml: `<img src="assets/cape/consort-cape.png" height="700" class="layer11 doll-layer" id="consort-cape"/>`,
        iconHtml: `<img src="assets/cape/icons/consort-cape-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="consort-cape" data-category="accessories" data-subcategory="capes">`,
        layer: 11,
        related: [],
        dependent: [],
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
        layer: 9,
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
        layer: 4,
        related: [],
        dependent: [],
      },
      {
        id: "neck-tassel",
        name: "Neck Tassel",
        category: "ACCESSORIES",
        subcategory: "NECK",
        imgHtml: `<img src="assets/neck/neck-tassel.png" class="layer10 doll-layer" id="neck-tassel"/>`,
        iconHtml: `<img src="assets/neck/icons/neck-tassel-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="neck-tassel" data-category="accessories" data-subcategory="neck">`,
        layer: 10,
        related: [],
        dependent: [],
      },
      {
        id: "secretary-ribbon",
        name: "Secretary Ribbon",
        category: "ACCESSORIES",
        subcategory: "NECK",
        imgHtml: `<img src="assets/neck/secretary-ribbon.png" class="layer10 doll-layer" id="secretary-ribbon"/>`,
        iconHtml: `<img src="assets/neck/icons/secretary-ribbon-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="secretary-ribbon" data-category="accessories" data-subcategory="neck">`,
        layer: 10,
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
    head: [
      {
        id: "flower-clip",
        name: "Flower Clip",
        category: "ACCESSORIES",
        subcategory: "HEAD",
        imgHtml: `<img src="assets/head/flower-clip.png" class="layer9 doll-layer" id="flower-clip"/>`,
        iconHtml: `<img src="assets/head/icons/flower-clip-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="flower-clip" data-category="accessories" data-subcategory="head">`,
        layer: 9,
        related: [],
        dependent: [],
      },
      {
        id: "simple-clip",
        name: "simple Clip",
        category: "ACCESSORIES",
        subcategory: "HEAD",
        imgHtml: `<img src="assets/head/simple-clip.png" class="layer9 doll-layer" id="simple-clip"/>`,
        iconHtml: `<img src="assets/head/icons/simple-clip-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="simple-clip" data-category="accessories" data-subcategory="head">`,
        layer: 9,
        related: [],
        dependent: [],
      },
      {
        id: "straw-hat",
        name: "Straw Hat",
        category: "ACCESSORIES",
        subcategory: "HEAD",
        imgHtml: `<img src="assets/head/straw-hat-a.png" class="layer9 doll-layer" id="straw-hat"/>`,
        iconHtml: `<img src="assets/head/icons/straw-hat-icon.png" class="item-btn" onclick="toggleItem(this);" data-item="straw-hat" data-category="accessories" data-subcategory="head">`,
        layer: 9,
        related: [],
        dependent: [],
        linkedItems: [
          {
            id: "straw-hat-b",
            imgHtml: `<img src="assets/head/straw-hat-b.png" class="layer-7 doll-layer" id="straw-hat-b"/>`,
          },
        ],
      },
    ],
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

let isMakeUpShowing = true;
let currentTailType = "";

/*----------------------------Outfits----------------------------------*/

const outfits = {
  noOutfit: {
    outfitHTML: `
    <img src="assets/base.png" class="layer0 doll-layer" id="base-doll">
    <img src="assets/tail/tails3.png" class="layer-5 doll-layer" id="doll-tails">
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
    outfitHTML: `<img src="assets/base.png" class="layer0 doll-layer" id="base-doll">
    <img src="assets/tail/tails3.png" class="layer-5 doll-layer" id="doll-tails">
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
      accessories: [
        "green-medal-belt",
        "bottom-cape",
        "cinnabar-sword",
        "brown-collar",
        "fur-cape",
        "light-armour",
      ],
    },
  },
  casualOutfit: {
    outfitHTML: `<img src="assets/base.png" class="layer0 doll-layer" id="base-doll">
    <img src="assets/under/plain.png" class="layer1 doll-layer" id="plain-under">
    <img src="assets/hair/ponytail.png" class="layer-2 doll-layer" id="ponytail">
    <img src="assets/tail/tails3.png" class="layer-5 doll-layer" id="doll-tails">
    <img src="assets/inner/plain_a.png" class="layer5 doll-layer" id="plain-inner">
    <img src="assets/inner/plain_b.png" class="layer-1 doll-layer" id="plain-inner-b">
    <img src="assets/pants/plain.png" class="layer2 doll-layer" id="plain-pants">
    <img src="assets/shoes/advisor_boots.png" class="layer3 doll-layer" id="advisor-boots">  
    <img src="assets/cape/bottom_cape_a.png" class="layer6 doll-layer" id="bottom-cape">
    <img src="assets/cape/bottom_cape_b.png" class="layer-3 doll-layer" id="bottom-cape-b">
    <img src="assets/stand.png" width="450" class="doll-stand" id="doll-stand">
    <img src="assets/belt/green_bow_belt.png" class="layer10 doll-layer" id="green-bow-belt">
    <img src="assets/outer/autumn_casual.png" class="layer7 doll-layer" id="autumn-casual-outer">`,
    outfitObj: {
      hair: "ponytail",
      under: "plain-under",
      outer: "autumn-casual-outer",
      inner: "plain-inner",
      pants: "plain-pants",
      shoes: "advisor-boots",
      accessories: ["green-bow-belt", "bottom-cape"],
    },
  },
  secretaryOutfit: {
    outfitHTML: `<img src="assets/base.png" class="layer0 doll-layer" id="base-doll">
    <img src="assets/tail/tails1.png" class="layer-5 doll-layer" id="doll-tails">
    <img src="assets/stand.png" width="450" class="doll-stand" id="doll-stand">
    <img src="assets/under/plain.png" class="layer1 doll-layer" id="plain-under">
    <img src="assets/hair/short-ponytail.png" class="layer-2 doll-layer" id="short-ponytail">
    <img src="assets/pants/dress-pants.png" class="layer3 doll-layer" id="dress-pants">
    <img src="assets/shoes/dress-shoes.png" class="layer2 doll-layer" id="dress-shoes">
    <img src="assets/inner/secretary-shirt.png" class="layer5 doll-layer" id="secretary-shirt">
    <img src="assets/head/simple-clip.png" class="layer9 doll-layer" id="simple-clip">
    <img src="assets/neck/secretary-ribbon.png" class="layer10 doll-layer" id="secretary-ribbon">
    <img src="assets/belt/leather-belt.png" class="layer10 doll-layer" id="leather-belt">
    `,
    outfitObj: {
      hair: "short-ponytail",
      under: "plain-under",
      outer: "",
      inner: "secretary-shirt",
      pants: "dress-pants",
      shoes: "dress-shoes",
      accessories: ["simple-clip", "secretary-ribbon", "leather-belt"],
    },
  },
  dancerOutfit: {
    outfitHTML: `<img src="assets/base.png" class="layer0 doll-layer" id="base-doll">
    <img src="assets/tail/tails3.png" class="layer-5 doll-layer" id="doll-tails">
    <img src="assets/stand.png" width="450" class="doll-stand" id="doll-stand">
    <img src="assets/hair/long.png" class="layer-6 doll-layer" id="long-hair">
    <img src="assets/under/white-under.png" class="layer1 doll-layer" id="white-under">
    <img src="assets/inner/dancer-inner.png" class="layer5 doll-layer" id="dancer-inner">
    <img src="assets/outer/dancer-outer.png" class="layer7 doll-layer" id="dancer-outer">
    <img src="assets/pants/black-shorts.png" class="layer2 doll-layer" id="black-shorts">
    <img src="assets/cape/dancer-cape-a.png" class="layer12 doll-layer" id="dancer-cape">
    <img src="assets/cape/dancer-cape-b.png" class="layer-4 doll-layer" id="dancer-cape-b">
    <img src="assets/cape/chrys-ribbon.png" height="700" class="layer11 doll-layer" id="chrys-ribbon">
    <img src="assets/belt/dancer-belt.png" class="layer10 doll-layer" id="dancer-belt">
    <img src="assets/neck/collar.png" class="layer4 doll-layer" id="brown-collar">
    <img src="assets/neck/neck-tassel.png" class="layer10 doll-layer" id="neck-tassel">
    <img src="assets/shoes/leg_ribbon.png" class="layer2 doll-layer" id="leg-ribbon">
    <img src="assets/head/flower-clip.png" class="layer9 doll-layer" id="flower-clip">`,
    outfitObj: {
      hair: "long-hair",
      under: "white-under",
      outer: "dancer-outer",
      inner: "dancer-inner",
      pants: "black-shorts",
      shoes: "leg-ribbon",
      accessories: [
        "dancer-cape",
        "chrys-ribbon",
        "dancer-belt",
        "brown-collar",
        "neck-tassel",
        "flower-clip",
      ],
    },
  },
  consortOutfit: {
    outfitHTML: `<img src="assets/base.png" class="layer0 doll-layer" id="base-doll">
    <img src="assets/tail/tails3.png" class="layer-5 doll-layer" id="doll-tails">
    <img src="assets/stand.png" width="450" class="doll-stand" id="doll-stand">
    <img src="assets/hair/long.png" class="layer-6 doll-layer" id="long-hair">
    <img src="assets/under/plain.png" class="layer1 doll-layer" id="plain-under">
    <img src="assets/inner/consort-inner-a.png" class="layer5 doll-layer" id="consort-inner">
    <img src="assets/inner/consort-inner-b.png" class="layer-1 doll-layer" id="consort-inner-b">
    <img src="assets/outer/consort-outer-a.png" class="layer7 doll-layer" id="consort-outer">
    <img src="assets/outer/consort-outer-b.png" class="layer-1 doll-layer" id="consort-outer-b">
    <img src="assets/shoes/sandals.png" class="layer2 doll-layer" id="sandals">
    <img src="assets/belt/gold-bow-belt.png" class="layer10 doll-layer" id="gold-bow-belt">
    <img src="assets/cape/consort-cape.png" height="700" class="layer11 doll-layer" id="consort-cape">
    <img src="assets/head/straw-hat-a.png" class="layer9 doll-layer" id="straw-hat">
    <img src="assets/head/straw-hat-b.png" class="layer-7 doll-layer" id="straw-hat-b">`,
    outfitObj: {
      hair: "long-hair",
      under: "white-under",
      outer: "consort-outer",
      inner: "consort-inner",
      pants: "",
      shoes: "sandals",
      accessories: ["consort-cape", "straw-hat"],
    },
  },
};
