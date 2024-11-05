document.addEventListener("DOMContentLoaded", () => {
    function verifyMode() {
        // Recupera o valor de 'darkMode' como booleano e aplica o modo
        const darkMode = localStorage.getItem("darkMode") === "true";
        applyMode(darkMode);
        return darkMode;
    }

    function applyMode(darkMode) {
        const container = document.querySelector(".container");
        const loader = document.getElementById("loader");
        const icon = document.getElementById("darkMode");

        if (container) {
            // Aplica a classe com base no estado de 'darkMode'
            container.classList.toggle("bgDarkMode", darkMode);
            container.classList.toggle("bgLightMode", !darkMode);
        }

        if (icon) {
            // Altera o ícone com base no modo
            icon.src = darkMode ? "../assets/darkMode.svg" : "../assets/lightMode.svg";
        }

        if (loader) {
            // Altera o estilo do loader conforme o modo
            loader.classList.toggle("darkLoaderContainer", darkMode);
            loader.classList.toggle("lightLoaderContainer", !darkMode);
        }
    }

    function changeMode() {
        const icon = document.getElementById("darkMode");
        if (icon) {
            // Adiciona o evento para troca de modo
            icon.addEventListener("click", () => {
                // Alterna o valor de 'darkMode' e armazena no localStorage
                const darkMode = !(localStorage.getItem("darkMode") === "true");
                applyMode(darkMode);
                localStorage.setItem("darkMode", darkMode.toString());
            });
        }
    }

    // Executa a verificação e aplica o modo inicial
    verifyMode();
    changeMode();
});
