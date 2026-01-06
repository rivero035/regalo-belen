// TUS 36 DIAPOSITIVAS
const slidesData = [
    // 1. Texto moviéndose
    { type: 'marquee', bg: '#000', text: 'WRAPPED DE LA MEJOR PAREJA DEL MUNDO ❤️' },
    
    // 2. Frase inicial
    { type: 'text', bg: '#C4151C', title: 'Belensita...', text: 'Antes de nada, muchas gracias por todo. Siempre serás el mejor regalo de Reyes.' },
    
    // 3. Minutos juntos
    { type: 'custom-stat', bg: '#000', big: '113.657', sub: 'Minutos juntos', small: 'Hemos estado juntitos 113.657 minutos. Eso son 79 días completos. ¿Qué pesados no?' },
    
    // 4. Definir gusto
    { type: 'text', bg: '#4B1E5E', title: 'Difícil de definir', text: 'Un gusto como el tuyo no es fácil de definir, aún así, lo voy a intentar.' },
    
    // 5. Lista de Bares
    { type: 'list', bg: '#E6B124', title: 'Tus Bares Favoritos 🍻', items: ['No sé', 'Me da igual', 'Lo que quieras', 'Elige tú', 'Qué pesado, que me da igual'] },
    
    // 6. 15 Millones de bares
    { type: 'stat', bg: '#1DB954', number: '15 Millones', text: 'De bares visitados desde que empezamos.' },
    
    // 7-11: Fotos bloque 1
    { type: 'img', bg: '#222', src: 'foto1.jpg' },
    { type: 'img', bg: '#222', src: 'foto2.jpg' },
    { type: 'img', bg: '#222', src: 'foto3.jpg' },
    { type: 'img', bg: '#222', src: 'foto4.jpg' },
    { type: 'img', bg: '#222', src: 'foto5.jpg' },
    { type: 'img', bg: '#222', src: 'foto28.jpg' },
    { type: 'img', bg: '#222', src: 'foto29.jpg' },
    { type: 'img', bg: '#222', src: 'foto30.jpg' },
    { type: 'img', bg: '#222', src: 'foto31.jpg' },
    
    // 12. Frase quietecita
    { type: 'text', bg: '#FF5722', title: 'Terremoto', text: 'Quien te conoce sabe que no te puedes quedar quietecita, y como yo contigo voy al fin del mundo...' },
    
    // 13-23: Fotos bloque 2 (11 fotos)
    { type: 'img', bg: '#111', src: 'foto6.jpg' },
    { type: 'img', bg: '#111', src: 'foto7.jpg' },
    { type: 'img', bg: '#111', src: 'foto8.jpg' },
    { type: 'img', bg: '#111', src: 'foto9.jpg' },
    { type: 'img', bg: '#111', src: 'foto10.jpg' },
    { type: 'img', bg: '#111', src: 'foto11.jpg' },
    { type: 'img', bg: '#111', src: 'foto12.jpg' },
    { type: 'img', bg: '#111', src: 'foto13.jpg' },
    { type: 'img', bg: '#111', src: 'foto14.jpg' },
    { type: 'img', bg: '#111', src: 'foto15.jpg' },
    { type: 'img', bg: '#111', src: 'foto16.jpg' },
    { type: 'img', bg: '#111', src: 'foto32.jpg' },
    { type: 'img', bg: '#111', src: 'foto33.jpg' },
    { type: 'img', bg: '#111', src: 'foto34.jpg' },
    { type: 'img', bg: '#111', src: 'foto35.jpg' },
    { type: 'img', bg: '#111', src: 'foto36.jpg' },

    // 24. Frase afortunado
    { type: 'text', bg: '#3F51B5', title: 'Gracias', text: 'Muchas gracias Belencita, no te imaginas lo afortunado que me siento por ser parte de tu vida.' },

    // 25-35: Fotos bloque 3 (11 fotos)
    { type: 'img', bg: '#000', src: 'foto17.jpg' },
    { type: 'img', bg: '#000', src: 'foto18.jpg' },
    { type: 'img', bg: '#000', src: 'foto19.jpg' },
    { type: 'img', bg: '#000', src: 'foto20.jpg' },
    { type: 'img', bg: '#000', src: 'foto21.jpg' },
    { type: 'img', bg: '#000', src: 'foto22.jpg' },
    { type: 'img', bg: '#000', src: 'foto23.jpg' },
    { type: 'img', bg: '#000', src: 'foto24.jpg' },
    { type: 'img', bg: '#000', src: 'foto25.jpg' },
    { type: 'img', bg: '#000', src: 'foto26.jpg' },
    { type: 'img', bg: '#000', src: 'foto27.jpg' },
    { type: 'img', bg: '#000', src: 'foto37.jpg' },
    { type: 'img', bg: '#000', src: 'foto38.jpg' },
    { type: 'img', bg: '#000', src: 'foto39.jpg' },
    { type: 'img', bg: '#000', src: 'foto40.jpg' },
    { type: 'img', bg: '#000', src: 'foto41.jpg' },
    { type: 'img', bg: '#000', src: 'foto42.jpg' },
    { type: 'img', bg: '#000', src: 'foto43.jpg' },
    { type: 'img', bg: '#000', src: 'foto44.jpg' },
    { type: 'img', bg: '#000', src: 'foto45.jpg' },
    { type: 'img', bg: '#000', src: 'foto47.jpg' },
    { type: 'img', bg: '#000', src: 'foto48.jpg' },


    // 36. Final
    { type: 'text', bg: '#D4AF37', title: 'GRACIAS REYES MAGOS', text: 'Por traerme este regalo ❤️' }
];

