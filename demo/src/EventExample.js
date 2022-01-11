import { ReactFusionGrid } from "react-fusiongrid";
import FusionGrid from "fusiongrid";

const schema = [
  {
    name: "Rank",
    type: "number",
  },
  {
    name: "Model",
  },
  {
    name: "Make",
  },
  {
    name: "Units Sold",
    type: "number",
  },
  {
    name: "Assembly Location",
  },
];
const data = [
  [1, "F-Series", "Ford", 896526, "Claycomo, Mo."],
  [2, "Pickup", "Ram", 633694, "Warren, Mich."],
  [3, "Silverado", "Chevrolet", 575600, "Springfield, Ohio"],
  [4, "RAV4", "Toyota", 448071, "Georgetown, Ky."],
  [5, "CR-V", "Honda", 384168, "Greensburg, Ind."],
  [6, "Rogue", "Nissan", 350447, "Smyrna, Tenn."],
  [7, "Equinox", "Chevrolet", 346048, "Arlington, Tex."],
  [8, "Camry", "Toyota", 336978, "Georgetown, Ky."],
  [9, "Civic", "Honda", 325650, "Greensburg, Ind."],
  [10, "Corolla", "Toyota", 304850, "Blue Springs, Miss."],
  [11, "Accord", "Honda", 267567, "Marysville, Ohio"],
  [12, "Tacoma", "Toyota", 248801, "San Antonio, Tex."],
  [13, "Grand Cherokee", "Jeep", 242969, "Detroit, Mich."],
  [14, "Escape", "Ford", 241338, "Louisville, Ky."],
  [15, "Highlander", "Toyota", 239438, "Princeton, Ind."],
  [16, "Sierra", "GMC", 232325, "Flint, Mich."],
  [17, "Wrangler", "Jeep", 228032, "Toledo, Ohio"],
  [18, "Altima", "Nissan", 209183, "Smyrna, Tenn."],
  [19, "Cherokee", "Jeep", 191397, "Belvidere, Ill."],
  [20, "Sentra", "Nissan", 184618, "Canton, Miss."],
];

const dataStore = new FusionGrid.DataStore();
const dataTable = dataStore.createDataTable(data, schema, {
  enableIndex: false,
});

function EventExample() {
  return (
    <ReactFusionGrid
      data={dataTable}
      height={400}
      width={600}
      fgEvent-headerClicked={() => {
        alert("headerClicked");
      }}
      fgEvent-rowClicked={() => {
        alert("rowClicked");
      }}
    />
  );
}

export default EventExample;
