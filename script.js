// Datos de productos
const productos = [
    { nombre: '1997', talle: 'Oversize (unico)', galeria: './buzos/galeria/1997_celeste.jpg', zoom: './buzos/zoom/1997_celeste.jpg' },
    { nombre: '1997', talle: 'Oversize (unico)', galeria: './buzos/galeria/1997_negro.jpg', zoom: './buzos/zoom/1997_negro.jpg' },
    { nombre: 'angel', talle: 'Oversize (unico)', galeria: './buzos/galeria/angel_bordo.jpg', zoom: './buzos/zoom/angel_bordo.jpg' },
    { nombre: 'angel', talle: 'Oversize (unico)', galeria: './buzos/galeria/angel_negro.jpg', zoom: './buzos/zoom/angel_negro.jpg' },
    { nombre: 'angle', talle: 'Oversize (unico)', galeria: './buzos/galeria/angle_crema.jpg', zoom: './buzos/zoom/angle_crema.jpg' },
    { nombre: 'basic', talle: 'Oversize (unico)', galeria: './buzos/galeria/basic_bordo.jpg', zoom: './buzos/zoom/basic_bordo.jpg' },
    { nombre: 'basic', talle: 'Oversize (unico)', galeria: './buzos/galeria/basic_crema.jpg', zoom: './buzos/zoom/basic_crema.jpg' },
    { nombre: 'beauty', talle: 'Oversize (unico)', galeria: './buzos/galeria/beauty_marron oscuro.jpg', zoom: './buzos/zoom/beauty_marron oscuro.jpg' },
    { nombre: 'beauty', talle: 'Oversize (unico)', galeria: './buzos/galeria/beauty_marron.jpg', zoom: './buzos/zoom/beauty_marron.jpg' },
    { nombre: 'beauty', talle: 'Oversize (unico)', galeria: './buzos/galeria/beauty_negro.jpg', zoom: './buzos/zoom/beauty_negro.jpg' },
    { nombre: 'better', talle: 'Oversize (unico)', galeria: './buzos/galeria/better_marron.jpg', zoom: './buzos/zoom/better_marron.jpg' },
    { nombre: 'blue', talle: 'Oversize (unico)', galeria: './buzos/galeria/blue_blanco.jpg', zoom: './buzos/zoom/blue_blanco.jpg' },
    { nombre: 'born again', talle: 'Oversize (unico)', galeria: './buzos/galeria/born again_gris.jpg', zoom: './buzos/zoom/born again_gris.jpg' },
    { nombre: 'bowknot', talle: 'Oversize (unico)', galeria: './buzos/galeria/bowknot_marron.jpg', zoom: './buzos/zoom/bowknot_marron.jpg' },
    { nombre: 'cherry lips', talle: 'Oversize (unico)', galeria: './buzos/galeria/cherry lips_beish.jpg', zoom: './buzos/zoom/cherry lips_beish.jpg' },
    { nombre: 'cherry lips', talle: 'Oversize (unico)', galeria: './buzos/galeria/cherry lips_gris.jpg', zoom: './buzos/zoom/cherry lips_gris.jpg' },
    { nombre: 'cherry lips', talle: 'Oversize (unico)', galeria: './buzos/galeria/cherry lips_rojo marron.jpg', zoom: './buzos/zoom/cherry lips_rojo marron.jpg' },
    { nombre: 'cleveland', talle: 'Oversize (unico)', galeria: './buzos/galeria/cleveland_beish.jpg', zoom: './buzos/zoom/cleveland_beish.jpg' },
    { nombre: 'cleveland', talle: 'Oversize (unico)', galeria: './buzos/galeria/cleveland_crema.jpg', zoom: './buzos/zoom/cleveland_crema.jpg' },
    { nombre: 'cleveland', talle: 'Oversize (unico)', galeria: './buzos/galeria/cleveland_negro.jpg', zoom: './buzos/zoom/cleveland_negro.jpg' },
    { nombre: 'crasseia', talle: 'Oversize (unico)', galeria: './buzos/galeria/crasseia_azul.jpg', zoom: './buzos/zoom/crasseia_azul.jpg' },
    { nombre: 'crasseia', talle: 'Oversize (unico)', galeria: './buzos/galeria/crasseia_marron.jpg', zoom: './buzos/zoom/crasseia_marron.jpg' },
    { nombre: 'cruel love', talle: 'Oversize (unico)', galeria: './buzos/galeria/cruel love_blanco.jpg', zoom: './buzos/zoom/cruel love_blanco.jpg' },
    { nombre: 'cruel love', talle: 'Oversize (unico)', galeria: './buzos/galeria/cruel love_gris.jpg', zoom: './buzos/zoom/cruel love_gris.jpg' },
    { nombre: 'cruel love', talle: 'Oversize (unico)', galeria: './buzos/galeria/cruel love_marron.jpg', zoom: './buzos/zoom/cruel love_marron.jpg' },
    { nombre: 'cruel love', talle: 'Oversize (unico)', galeria: './buzos/galeria/cruel love_negro.jpg', zoom: './buzos/zoom/cruel love_negro.jpg' },
    { nombre: 'cruel love', talle: 'Oversize (unico)', galeria: './buzos/galeria/cruel love_rosa.jpg', zoom: './buzos/zoom/cruel love_rosa.jpg' },
    { nombre: 'cruel love', talle: 'Oversize (unico)', galeria: './buzos/galeria/cruel love_verde oscuro.jpg', zoom: './buzos/zoom/cruel love_verde oscuro.jpg' },
    { nombre: 'cruel love', talle: 'Oversize (unico)', galeria: './buzos/galeria/cruel love_verde.jpg', zoom: './buzos/zoom/cruel love_verde.jpg' },
    { nombre: 'cupid', talle: 'Oversize (unico)', galeria: './buzos/galeria/cupid_blanco.jpg', zoom: './buzos/zoom/cupid_blanco.jpg' },
    { nombre: 'destino', talle: 'Oversize (unico)', galeria: './buzos/galeria/destino_blanco.jpg', zoom: './buzos/zoom/destino_blanco.jpg' },
    { nombre: 'discover', talle: 'Oversize (unico)', galeria: './buzos/galeria/discover_negro.jpg', zoom: './buzos/zoom/discover_negro.jpg' },
    { nombre: 'discover', talle: 'Oversize (unico)', galeria: './buzos/galeria/discover_oscuro.jpg', zoom: './buzos/zoom/discover_oscuro.jpg' },
    { nombre: 'eme', talle: 'Oversize (unico)', galeria: './buzos/galeria/eme_blanco.jpg', zoom: './buzos/zoom/eme_blanco.jpg' },
    { nombre: 'graffiti bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/graffiti bear_gris.jpg', zoom: './buzos/zoom/graffiti bear_gris.jpg' },
    { nombre: 'graffiti bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/graffiti bear_marron.jpg', zoom: './buzos/zoom/graffiti bear_marron.jpg' },
    { nombre: 'habacuq', talle: 'Oversize (unico)', galeria: './buzos/galeria/habacuq_negro.jpg', zoom: './buzos/zoom/habacuq_negro.jpg' },
    { nombre: 'hat bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/hat bear_azul.jpg', zoom: './buzos/zoom/hat bear_azul.jpg' },
    { nombre: 'hat bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/hat bear_blanco.jpg', zoom: './buzos/zoom/hat bear_blanco.jpg' },
    { nombre: 'hat bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/hat bear_gris liso.jpg', zoom: './buzos/zoom/hat bear_gris liso.jpg' },
    { nombre: 'hat bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/hat bear_gris.jpg', zoom: './buzos/zoom/hat bear_gris.jpg' },
    { nombre: 'hat bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/hat bear_marron.jpg', zoom: './buzos/zoom/hat bear_marron.jpg' },
    { nombre: 'hat bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/hat bear_naranja.jpg', zoom: './buzos/zoom/hat bear_naranja.jpg' },
    { nombre: 'hat bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/hat bear_verde.jpg', zoom: './buzos/zoom/hat bear_verde.jpg' },
    { nombre: 'liso', talle: 'Oversize (unico)', galeria: './buzos/galeria/liso_marron.ing', zoom: './buzos/zoom/liso_marron.ing' },
    { nombre: 'liso', talle: 'Oversize (unico)', galeria: './buzos/galeria/liso_oscuro.jpg', zoom: './buzos/zoom/liso_oscuro.jpg' },
    { nombre: 'love to have', talle: 'Oversize (unico)', galeria: './buzos/galeria/love to have_marron.jpg', zoom: './buzos/zoom/love to have_marron.jpg' },
    { nombre: 'love to have', talle: 'Oversize (unico)', galeria: './buzos/galeria/love to have_negro.jpg', zoom: './buzos/zoom/love to have_negro.jpg' },
    { nombre: 'love to have', talle: 'Oversize (unico)', galeria: './buzos/galeria/love to have_oscuro.jpg', zoom: './buzos/zoom/love to have_oscuro.jpg' },
    { nombre: 'mack bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/mack bear_gris.jpg', zoom: './buzos/zoom/mack bear_gris.jpg' },
    { nombre: 'mack bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/mack bear_marron.jpg', zoom: './buzos/zoom/mack bear_marron.jpg' },
    { nombre: 'mack bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/mack bear_naranja.jpg', zoom: './buzos/zoom/mack bear_naranja.jpg' },
    { nombre: 'mars', talle: 'Oversize (unico)', galeria: './buzos/galeria/mars_bordo.jpg', zoom: './buzos/zoom/mars_bordo.jpg' },
    { nombre: 'mccan', talle: 'Oversize (unico)', galeria: './buzos/galeria/mccan_celeste.jpg', zoom: './buzos/zoom/mccan_celeste.jpg' },
    { nombre: 'mccan', talle: 'Oversize (unico)', galeria: './buzos/galeria/mccan_marron.jpg', zoom: './buzos/zoom/mccan_marron.jpg' },
    { nombre: 'mccan', talle: 'Oversize (unico)', galeria: './buzos/galeria/mccan_oscuro.jpg', zoom: './buzos/zoom/mccan_oscuro.jpg' },
    { nombre: 'mist', talle: 'Oversize (unico)', galeria: './buzos/galeria/mist_marron.jpg', zoom: './buzos/zoom/mist_marron.jpg' },
    { nombre: 'money', talle: 'Oversize (unico)', galeria: './buzos/galeria/money_blanco y gris.jpg', zoom: './buzos/zoom/money_blanco y gris.jpg' },
    { nombre: 'money', talle: 'Oversize (unico)', galeria: './buzos/galeria/money_marron.jpg', zoom: './buzos/zoom/money_marron.jpg' },
    { nombre: 'money', talle: 'Oversize (unico)', galeria: './buzos/galeria/money_negro.jpg', zoom: './buzos/zoom/money_negro.jpg' },
    { nombre: 'money', talle: 'Oversize (unico)', galeria: './buzos/galeria/money_rosa y blanco.jpg', zoom: './buzos/zoom/money_rosa y blanco.jpg' },
    { nombre: 'money', talle: 'Oversize (unico)', galeria: './buzos/galeria/money_rosa y gris.jpg', zoom: './buzos/zoom/money_rosa y gris.jpg' },
    { nombre: 'money', talle: 'Oversize (unico)', galeria: './buzos/galeria/money_rosa.jpg', zoom: './buzos/zoom/money_rosa.jpg' },
    { nombre: 'money', talle: 'Oversize (unico)', galeria: './buzos/galeria/money_verde.jpg', zoom: './buzos/zoom/money_verde.jpg' },
    { nombre: 'nasa', talle: 'Oversize (unico)', galeria: './buzos/galeria/nasa_marron.jpg', zoom: './buzos/zoom/nasa_marron.jpg' },
    { nombre: 'new fearture', talle: 'Oversize (unico)', galeria: './buzos/galeria/new fearture_blanco.jpg', zoom: './buzos/zoom/new fearture_blanco.jpg' },
    { nombre: 'new york bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/new york bear_gris liso.jpg', zoom: './buzos/zoom/new york bear_gris liso.jpg' },
    { nombre: 'new york bear', talle: 'Oversize (unico)', galeria: './buzos/galeria/new york bear_gris.jpg', zoom: './buzos/zoom/new york bear_gris.jpg' },
    { nombre: 'new york', talle: 'Oversize (unico)', galeria: './buzos/galeria/new york_marron.jpg', zoom: './buzos/zoom/new york_marron.jpg' },
    { nombre: 'new york', talle: 'Oversize (unico)', galeria: './buzos/galeria/new york_negro.jpg', zoom: './buzos/zoom/new york_negro.jpg' },
    { nombre: 'north face', talle: 'Oversize (unico)', galeria: './buzos/galeria/north face_naranja.jpg', zoom: './buzos/zoom/north face_naranja.jpg' },
    { nombre: 'not found', talle: 'Oversize (unico)', galeria: './buzos/galeria/not found_crema.jpg', zoom: './buzos/zoom/not found_crema.jpg' },
    { nombre: 'one way', talle: 'Oversize (unico)', galeria: './buzos/galeria/one way_negro.jpg', zoom: './buzos/zoom/one way_negro.jpg' },
    { nombre: 'oxford', talle: 'Oversize (unico)', galeria: './buzos/galeria/oxford_marron.jpg', zoom: './buzos/zoom/oxford_marron.jpg' },
    { nombre: 'oxford', talle: 'Oversize (unico)', galeria: './buzos/galeria/oxford_negro.jpg', zoom: './buzos/zoom/oxford_negro.jpg' },
    { nombre: 'palm angel', talle: 'Oversize (unico)', galeria: './buzos/galeria/palm angel_negro.jpg', zoom: './buzos/zoom/palm angel_negro.jpg' },
    { nombre: 'peace', talle: 'Oversize (unico)', galeria: './buzos/galeria/peace_negro.jpg', zoom: './buzos/zoom/peace_negro.jpg' },
    { nombre: 'preace', talle: 'Oversize (unico)', galeria: './buzos/galeria/preace_blanco y gris.jpg', zoom: './buzos/zoom/preace_blanco y gris.jpg' },
    { nombre: 'preace', talle: 'Oversize (unico)', galeria: './buzos/galeria/preace_crema.jpg', zoom: './buzos/zoom/preace_crema.jpg' },
    { nombre: 'preace', talle: 'Oversize (unico)', galeria: './buzos/galeria/preace_marron.jpg', zoom: './buzos/zoom/preace_marron.jpg' },
    { nombre: 'preace', talle: 'Oversize (unico)', galeria: './buzos/galeria/preace_negro y gris.jpg', zoom: './buzos/zoom/preace_negro y gris.jpg' },
    { nombre: 'preace', talle: 'Oversize (unico)', galeria: './buzos/galeria/preace_verde.jpg', zoom: './buzos/zoom/preace_verde.jpg' },
    { nombre: 'prologue', talle: 'Oversize (unico)', galeria: './buzos/galeria/prologue_blanco.jpg', zoom: './buzos/zoom/prologue_blanco.jpg' },
    { nombre: 'prologue', talle: 'Oversize (unico)', galeria: './buzos/galeria/prologue_crema.jpg', zoom: './buzos/zoom/prologue_crema.jpg' },
    { nombre: 'prologue', talle: 'Oversize (unico)', galeria: './buzos/galeria/prologue_negro.jpg', zoom: './buzos/zoom/prologue_negro.jpg' },
    { nombre: 'prologue', talle: 'Oversize (unico)', galeria: './buzos/galeria/prologue_verde oscuro.jpg', zoom: './buzos/zoom/prologue_verde oscuro.jpg' },
    { nombre: 'prologue', talle: 'Oversize (unico)', galeria: './buzos/galeria/prologue_verde.jpg', zoom: './buzos/zoom/prologue_verde.jpg' },
    { nombre: 'puas', talle: 'Oversize (unico)', galeria: './buzos/galeria/puas_negro.jpg', zoom: './buzos/zoom/puas_negro.jpg' },
    { nombre: 'rernember', talle: 'Oversize (unico)', galeria: './buzos/galeria/rernember_celeste.jpg', zoom: './buzos/zoom/rernember_celeste.jpg' },
    { nombre: 'savage', talle: 'Oversize (unico)', galeria: './buzos/galeria/savage_blanco.jpg', zoom: './buzos/zoom/savage_blanco.jpg' },
    { nombre: 'savage', talle: 'Oversize (unico)', galeria: './buzos/galeria/savage_negro.jpg', zoom: './buzos/zoom/savage_negro.jpg' },
    { nombre: 'shut up', talle: 'Oversize (unico)', galeria: './buzos/galeria/shut up_marron.jpg', zoom: './buzos/zoom/shut up_marron.jpg' },
    { nombre: 'somebody', talle: 'Oversize (unico)', galeria: './buzos/galeria/somebody_gris.jpg', zoom: './buzos/zoom/somebody_gris.jpg' },
    { nombre: 'tupac', talle: 'Oversize (unico)', galeria: './buzos/galeria/tupac_violeta.jpg', zoom: './buzos/zoom/tupac_violeta.jpg' },
    { nombre: 'united state', talle: 'Oversize (unico)', galeria: './buzos/galeria/united state_crema.jpg', zoom: './buzos/zoom/united state_crema.jpg' },
    { nombre: 'universe', talle: 'Oversize (unico)', galeria: './buzos/galeria/universe_azul.jpg', zoom: './buzos/zoom/universe_azul.jpg' },
    { nombre: 'universe', talle: 'Oversize (unico)', galeria: './buzos/galeria/universe_negro.jpg', zoom: './buzos/zoom/universe_negro.jpg' },
    { nombre: 'unusual', talle: 'Oversize (unico)', galeria: './buzos/galeria/unusual_amarillo.jpg', zoom: './buzos/zoom/unusual_amarillo.jpg' },
    { nombre: 'unusual', talle: 'Oversize (unico)', galeria: './buzos/galeria/unusual_bordo.jpg', zoom: './buzos/zoom/unusual_bordo.jpg' },
    { nombre: 'unusual', talle: 'Oversize (unico)', galeria: './buzos/galeria/unusual_marron.jpg', zoom: './buzos/zoom/unusual_marron.jpg' },
    { nombre: 'unusual', talle: 'Oversize (unico)', galeria: './buzos/galeria/unusual_negro.jpg', zoom: './buzos/zoom/unusual_negro.jpg' },
    { nombre: 'vetements', talle: 'Oversize (unico)', galeria: './buzos/galeria/vetements_marron.jpg', zoom: './buzos/zoom/vetements_marron.jpg' },
    { nombre: 'vetements', talle: 'Oversize (unico)', galeria: './buzos/galeria/vetements_blanco.jpg', zoom: './buzos/zoom/vetements_blanco.jpg' },
    { nombre: 'vetements', talle: 'Oversize (unico)', galeria: './buzos/galeria/vetements_gris.jpg', zoom: './buzos/zoom/vetements_gris.jpg' },
    { nombre: 'vetements', talle: 'Oversize (unico)', galeria: './buzos/galeria/vetements_oscuro.jpg', zoom: './buzos/zoom/vetements_oscuro.jpg' },
    { nombre: 'vops', talle: 'Oversize (unico)', galeria: './buzos/galeria/vops_marron.jpg', zoom: './buzos/zoom/vops_marron.jpg' },
    { nombre: 'vops', talle: 'Oversize (unico)', galeria: './buzos/galeria/vops_oscuro.jpg', zoom: './buzos/zoom/vops_oscuro.jpg' },
    { nombre: 'want', talle: 'Oversize (unico)', galeria: './buzos/galeria/want_naranja.jpg', zoom: './buzos/zoom/want_naranja.jpg' },
    { nombre: 'want', talle: 'Oversize (unico)', galeria: './buzos/galeria/want_negro.jpg', zoom: './buzos/zoom/want_negro.jpg' },
    { nombre: 'yesterday', talle: 'Oversize (unico)', galeria: './buzos/galeria/yesterday_marron.jpg', zoom: './buzos/zoom/yesterday_marron.jpg' },
];

