const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const errorText = document.getElementById("errorText");
const cubes = document.querySelectorAll(".cube");

function verifyAuth(email, password) {
    if (!emailRegex.test(email)) {
        errorText.textContent = "Usuário não encontrado!";
        errorText.classList.remove("invisible");

        setTimeout(() => {
            errorText.classList.add("invisible");
        }, 5000);

        return
    }

    if (password.length < 6) {
        errorText.textContent = "Senha incorreta!";
        errorText.classList.remove("invisible");

        setTimeout(() => {  
            errorText.classList.add("invisible");
        }, 5000);

        return
    }

    for (let i = 0; i < cubes.length; i++) {
        cubes[i].classList.remove("invisible");
    }

    fetch("https://tropicalias-api-dev.onrender.com/user/authorization/" + email + "/" + password)
    .then(response => {
        if (response.ok) {
            window.open("restrict-page.html", "_self");
        } else if (response.status === 401) {
            errorText.textContent = "Email ou senha inválidos!";
            errorText.classList.remove("invisible");
            
            for (let i = 0; i < cubes.length; i++) {
                cubes[i].classList.add("invisible");
            }

            setTimeout(() => {
                errorText.classList.add("invisible");
            }, 5000);

        } else if (response.status === 403) {
            errorText.textContent = "Usuário não autorizado!";
            errorText.classList.remove("invisible");

            for (let i = 0; i < cubes.length; i++) {
                cubes[i].classList.add("invisible");
            }

            setTimeout(() => {
                errorText.classList.add("invisible");
            }, 5000);

        } else if (response.status === 404) {
            errorText.textContent = "Usuário não encontrado!";
            errorText.classList.remove("invisible");

            for (let i = 0; i < cubes.length; i++) {
                cubes[i].classList.add("invisible");
            }

            setTimeout(() => {
                errorText.classList.add("invisible");
            }, 5000);

        } else if (response.status === 418) {
            errorText.textContent = "Você é muito especial!";
            errorText.classList.remove("invisible");
        } else if (response.status === 500) {
            alert("Ocorreu um erro interno do servidor! Tente novamente mais tarde!");

            for (let i = 0; i < cubes.length; i++) {
                cubes[i].classList.add("invisible");
            }

            setTimeout(() => {
                errorText.classList.add("invisible");
            }, 5000);
        }
    })
}

document.getElementById("btConnect").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;
    verifyAuth(email, password);
});