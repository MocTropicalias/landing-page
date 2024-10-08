// Zoom imagem Inicial
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.imagem-fundo');
    const scrollY = window.scrollY;
    const zoomFactor = 100 + scrollY / 75;
    heroSection.style.backgroundSize = `${zoomFactor}%`;
});
// Aparecer elementos
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.aparecer-lento');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
            if (inViewport) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    // Adiciona a verificação na carga inicial da página
    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
});
// Contatos
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.contatos-foto');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
            if (inViewport) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible'); 
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
});



let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Evitar que o prompt de instalação apareça automaticamente
    e.preventDefault();
    deferredPrompt = e;

    const installButton = document.getElementById('install-button');
    installButton.style.display = 'block'; // Mostrar o botão de instalação

    installButton.addEventListener('click', () => {
        installButton.style.display = 'none'; // Esconder o botão após o clique
        deferredPrompt.prompt(); // Exibir o prompt de instalação

        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou a instalação.');
            } else {
                console.log('Usuário rejeitou a instalação.');
            }
            deferredPrompt = null;
        });
    });
});