const gallery = document.getElementById('gallery');
const zoomOverlay = document.getElementById('zoom-overlay');
const zoomImage = document.getElementById('zoom-image');
const sendBtn = document.getElementById('send-btn');

// Cargar productos
function cargarProductos() {
    gallery.innerHTML = '';
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    productos.forEach((producto, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const img = document.createElement('img');
        img.src = producto.galeria;
        img.alt = producto.nombre;

        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.dataset.index = index;

        // Restaurar estado de favoritos
        if (favoritos.includes(index)) {
            heart.classList.add('active');
        }

        heart.addEventListener('click', (e) => {
            heart.classList.toggle('active');
            actualizarFavoritos();
        });

        // Zoom de imagen
        let touchTimeout;
        img.addEventListener('touchstart', (e) => {
            console.log('TOUCH START');
            touchTimeout = setTimeout(() => {
                zoomImage.src = img.src;
                zoomOverlay.style.display = 'flex';
            }, 300);
        });

        img.addEventListener('touchend', () => {
            console.log('TOUCH END');
            clearTimeout(touchTimeout);
        });

        zoomOverlay.addEventListener('touchend', () => {
            zoomOverlay.style.display = 'none';
        });

        productDiv.appendChild(img);
        productDiv.appendChild(heart);
        gallery.appendChild(productDiv);
    });
}

// Actualizar favoritos
function actualizarFavoritos() {
    const hearts = document.querySelectorAll('.heart.active');
    const favoritos = Array.from(hearts).map(heart =>
        parseInt(heart.dataset.index)
    );

    localStorage.setItem('favoritos', JSON.stringify(favoritos));

    // Mostrar/ocultar botón de envío
    sendBtn.style.display = favoritos.length > 0 ? 'block' : 'none';
}

// Configurar botón de envío
sendBtn.addEventListener('click', () => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const productosSeleccionados = favoritos.map(index => productos[index]);

    // Aquí podrías enviar los productos seleccionados
    console.log('Productos seleccionados:', productosSeleccionados);
});

// Inicializar
cargarProductos();
actualizarFavoritos();