const dashboardsUrl = ["http://endless.horse/", "https://app.powerbi.com/groups/me/reports/bb34f5b7-11c1-4808-9b34-797ca757ab27?pbi_source=desktophttps://app.powerbi.com/links/WGpWaLyvKz?ctid=b148f14c-2397-402c-ab6a-1b4711177ac0&pbi_source=linkShare", "https://gohorse.com.br/extreme-go-horse-xgh/"];

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