import React from "react";
import ReactDOM from "react-dom";
import InspectionDataComponent from "./components/InspectionData/InspectionData";

const appContainer = document.getElementById("inspection-data")
if(appContainer) {
    ReactDOM.render(<InspectionDataComponent />, appContainer);
}
