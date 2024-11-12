const inputIdade = document.getElementById("idade");
const inputGenero = document.getElementById("genero");
const inputRenda = document.getElementById("renda");
const inputEstado = document.getElementById("estado");
const inputEducacao = document.getElementById("educacao");
const inputEsportes = document.getElementById("pratica_esportes");
const inputEspacosPublicos = document.getElementById("espacos_publicos");
const inputEletronicos = document.getElementById("usa_eletronicos");
const btEnviar = document.getElementById("btEnviar");

btEnviar.addEventListener("click", () => {
    if (inputIdade.value > 0 && inputGenero.value && inputRenda.value && inputEstado.value && inputEducacao.value) {
        const data = {
            "genero": inputGenero.value,
            "idade": inputIdade.value,
            "renda": inputRenda.value,
            "estado": inputEstado.value,
            "eletronicos": inputEletronicos.checked ? 'v' : 'f',
            "educacao": inputEducacao.value,
            "esportes": inputEsportes.checked ? 'v' : 'f',
            "locais_publicos": inputEspacosPublicos.checked ? 'v' : 'f'
        };

        // Chama a função para enviar os dados
        console.log(data)
        sendData(data);
    } else {
        window.alert("Por favor, preencha todos os dados de forma válida!");
    }
});

// Função para enviar a requisição
async function sendData(data) {
    try {
        const response = await fetch('https://api-ia-inter-pys6.onrender.com/api/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const result = await response.json();
        alert("Resposta do servidor: " + result.result ? 'Cliente em potencial!' : 'Usuario comum');
        console.log(result.result ? 'Você é um possível usuário do app' : 'Você não é um possível usuário do app'); // Exibe o resultado no console

    } catch (error) {
        console.log('Erro:', error);
        alert("Erro ao se conectar ao servidor. Verifique a URL e sua conexão.");
    }
}
