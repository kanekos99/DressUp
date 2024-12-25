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
  } else {
    //check if accessory is currently being worn
    if (selectedOutfit.accessories.includes(itemId)) {
      const accessoryName = "#" + itemId;
      $(accessoryName).remove();
      const accessoryIndex = selectedOutfit.accessories.indexOf(itemId);
      selectedOutfit.accessories.splice(accessoryIndex, 1);

      //remove linked accessories
      removeLinkedItems(itemCategory, itemSubCategory, itemId)
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
