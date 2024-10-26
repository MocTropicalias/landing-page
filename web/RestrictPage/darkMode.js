// Inicializa o modo verificando no localStorage
function verifyMode() {
    // Verifica o valor de "darkMode" no localStorage, assumindo false se for null
    let darkMode = localStorage.getItem("darkMode") === "true";
    
    // Aplica o tema inicial baseado no valor de `darkMode`
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

// Troca o modo na tela e salva no localStorage
function changeMode() {
    document.getElementById("darkMode").addEventListener("click", () => {
        const container = document.getElementsByClassName("container")[0];
        let darkMode = localStorage.getItem("darkMode") === "true";

        // Alterna o tema
        container.classList.toggle("bgDarkMode");
        container.classList.toggle("bgLightMode");

        darkMode = !darkMode; // Inverte o modo

        // Atualiza o ícone com base no novo estado
        if (darkMode) {
            document.getElementById("darkMode").src = "../assets/lightMode.svg";
        } else {
            document.getElementById("darkMode").src = "../assets/darkMode.svg";
        }

        // Salva o estado atualizado no localStorage
        localStorage.setItem("darkMode", darkMode.toString());
    });
}

// Inicializa o modo ao carregar a página e ativa o listener
let darkMode = verifyMode();
changeMode();
