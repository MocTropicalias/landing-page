function toggleLoaderMode(darkMode, loader) {
    if (loader !== null) {
        loader.classList.toggle("darkLoaderContainer", darkMode);
        loader.classList.toggle("lightLoaderContainer", !darkMode);
    }
}

function applyMode(darkMode) {
    const container = document.querySelector(".container");
    const loader = document.getElementById("loader");
    const icon = document.getElementById("darkMode");

    container.classList.toggle("bgDarkMode", darkMode);
    container.classList.toggle("bgLightMode", !darkMode);

    icon.src = darkMode ? "../assets/lightMode.svg" : "../assets/darkMode.svg";
    toggleLoaderMode(darkMode, loader);
}

function verifyMode() {
    const darkMode = localStorage.getItem("darkMode") === "true";
    applyMode(darkMode);
    return darkMode;
}

function changeMode() {
    document.getElementById("darkMode").addEventListener("click", () => {
        let darkMode = localStorage.getItem("darkMode") === "true";
        darkMode = !darkMode;
        
        applyMode(darkMode);
        localStorage.setItem("darkMode", darkMode.toString());
    });
}

const darkMode = verifyMode();
changeMode();
