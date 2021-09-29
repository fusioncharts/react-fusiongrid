A simple and lightweight official React component for FusionGrid JavaScript grid library. `react-fusiongrid` enables you to add JavaScript grid in your React application or project without any hassle.

- Github Repo: [https://github.com/fusioncharts/react-fusiongrid](https://github.com/fusioncharts/react-fusiongrid)

## Getting Started

### Requirements

- **Node.js**, **NPM/Yarn** installed globally in your OS.
- **FusionGrid** and **React** installed in your project, as detailed below:

### Installation

There are multiple ways to install `react-fusiongrid` component.

**Direct Download**
All binaries are located on our [github repository](https://github.com/fusiongrid/react-fusiongrid-component).

**Install from NPM**

```
npm install react-fusiongrid
```

See [npm documentation](https://docs.npmjs.com/) to know more about npm usage.

**Install from Yarn**

```
yarn add react-fusiongrid
```

See [yarn documentation](https://yarnpkg.com/en/docs) to know more about yarn usage.

### Usage

#### If you have created your app using `create-react-app`

Import React, `react-fusiongrid` and FusionGrid in your app:

```
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactFusionGrid } from "react-fusiongrid";
import FusionGrid from "@fusioncharts/fusiongrid";

ReactFusionGrid.fgRoot(FusionGrid);
```

## Quick Start

Here is a basic sample that shows how to create a grid using `react-fusiongrid`:

````javascript
import React from 'react';
import ReactDOM from 'react-dom';
import FusionGrid, { DataStore } from 'fusiongrid';
import ReactFusionGrid from 'react-fusiongrid';

React.fgRoot(FusionGrid);

const schema = [
  {
      name: 'Rank',
      type: 'number',
  }, {
      name: 'Model'
  },
  {
      name: 'Make'
  },
  {
      name: 'Units Sold',
      type: 'number'
  },
  {
      name: 'Assembly Location'
  }
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

const gridConfig = {
  layout: { density: "compact", autoHeight: true },
  rowOptions: {
    style: { "background-color": "oldlace" },
    hover: {
      enable: true,
      style: { "background-color": "white" },
    },
  }
};

const dataStore = new DataStore();
const dataTable = dataStore.createDataTable(data, schema, {
enableIndex: false
});

ReactDOM.render(<ReactFusionGrid width={400} height={400} data={dataTable} config={gridConfig} />, document.getElementById('root'));


## Working with Events

To attach event callbacks to a FusionGrid component, follow the pattern below.

Write the callback:

As a separate function:

```javascript
var gridEventCallback  = function (eventObj, dataObj) {
  [Code goes here]
}
````

Or, as a component class method:

```javascript
gridEventCallback (eventObj, dataObj) {
  [Code goes here]
}
```

Attach the callback to an event through the React-FG component:

```javascript
<ReactFC
  width={width}
  height={height}
  data={data}
  fgEvent-EVENTNAME={this.chartEventCallback}
/>
```

Where, EVENTNAME is to be replaced by the event you want to track.
