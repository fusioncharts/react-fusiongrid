import React from "react";
import { ReactFusionGrid } from "react-fusiongrid";
import FusionGrid from "fusiongrid";
import BasicExample from "./BasicExample";
import ConfigExample from "./ConfigExample";
import EventExample from "./EventExample";
import "fusiongrid/dist/fusiongrid.css";

ReactFusionGrid.fgRoot(FusionGrid);

function App() {
  return (
    <div>
      <h1>Basic Example</h1>
      <BasicExample />
      <h1>Config Example</h1>
      <ConfigExample />
      <h1>Event Example (Try header click or row click)</h1>
      <EventExample />
    </div>
  );
}

export default App;
