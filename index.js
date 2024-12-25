function getProductGroup() {
  return [
    {
      key: "flower_assortment",
      label: "Cvetni asortiman",
    },
    {
      key: "succulents",
      label: "Sukulenti",
    },
    {
      key: "potted_flowers",
      label: "Saksijsko cvece",
    },
    {
      key: "seedlings",
      label: "Sadnice",
    },
    {
      key: "fruits_and_vegetables",
      label: "Voce i povrce",
    },
    {
      key: "herbal_pharmacy",
      label: "Biljna apoteka",
    },
    {
      key: "garden_decoration",
      label: "Bastenska dekoracija",
    },
    {
      key: "everything_for_plants",
      label: "Sve za biljke",
    },
  ];
}
function getSubGroup(groupName){
  console.log("test");
  let result = [];
  if (groupName != null){
    console.log(groupName);
    switch (groupName) {
      case "flower_assortment":
        result = ["Buketi","Cvece za secenje" ];
        break;
      case "succulents":
        result = ["Sobne socne biljke", "Vanjske socne biljke"];
        break;
      case 2:
        result = "Tuesday";
        break;
      case 3:
        result = "Wednesday";
        break;
      case 4:
        result = "Thursday";
        break;
      case 5:
        result = "Friday";
        break;
      case 6:
        day = "Saturday";
    }
    return result;
  }
}

module.exports = getProductGroup;
module.exports = getSubGroup;