// --- LÓGICA NO TOCAR ---
let currentIndex = 0;
let timer;
const container = document.getElementById('slide-container');
const progressContainer = document.getElementById('progress-bar-container');

function startApp() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    document.getElementById('audio').play().catch(e=>console.log(e));
    initSlides();
}

function initSlides() {
    // Crear barras
    slidesData.forEach((_, i) => {
        progressContainer.innerHTML += `<div class="bar"><div class="fill" id="fill-${i}"></div></div>`;
    });
    renderSlide(0);
}

function renderSlide(index) {
    if(index >= slidesData.length || index < 0) return;
    
    const data = slidesData[index];
    let html = '';

    // Generar HTML según el tipo que pediste
    if(data.type === 'marquee') {
        html = `<div class="marquee-container"><div class="marquee-text">${data.text} &nbsp; &nbsp; ${data.text}</div></div>`;
    } else if (data.type === 'text') {
        html = `<h1>${data.title}</h1><p>${data.text}</p>`;
    } else if (data.type === 'custom-stat') {
        html = `<div class="big-number">${data.big}</div><h3>${data.sub}</h3><p class="tiny-text">${data.small}</p>`;
    } else if (data.type === 'list') {
        let itemsHtml = data.items.map((it, i) => `<li><span>${i+1}.</span> ${it}</li>`).join('');
        html = `<h1>${data.title}</h1><ul class="bar-list">${itemsHtml}</ul>`;
    } else if (data.type === 'stat') {
        html = `<div class="big-number">${data.number}</div><p>${data.text}</p>`;
    } else if (data.type === 'img') {
        html = `<div class="photo-frame"><img src="${data.src}"></div>`;
    }

    container.innerHTML = `<div class="slide active" style="background:${data.bg}">${html}</div>`;
    
    // Actualizar barras
    slidesData.forEach((_, i) => {
        const fill = document.getElementById(`fill-${i}`);
        if(i < index) fill.style.width = '100%';
        else if(i === index) {
            fill.style.width = '0%';
            setTimeout(() => {
                fill.style.width = '100%';
                fill.style.transition = 'width 8s linear';
            }, 50);
        } else {
            fill.style.width = '0%';
            fill.style.transition = 'none';
        }
    });

    currentIndex = index;
    clearTimeout(timer);
    timer = setTimeout(nextSlide, 8000); // 4 segundos por diapositiva
}

function nextSlide() { if(currentIndex < slidesData.length - 1) renderSlide(currentIndex + 1); }
function prevSlide() { if(currentIndex > 0) renderSlide(currentIndex - 1); }
