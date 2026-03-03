document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.banner, .sobre, .info');
    const navButtons = document.querySelectorAll('header button');

    // 1. Mapeamento dos botões para as seções (Baseado na ordem do seu HTML)
    const sections = [
        document.querySelector('.banner'), // Inicio
        document.querySelector('.sobre'),  // Sobre (o primeiro card)
        document.querySelector('.info'),   // Habilidades
        document.querySelectorAll('.sobre')[1] // Contato (o último card)
    ];

    navButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (sections[index]) {
                sections[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center' // Garante que o card fique centralizado na tela
                });
            }
        });
    });

    // 2. Observer para animação de entrada (Fade In)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.classList.add('hidden');
        observer.observe(card);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.banner, .sobre, .info').forEach(el => observer.observe(el));
});