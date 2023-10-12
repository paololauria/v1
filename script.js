const body = document.body;
const minBrightness = 0.8; // Fattore di luminosità minimo (1 = nessun cambio)

body.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const percentX = (mouseX / window.innerWidth) * 300;
    const percentY = (mouseY / window.innerHeight) * 300;

    const brightness = Math.max(
        minBrightness,
        1 - (minBrightness - 1) * (1 - (percentX / 100)),
        1 - (minBrightness - 1) * (1 - (percentY / 100))
    );

    body.style.filter = `brightness(${brightness})`;
});

body.addEventListener('mouseout', () => {
    body.style.filter = 'brightness(1)'; // Ripristina la luminosità normale quando il mouse esce dalla pagina
});

const sections = document.querySelectorAll('.section-2');
const navLinks = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Funzione per cambiare modalità
function toggleMode() {
    const body = document.body;

    // Verifica se la modalità chiara è attiva
    const isLightMode = body.classList.contains('light-mode');

    // Cambia la modalità in base allo stato attuale
    if (isLightMode) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}

// Aggiungi un gestore di eventi al pulsante
const modeToggleBtn = document.getElementById('mode-toggle');
modeToggleBtn.addEventListener('click', toggleMode);


const darkBtn = document.getElementById('darkBtn');

darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Cambia l'icona del pulsante in base alla modalità
    if (document.body.classList.contains('dark-mode')) {
        darkBtn.classList.remove('fa-toggle-off');
        darkBtn.classList.add('fa-toggle-on');
    } else {
        darkBtn.classList.remove('fa-toggle-on');
        darkBtn.classList.add('fa-toggle-off');
    }
});

// Seleziona tutti gli elementi h2 sulla pagina
var tuttiGliH2 = document.querySelectorAll("h2");

// Itera attraverso gli elementi h2 e aggiungi gli eventi di passaggio del mouse
tuttiGliH2.forEach(function(elemento) {
    // Aggiungi un gestore di eventi per il passaggio del mouse sopra l'elemento
    elemento.addEventListener("mouseover", function() {
        elemento.style.color = "orange"; // Cambia il colore in arancione quando ci passi sopra
    });

    // Aggiungi un gestore di eventi per il passaggio del mouse fuori dall'elemento
    elemento.addEventListener("mouseout", function() {
        elemento.style.color = ""; // Reimposta il colore quando il mouse esce dall'elemento
    });
});
