document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.banner, .sobre, .info');
    
    // Aplicar classe inicial de animação
    cards.forEach(card => card.classList.add('hidden'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Opcional: parar de observar após animar
                // observer.unobserve(entry.target); 
            } else {
                // Remove se quiser que a animação aconteça toda vez que subir/descer
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1, // Dispara quando 10% do card está visível
        rootMargin: "0px 0px -50px 0px" // Trigger um pouco antes de chegar ao centro
    });

    cards.forEach(card => observer.observe(card));
});