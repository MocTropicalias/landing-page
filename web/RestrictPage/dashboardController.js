const dashboardsUrl = ["http://endless.horse/", "https://randomcolour.com/"];

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