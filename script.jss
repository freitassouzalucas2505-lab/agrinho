// script.js
const topics = [
    {
        title: "História dos Drones",
        desc: "Desde o uso militar até a revolução na agricultura moderna.",
        link: "pagina-historia.html"
    },
    {
        title: "O que são Drones Agrícolas",
        desc: "Equipamentos, sensores e tecnologias que estão mudando o campo.",
        link: "pagina-o-que-sao.html"
    },
    {
        title: "Agricultura de Precisão",
        desc: "Como os drones otimizam o uso de recursos e aumentam a produtividade.",
        link: "pagina-precisao.html"
    },
    {
        title: "Tipos e Tecnologias",
        desc: "Drones de monitoramento, pulverização, mapeamento e sensores avançados.",
        link: "pagina-tipos.html"
    },
    {
        title: "Principais Usos",
        desc: "Monitoramento, pulverização, controle de pragas e muito mais.",
        link: "pagina-usos.html"
    },
    {
        title: "Vantagens e Sustentabilidade",
        desc: "Economia, segurança e preservação ambiental.",
        link: "pagina-vantagens.html"
    }
];

function createTopicCards() {
    const grid = document.getElementById('topics-grid');
    grid.innerHTML = '';
    
    topics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <h3>${topic.title}</h3>
            <p>${topic.desc}</p>
            <button onclick="window.open('${topic.link}', '_blank')" class="btn-detail">Ler mais →</button>
        `;
        grid.appendChild(card);
    });
}

// Mobile menu
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');
    
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Scroll fade-in effect
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.topic-card, .intro-grid, .brasil-section > .container, .futuro-content').forEach(el => {
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        observer.observe(el);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    createTopicCards();
    initMobileMenu();
    initScrollAnimations();
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
