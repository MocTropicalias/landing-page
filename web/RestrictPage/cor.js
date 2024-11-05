const darkModeToggle = document.getElementById("darkMode");
const container = document.querySelector(".container");
const input = document.querySelector("input");

darkModeToggle.addEventListener("click", () => {
    container.classList.toggle("bgDarkMode");
    container.classList.toggle("bgLightMode");

    if (container.classList.contains("bgDarkMode")) {
        input.classList.add("inputDarkMode");
    } else {
        input.classList.remove("inputDarkMode");
    }
});
    