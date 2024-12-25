function loadItemIcons(category) {
  const itemTabName = "#" + category + "-tab";
  const itemTab = $(itemTabName);
  const items = clothes[category];
  items.forEach((item) => {
    itemTab.append(item.iconHtml);
  });
}

function toggleItem(selectedItem) {
  const itemCategory = selectedItem.dataset.category;
  const itemId = selectedItem.dataset.item;

  //remove existing outfit - except for accessories
  if (itemCategory != "accessories") {
    removeExisting(itemCategory);
  }

  console.log(clothes[itemCategory]);
  const items = clothes[itemCategory];
  items.filter((item) => {
    if (item.id == itemId) {
      console.log("appending" + itemId);
      dollBox.append(item.imgHtml);
      selectedOutfit[itemCategory] = itemId;
    }
  });

  console.log(selectedOutfit);
}

function removeExisting(category) {
  if (selectedOutfit[category]) {
    console.log("removing existing");
    const existingItemName = "#" + selectedOutfit[category];
    $(existingItemName).remove();
    selectedOutfit[category] = "";
  }
}

function init() {
  loadItemIcons("hair");
  loadItemIcons("under");
}

$(document).ready(function () {
  const dollBox = $("#doll-box");

  init();
});
