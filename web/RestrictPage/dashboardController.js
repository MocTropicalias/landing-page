const dashboardsUrl = ["https://app.powerbi.com/view?r=eyJrIjoiN2U1NTFmM2YtMTg3YS00OWMyLTgyNWEtN2QxNmIxZTYxNTIyIiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9", "https://app.powerbi.com/view?r=eyJrIjoiNTFlMWM2MTYtZjc1NC00NmVmLTk1OTktM2ZiYTUyNDI3ZWI3IiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9"];

const btAvancar = document.getElementById("btAvancar");
const btVoltar = document.getElementById("btVoltar");
const dashboards = document.getElementById("dashboards");

let currentDashboard = JSON.stringify(localStorage.getItem("currentDashboard")) === "null" ? 0 : parseInt(localStorage.getItem("currentDashboard"));

dashboards.src = dashboardsUrl[currentDashboard];

btAvancar.addEventListener("click", () => {
    currentDashboard = (currentDashboard + 1) % dashboardsUrl.length;
    dashboards.src = dashboardsUrl[currentDashboard];

    localStorage.setItem("currentDashboard", currentDashboard.toString());
})

btVoltar.addEventListener("click", () => {
    currentDashboard = (currentDashboard - 1 + dashboardsUrl.length) % dashboardsUrl.length;
    dashboards.src = dashboardsUrl[currentDashboard];

    localStorage.setItem("currentDashboard", currentDashboard.toString());
})