// Log a comment to the console
console.log("Hello from B2S!");
let viz;
// To do list:
// 1 - Find Viz URL
const url =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
// 2 - Find Viz container on the page
const vizContainer = document.getElementById("vizContainer");
// 3 - Create Viz options (sizing, filters etc)
const options = {
  device: "desktop",
  Region: "North",
  Category: ["Furniture", "Technology"],
  onFirstInteractive: function () {
    console.log("The viz has loaded and we are ready to analyse!");
    document.getElementById("showViz").disabled = false;
    document.getElementById("hideViz").disabled = false;
  },
};

function initViz() {
  viz = new tableau.Viz(vizContainer, url, options);
}

// on click of 'Hide Viz' button - hides Dashboard
const hideVizButton = document.getElementById("hideViz");
hideVizButton.addEventListener("click", function () {
  viz.hide();
  // Show the show button
  document.getElementById("showViz").style.display = "inline";

  // Hide the hide button
  document.getElementById("hideViz").style.display = "none";
});

// on click of 'Show Viz' button - shows Dashboard
const showVizButton = document.getElementById("showViz");
showVizButton.addEventListener("click", function () {
  viz.show();
  // Hide the show button
  document.getElementById("showViz").style.display = "none";

  // Show the hide button
  document.getElementById("hideViz").style.display = "inline";
});

const exportToPDF = document.getElementById("exportToPDF");
exportToPDF.addEventListener("click", function () {
  viz.showExportPDFDialog();
});

const exportToCrossTab = document.getElementById("exportToCrossTab");
exportToCrossTab.addEventListener("click", function () {
  viz.showExportCrossTabDialog();
});

const exportToPowerPoint = document.getElementById("exportToPowerPoint");
exportToPowerPoint.addEventListener("click", function () {
  viz.showExportPowerPointDialog();
});

const exportToExcel = document.getElementById("exportToExcel");
exportToExcel.addEventListener("click", function () {
  viz.exportCrossTabToExcel();
});

// Add event listener. Tells .js WHEN to run
document.addEventListener("DOMContentLoaded", initViz);
