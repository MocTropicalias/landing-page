function verifyMode() {
    let darkMode = localStorage.getItem("darkMode") === "true";
    
    const container = document.getElementsByClassName("container")[0];
    const icon = document.getElementById("darkMode");

    if (darkMode) {
        container.classList.add("bgDarkMode");
        icon.src = "../assets/lightMode.svg";
    } else {
        container.classList.add("bgLightMode");
        icon.src = "../assets/darkMode.svg";
    }

    return darkMode;
}

function changeMode() {
    document.getElementById("darkMode").addEventListener("click", () => {
        const container = document.getElementsByClassName("container")[0];
        let darkMode = localStorage.getItem("darkMode") === "true";

        container.classList.toggle("bgDarkMode");
        container.classList.toggle("bgLightMode");

        darkMode = !darkMode;

        if (darkMode) {
            document.getElementById("darkMode").src = "../assets/lightMode.svg";
        } else {
            document.getElementById("darkMode").src = "../assets/darkMode.svg";
        }

        localStorage.setItem("darkMode", darkMode.toString());
    });
}

let darkMode = verifyMode();
changeMode();
