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
            "Qual é o seu gênero?": inputGenero.value,
            "Qual é a sua idade?": inputIdade.value,
            "Qual é a média da sua renda familiar mensal?": inputRenda.value,
            "Qual estado você mora?": inputEstado.value,
            "Você usa muitos eletrônicos durante o dia? (6h ou mais)": inputEletronicos.checked,
            "Qual grau de educação você tem?": inputEducacao.value,
            "Você pratica esportes? (pelo menos 3 vezes na semana)": inputEsportes.checked,
            "Você frequenta muitos espaços públicos? (parques, museus, etc)": inputEspacosPublicos.checked
        };

        // Chama a função para enviar os dados
        sendData(data);
    } else {
        window.alert("Por favor, preencha todos os dados de forma válida!");
    }
});

// Função para enviar a requisição
async function sendData(data) {
    try {
        const response = await fetch('http://api-ia-inter-pys6.onrender.com/api/process', {
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
        alert("Resposta do servidor: " + JSON.stringify(result));
        console.log(result); // Exibe o resultado no console

    } catch (error) {
        console.log('Erro:', error);
        alert("Erro ao se conectar ao servidor. Verifique a URL e sua conexão.");
    }
}
