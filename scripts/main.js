var dollBox = $("#doll-box");

const app = {
  init: function () {
    loadItemIcons("hair");
    loadItemIcons("under");
    loadItemIcons("inner");
    loadItemIcons("outer");
    loadItemIcons("pants");
    loadItemIcons("shoes");
    loadAccessoryIcons("belts");
    loadAccessoryIcons("capes");
    loadAccessoryIcons("armour");
    loadAccessoryIcons("neck");
    loadAccessoryIcons("weapons");
    loadAccessoryIcons("head");
  },
};

app.init();

function loadItemIcons(category) {
  const itemTabName = "#" + category + "-tab";
  const itemTab = $(itemTabName);
  const items = clothes[category];
  items.forEach((item) => {
    itemTab.append(item.iconHtml);
  });
}

function loadAccessoryIcons(subcategory) {
  const accessoryPanelName = "#" + subcategory + "-panel-body";
  const accessoryPanel = $(accessoryPanelName);
  const items = clothes.accessories[subcategory];
  items.forEach((item) => {
    accessoryPanel.append(item.iconHtml);
  });
}

function toggleItem(selectedItem) {
  const itemCategory = selectedItem.dataset.category;
  const itemId = selectedItem.dataset.item;
  const itemSubCategory = selectedItem.dataset.subcategory;

  //remove existing outfit - except for accessories
  if (itemCategory != "accessories") {
    //toggle button
    const CategoryBtnSelector = "[data-category='" + itemCategory + "']";
    const allCategoryItems = document.querySelectorAll(CategoryBtnSelector);
    allCategoryItems.forEach((item) => {
      item.classList.remove("selected-item");
    });

    if (selectedOutfit[itemCategory] == itemId && itemCategory == "under") {
      playDenyAudio();
    } else {
      playEquipAudio();
    }

    if (selectedOutfit[itemCategory] == itemId && itemCategory != "under") {
      removeExisting(itemCategory, itemSubCategory, itemId);
    } else {
      selectedItem.classList.toggle("selected-item");
      removeExisting(itemCategory, itemSubCategory, itemId);
      const items = clothes[itemCategory];
      items.filter((item) => {
        if (item.id == itemId) {
          dollBox.append(item.imgHtml);
          selectedOutfit[itemCategory] = itemId;

          //add linked items
          addLinkedItems(item);
        }
      });
    }
  } else {
    //toggle button
    selectedItem.classList.toggle("selected-item");

    //play audio
    playEquipAudio();

    //check if accessory is currently being worn
    if (selectedOutfit.accessories.includes(itemId)) {
      const accessoryName = "#" + itemId;
      $(accessoryName).remove();
      const accessoryIndex = selectedOutfit.accessories.indexOf(itemId);
      selectedOutfit.accessories.splice(accessoryIndex, 1);

      //remove linked accessories
      removeLinkedItems(itemCategory, itemSubCategory, itemId);
    } else {
      const items = clothes.accessories[itemSubCategory];
      items.filter((item) => {
        if (item.id == itemId) {
          dollBox.append(item.imgHtml);
          selectedOutfit.accessories.push(itemId);

          //add linked accessories
          addLinkedItems(item);
        }
      });
    }
  }
}

function addLinkedItems(item) {
  if (item.linkedItems) {
    item.linkedItems.forEach((linkedItem) => {
      dollBox.append(linkedItem.imgHtml);
    });
  }
}

function removeExisting(category, subcategory, itemId) {
  if (selectedOutfit[category]) {
    const existingItemName = "#" + selectedOutfit[category];
    $(existingItemName).remove();

    //remove linked items
    removeLinkedItems(category, subcategory, itemId);

    selectedOutfit[category] = "";
  }
}

function removeLinkedItems(category, subcategory, itemId) {
  let linkedItems = [];
  let itemsArray = [];
  let selectedItemId = "";
  if (category != "accessories") {
    itemsArray = clothes[category];
    selectedItemId = selectedOutfit[category];
  } else {
    itemsArray = clothes.accessories[subcategory];
    selectedItemId = itemId;
  }
  itemsArray.filter((item) => {
    if (item.id == selectedItemId) {
      linkedItems = item.linkedItems;
    }
  });
  if (linkedItems) {
    linkedItems.forEach((item) => {
      const linkedItemName = "#" + item.id;
      $(linkedItemName).remove();
    });
  }
}

function ChangeOutfit(newOutfit) {
  playEquipAudio();

  const outfitId = newOutfit.dataset.item;
  dollBox[0].innerHTML = outfits[outfitId].outfitHTML;
  selectedOutfit = { ...outfits[outfitId].outfitObj };

  const outfitItemList = getOutfitItemList(newOutfit);

  //deselect all items
  const allItemButtons = document.querySelectorAll(".item-btn");
  allItemButtons.forEach((button) => {
    button.classList.remove("selected-item");
  });

  //select items in outfit item list
  outfitItemList.forEach((itemName) => {
    const itemBtnSelector = "[data-item='" + itemName + "']";
    const selectedItemBtn = document.querySelectorAll(itemBtnSelector)[0];
    selectedItemBtn.classList.add("selected-item");
  });

  showMakeUp(isMakeUpShowing);
}

function getOutfitItemList(newOutfit) {
  let outfitItemList = [];
  const outfitId = newOutfit.dataset.item;

  const oufitItemListUnfiltered = [
    outfits[outfitId].outfitObj.hair,
    outfits[outfitId].outfitObj.under,
    outfits[outfitId].outfitObj.outer,
    outfits[outfitId].outfitObj.inner,
    outfits[outfitId].outfitObj.pants,
    outfits[outfitId].outfitObj.shoes,
  ];

  oufitItemListUnfiltered.forEach((item) => {
    if (item != "") {
      outfitItemList.push(item);
    }
  });

  if (outfits[outfitId].outfitObj.accessories.length > 0) {
    outfitItemList = outfitItemList.concat(
      outfits[outfitId].outfitObj.accessories
    );
  }

  return outfitItemList;
}

function showMakeUp(checked) {
  if (checked) {
    isMakeUpShowing = true;
    $("#base-doll").attr("src", "assets/base.png");
  } else {
    isMakeUpShowing = false;
    $("#base-doll").attr("src", "assets/base_no_makeup.png");
  }
}

/*------------------audio related----------------------*/

const equipAudio = document.getElementById("equip-audio");
const denyAudio = document.getElementById("deny-audio");
const tabSwitchAudio = document.getElementById("tab-switch-audio");
const bgmAudio = document.getElementById("bg-music");

function playEquipAudio() {
  //play sound effect
  equipAudio.volume = 0.5;
  equipAudio.play();
}

function playDenyAudio() {
  //play sound effect
  denyAudio.volume = 0.5;
  denyAudio.play();
}

function SwitchTabAudio() {
  //play sound effect
  tabSwitchAudio.volume = 0.5;
  tabSwitchAudio.play();
}

function muteAudio(checkbox) {
  if (checkbox.checked) {
    equipAudio.muted = true;
    denyAudio.muted = true;
    tabSwitchAudio.muted = true;
    bgmAudio.muted = true;
  } else {
    equipAudio.muted = false;
    denyAudio.muted = false;
    tabSwitchAudio.muted = false;
    bgmAudio.muted = false;
  }
}

function playBGM(checkbox) {
  if (checkbox.checked) {
    bgmAudio.play();
  } else {
    bgmAudio.pause();
  }
}

function setTails(selectedTailType) {
  switch (selectedTailType) {
    case "tails3":
      $("#doll-tails").attr("src", "assets/tail/tails3.png");
      currentTailType = "tails3";
      break;
    case "tails1":
      $("#doll-tails").attr("src", "assets/tail/tails1.png");
      currentTailType = "tails1";
      break;
    case "tails9":
      $("#doll-tails").attr("src", "assets/tail/tails9.png");
      currentTailType = "tails9";
      break;
    default:
      $("#doll-tails").attr("src", "assets/tail/tails3.png");
      currentTailType = "tails3";
  }
}
