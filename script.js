// Datos de productos
const products = [
    { name: '1997', size: 'Oversize (unico)', catalog: './buzos/galeria/1997_celeste.jpg', zoom: './buzos/zoom/1997_celeste.jpg' },
    { name: '1997', size: 'Oversize (unico)', catalog: './buzos/galeria/1997_negro.jpg', zoom: './buzos/zoom/1997_negro.jpg' },
    { name: 'angel', size: 'Oversize (unico)', catalog: './buzos/galeria/angel_bordo.jpg', zoom: './buzos/zoom/angel_bordo.jpg' },
    { name: 'angel', size: 'Oversize (unico)', catalog: './buzos/galeria/angel_negro.jpg', zoom: './buzos/zoom/angel_negro.jpg' },
    { name: 'angle', size: 'Oversize (unico)', catalog: './buzos/galeria/angle_crema.jpg', zoom: './buzos/zoom/angle_crema.jpg' },
    { name: 'basic', size: 'Oversize (unico)', catalog: './buzos/galeria/basic_bordo.jpg', zoom: './buzos/zoom/basic_bordo.jpg' },
    { name: 'basic', size: 'Oversize (unico)', catalog: './buzos/galeria/basic_crema.jpg', zoom: './buzos/zoom/basic_crema.jpg' },
    { name: 'beauty', size: 'Oversize (unico)', catalog: './buzos/galeria/beauty_marron oscuro.jpg', zoom: './buzos/zoom/beauty_marron oscuro.jpg' },
    { name: 'beauty', size: 'Oversize (unico)', catalog: './buzos/galeria/beauty_marron.jpg', zoom: './buzos/zoom/beauty_marron.jpg' },
    { name: 'beauty', size: 'Oversize (unico)', catalog: './buzos/galeria/beauty_negro.jpg', zoom: './buzos/zoom/beauty_negro.jpg' },
    { name: 'better', size: 'Oversize (unico)', catalog: './buzos/galeria/better_marron.jpg', zoom: './buzos/zoom/better_marron.jpg' },
    { name: 'blue', size: 'Oversize (unico)', catalog: './buzos/galeria/blue_blanco.jpg', zoom: './buzos/zoom/blue_blanco.jpg' },
    { name: 'born again', size: 'Oversize (unico)', catalog: './buzos/galeria/born again_gris.jpg', zoom: './buzos/zoom/born again_gris.jpg' },
    { name: 'bowknot', size: 'Oversize (unico)', catalog: './buzos/galeria/bowknot_marron.jpg', zoom: './buzos/zoom/bowknot_marron.jpg' },
    { name: 'cherry lips', size: 'Oversize (unico)', catalog: './buzos/galeria/cherry lips_beish.jpg', zoom: './buzos/zoom/cherry lips_beish.jpg' },
    { name: 'cherry lips', size: 'Oversize (unico)', catalog: './buzos/galeria/cherry lips_gris.jpg', zoom: './buzos/zoom/cherry lips_gris.jpg' },
    { name: 'cherry lips', size: 'Oversize (unico)', catalog: './buzos/galeria/cherry lips_rojo marron.jpg', zoom: './buzos/zoom/cherry lips_rojo marron.jpg' },
    { name: 'cleveland', size: 'Oversize (unico)', catalog: './buzos/galeria/cleveland_beish.jpg', zoom: './buzos/zoom/cleveland_beish.jpg' },
    { name: 'cleveland', size: 'Oversize (unico)', catalog: './buzos/galeria/cleveland_crema.jpg', zoom: './buzos/zoom/cleveland_crema.jpg' },
    { name: 'cleveland', size: 'Oversize (unico)', catalog: './buzos/galeria/cleveland_negro.jpg', zoom: './buzos/zoom/cleveland_negro.jpg' },
    { name: 'crasseia', size: 'Oversize (unico)', catalog: './buzos/galeria/crasseia_azul.jpg', zoom: './buzos/zoom/crasseia_azul.jpg' },
    { name: 'crasseia', size: 'Oversize (unico)', catalog: './buzos/galeria/crasseia_marron.jpg', zoom: './buzos/zoom/crasseia_marron.jpg' },
    { name: 'cruel love', size: 'Oversize (unico)', catalog: './buzos/galeria/cruel love_blanco.jpg', zoom: './buzos/zoom/cruel love_blanco.jpg' },
    { name: 'cruel love', size: 'Oversize (unico)', catalog: './buzos/galeria/cruel love_gris.jpg', zoom: './buzos/zoom/cruel love_gris.jpg' },
    { name: 'cruel love', size: 'Oversize (unico)', catalog: './buzos/galeria/cruel love_marron.jpg', zoom: './buzos/zoom/cruel love_marron.jpg' },
    { name: 'cruel love', size: 'Oversize (unico)', catalog: './buzos/galeria/cruel love_negro.jpg', zoom: './buzos/zoom/cruel love_negro.jpg' },
    { name: 'cruel love', size: 'Oversize (unico)', catalog: './buzos/galeria/cruel love_rosa.jpg', zoom: './buzos/zoom/cruel love_rosa.jpg' },
    { name: 'cruel love', size: 'Oversize (unico)', catalog: './buzos/galeria/cruel love_verde oscuro.jpg', zoom: './buzos/zoom/cruel love_verde oscuro.jpg' },
    { name: 'cruel love', size: 'Oversize (unico)', catalog: './buzos/galeria/cruel love_verde.jpg', zoom: './buzos/zoom/cruel love_verde.jpg' },
    { name: 'cupid', size: 'Oversize (unico)', catalog: './buzos/galeria/cupid_blanco.jpg', zoom: './buzos/zoom/cupid_blanco.jpg' },
    { name: 'destino', size: 'Oversize (unico)', catalog: './buzos/galeria/destino_blanco.jpg', zoom: './buzos/zoom/destino_blanco.jpg' },
    { name: 'discover', size: 'Oversize (unico)', catalog: './buzos/galeria/discover_negro.jpg', zoom: './buzos/zoom/discover_negro.jpg' },
    { name: 'discover', size: 'Oversize (unico)', catalog: './buzos/galeria/discover_oscuro.jpg', zoom: './buzos/zoom/discover_oscuro.jpg' },
    { name: 'eme', size: 'Oversize (unico)', catalog: './buzos/galeria/eme_blanco.jpg', zoom: './buzos/zoom/eme_blanco.jpg' },
    { name: 'graffiti bear', size: 'Oversize (unico)', catalog: './buzos/galeria/graffiti bear_gris.jpg', zoom: './buzos/zoom/graffiti bear_gris.jpg' },
    { name: 'graffiti bear', size: 'Oversize (unico)', catalog: './buzos/galeria/graffiti bear_marron.jpg', zoom: './buzos/zoom/graffiti bear_marron.jpg' },
    { name: 'habacuq', size: 'Oversize (unico)', catalog: './buzos/galeria/habacuq_negro.jpg', zoom: './buzos/zoom/habacuq_negro.jpg' },
    { name: 'hat bear', size: 'Oversize (unico)', catalog: './buzos/galeria/hat bear_azul.jpg', zoom: './buzos/zoom/hat bear_azul.jpg' },
    { name: 'hat bear', size: 'Oversize (unico)', catalog: './buzos/galeria/hat bear_blanco.jpg', zoom: './buzos/zoom/hat bear_blanco.jpg' },
    { name: 'hat bear', size: 'Oversize (unico)', catalog: './buzos/galeria/hat bear_gris liso.jpg', zoom: './buzos/zoom/hat bear_gris liso.jpg' },
    { name: 'hat bear', size: 'Oversize (unico)', catalog: './buzos/galeria/hat bear_gris.jpg', zoom: './buzos/zoom/hat bear_gris.jpg' },
    { name: 'hat bear', size: 'Oversize (unico)', catalog: './buzos/galeria/hat bear_marron.jpg', zoom: './buzos/zoom/hat bear_marron.jpg' },
    { name: 'hat bear', size: 'Oversize (unico)', catalog: './buzos/galeria/hat bear_naranja.jpg', zoom: './buzos/zoom/hat bear_naranja.jpg' },
    { name: 'hat bear', size: 'Oversize (unico)', catalog: './buzos/galeria/hat bear_verde.jpg', zoom: './buzos/zoom/hat bear_verde.jpg' },
    { name: 'liso', size: 'Oversize (unico)', catalog: './buzos/galeria/liso_marron.ing', zoom: './buzos/zoom/liso_marron.ing' },
    { name: 'liso', size: 'Oversize (unico)', catalog: './buzos/galeria/liso_oscuro.jpg', zoom: './buzos/zoom/liso_oscuro.jpg' },
    { name: 'love to have', size: 'Oversize (unico)', catalog: './buzos/galeria/love to have_marron.jpg', zoom: './buzos/zoom/love to have_marron.jpg' },
    { name: 'love to have', size: 'Oversize (unico)', catalog: './buzos/galeria/love to have_negro.jpg', zoom: './buzos/zoom/love to have_negro.jpg' },
    { name: 'love to have', size: 'Oversize (unico)', catalog: './buzos/galeria/love to have_oscuro.jpg', zoom: './buzos/zoom/love to have_oscuro.jpg' },
    { name: 'mack bear', size: 'Oversize (unico)', catalog: './buzos/galeria/mack bear_gris.jpg', zoom: './buzos/zoom/mack bear_gris.jpg' },
    { name: 'mack bear', size: 'Oversize (unico)', catalog: './buzos/galeria/mack bear_marron.jpg', zoom: './buzos/zoom/mack bear_marron.jpg' },
    { name: 'mack bear', size: 'Oversize (unico)', catalog: './buzos/galeria/mack bear_naranja.jpg', zoom: './buzos/zoom/mack bear_naranja.jpg' },
    { name: 'mars', size: 'Oversize (unico)', catalog: './buzos/galeria/mars_bordo.jpg', zoom: './buzos/zoom/mars_bordo.jpg' },
    { name: 'mccan', size: 'Oversize (unico)', catalog: './buzos/galeria/mccan_celeste.jpg', zoom: './buzos/zoom/mccan_celeste.jpg' },
    { name: 'mccan', size: 'Oversize (unico)', catalog: './buzos/galeria/mccan_marron.jpg', zoom: './buzos/zoom/mccan_marron.jpg' },
    { name: 'mccan', size: 'Oversize (unico)', catalog: './buzos/galeria/mccan_oscuro.jpg', zoom: './buzos/zoom/mccan_oscuro.jpg' },
    { name: 'mist', size: 'Oversize (unico)', catalog: './buzos/galeria/mist_marron.jpg', zoom: './buzos/zoom/mist_marron.jpg' },
    { name: 'money', size: 'Oversize (unico)', catalog: './buzos/galeria/money_blanco y gris.jpg', zoom: './buzos/zoom/money_blanco y gris.jpg' },
    { name: 'money', size: 'Oversize (unico)', catalog: './buzos/galeria/money_marron.jpg', zoom: './buzos/zoom/money_marron.jpg' },
    { name: 'money', size: 'Oversize (unico)', catalog: './buzos/galeria/money_negro.jpg', zoom: './buzos/zoom/money_negro.jpg' },
    { name: 'money', size: 'Oversize (unico)', catalog: './buzos/galeria/money_rosa y blanco.jpg', zoom: './buzos/zoom/money_rosa y blanco.jpg' },
    { name: 'money', size: 'Oversize (unico)', catalog: './buzos/galeria/money_rosa y gris.jpg', zoom: './buzos/zoom/money_rosa y gris.jpg' },
    { name: 'money', size: 'Oversize (unico)', catalog: './buzos/galeria/money_rosa.jpg', zoom: './buzos/zoom/money_rosa.jpg' },
    { name: 'money', size: 'Oversize (unico)', catalog: './buzos/galeria/money_verde.jpg', zoom: './buzos/zoom/money_verde.jpg' },
    { name: 'nasa', size: 'Oversize (unico)', catalog: './buzos/galeria/nasa_marron.jpg', zoom: './buzos/zoom/nasa_marron.jpg' },
    { name: 'new fearture', size: 'Oversize (unico)', catalog: './buzos/galeria/new fearture_blanco.jpg', zoom: './buzos/zoom/new fearture_blanco.jpg' },
    { name: 'new york bear', size: 'Oversize (unico)', catalog: './buzos/galeria/new york bear_gris liso.jpg', zoom: './buzos/zoom/new york bear_gris liso.jpg' },
    { name: 'new york bear', size: 'Oversize (unico)', catalog: './buzos/galeria/new york bear_gris.jpg', zoom: './buzos/zoom/new york bear_gris.jpg' },
    { name: 'new york', size: 'Oversize (unico)', catalog: './buzos/galeria/new york_marron.jpg', zoom: './buzos/zoom/new york_marron.jpg' },
    { name: 'new york', size: 'Oversize (unico)', catalog: './buzos/galeria/new york_negro.jpg', zoom: './buzos/zoom/new york_negro.jpg' },
    { name: 'north face', size: 'Oversize (unico)', catalog: './buzos/galeria/north face_naranja.jpg', zoom: './buzos/zoom/north face_naranja.jpg' },
    { name: 'not found', size: 'Oversize (unico)', catalog: './buzos/galeria/not found_crema.jpg', zoom: './buzos/zoom/not found_crema.jpg' },
    { name: 'one way', size: 'Oversize (unico)', catalog: './buzos/galeria/one way_negro.jpg', zoom: './buzos/zoom/one way_negro.jpg' },
    { name: 'oxford', size: 'Oversize (unico)', catalog: './buzos/galeria/oxford_marron.jpg', zoom: './buzos/zoom/oxford_marron.jpg' },
    { name: 'oxford', size: 'Oversize (unico)', catalog: './buzos/galeria/oxford_negro.jpg', zoom: './buzos/zoom/oxford_negro.jpg' },
    { name: 'palm angel', size: 'Oversize (unico)', catalog: './buzos/galeria/palm angel_negro.jpg', zoom: './buzos/zoom/palm angel_negro.jpg' },
    { name: 'peace', size: 'Oversize (unico)', catalog: './buzos/galeria/peace_negro.jpg', zoom: './buzos/zoom/peace_negro.jpg' },
    { name: 'preace', size: 'Oversize (unico)', catalog: './buzos/galeria/preace_blanco y gris.jpg', zoom: './buzos/zoom/preace_blanco y gris.jpg' },
    { name: 'preace', size: 'Oversize (unico)', catalog: './buzos/galeria/preace_crema.jpg', zoom: './buzos/zoom/preace_crema.jpg' },
    { name: 'preace', size: 'Oversize (unico)', catalog: './buzos/galeria/preace_marron.jpg', zoom: './buzos/zoom/preace_marron.jpg' },
    { name: 'preace', size: 'Oversize (unico)', catalog: './buzos/galeria/preace_negro y gris.jpg', zoom: './buzos/zoom/preace_negro y gris.jpg' },
    { name: 'preace', size: 'Oversize (unico)', catalog: './buzos/galeria/preace_verde.jpg', zoom: './buzos/zoom/preace_verde.jpg' },
    { name: 'prologue', size: 'Oversize (unico)', catalog: './buzos/galeria/prologue_blanco.jpg', zoom: './buzos/zoom/prologue_blanco.jpg' },
    { name: 'prologue', size: 'Oversize (unico)', catalog: './buzos/galeria/prologue_crema.jpg', zoom: './buzos/zoom/prologue_crema.jpg' },
    { name: 'prologue', size: 'Oversize (unico)', catalog: './buzos/galeria/prologue_negro.jpg', zoom: './buzos/zoom/prologue_negro.jpg' },
    { name: 'prologue', size: 'Oversize (unico)', catalog: './buzos/galeria/prologue_verde oscuro.jpg', zoom: './buzos/zoom/prologue_verde oscuro.jpg' },
    { name: 'prologue', size: 'Oversize (unico)', catalog: './buzos/galeria/prologue_verde.jpg', zoom: './buzos/zoom/prologue_verde.jpg' },
    { name: 'puas', size: 'Oversize (unico)', catalog: './buzos/galeria/puas_negro.jpg', zoom: './buzos/zoom/puas_negro.jpg' },
    { name: 'rernember', size: 'Oversize (unico)', catalog: './buzos/galeria/rernember_celeste.jpg', zoom: './buzos/zoom/rernember_celeste.jpg' },
    { name: 'savage', size: 'Oversize (unico)', catalog: './buzos/galeria/savage_blanco.jpg', zoom: './buzos/zoom/savage_blanco.jpg' },
    { name: 'savage', size: 'Oversize (unico)', catalog: './buzos/galeria/savage_negro.jpg', zoom: './buzos/zoom/savage_negro.jpg' },
    { name: 'shut up', size: 'Oversize (unico)', catalog: './buzos/galeria/shut up_marron.jpg', zoom: './buzos/zoom/shut up_marron.jpg' },
    { name: 'somebody', size: 'Oversize (unico)', catalog: './buzos/galeria/somebody_gris.jpg', zoom: './buzos/zoom/somebody_gris.jpg' },
    { name: 'tupac', size: 'Oversize (unico)', catalog: './buzos/galeria/tupac_violeta.jpg', zoom: './buzos/zoom/tupac_violeta.jpg' },
    { name: 'united state', size: 'Oversize (unico)', catalog: './buzos/galeria/united state_crema.jpg', zoom: './buzos/zoom/united state_crema.jpg' },
    { name: 'universe', size: 'Oversize (unico)', catalog: './buzos/galeria/universe_azul.jpg', zoom: './buzos/zoom/universe_azul.jpg' },
    { name: 'universe', size: 'Oversize (unico)', catalog: './buzos/galeria/universe_negro.jpg', zoom: './buzos/zoom/universe_negro.jpg' },
    { name: 'unusual', size: 'Oversize (unico)', catalog: './buzos/galeria/unusual_amarillo.jpg', zoom: './buzos/zoom/unusual_amarillo.jpg' },
    { name: 'unusual', size: 'Oversize (unico)', catalog: './buzos/galeria/unusual_bordo.jpg', zoom: './buzos/zoom/unusual_bordo.jpg' },
    { name: 'unusual', size: 'Oversize (unico)', catalog: './buzos/galeria/unusual_marron.jpg', zoom: './buzos/zoom/unusual_marron.jpg' },
    { name: 'unusual', size: 'Oversize (unico)', catalog: './buzos/galeria/unusual_negro.jpg', zoom: './buzos/zoom/unusual_negro.jpg' },
    { name: 'vetements', size: 'Oversize (unico)', catalog: './buzos/galeria/vetements_marron.jpg', zoom: './buzos/zoom/vetements_marron.jpg' },
    { name: 'vetements', size: 'Oversize (unico)', catalog: './buzos/galeria/vetements_blanco.jpg', zoom: './buzos/zoom/vetements_blanco.jpg' },
    { name: 'vetements', size: 'Oversize (unico)', catalog: './buzos/galeria/vetements_gris.jpg', zoom: './buzos/zoom/vetements_gris.jpg' },
    { name: 'vetements', size: 'Oversize (unico)', catalog: './buzos/galeria/vetements_oscuro.jpg', zoom: './buzos/zoom/vetements_oscuro.jpg' },
    { name: 'vops', size: 'Oversize (unico)', catalog: './buzos/galeria/vops_marron.jpg', zoom: './buzos/zoom/vops_marron.jpg' },
    { name: 'vops', size: 'Oversize (unico)', catalog: './buzos/galeria/vops_oscuro.jpg', zoom: './buzos/zoom/vops_oscuro.jpg' },
    { name: 'want', size: 'Oversize (unico)', catalog: './buzos/galeria/want_naranja.jpg', zoom: './buzos/zoom/want_naranja.jpg' },
    { name: 'want', size: 'Oversize (unico)', catalog: './buzos/galeria/want_negro.jpg', zoom: './buzos/zoom/want_negro.jpg' },
    { name: 'yesterday', size: 'Oversize (unico)', catalog: './buzos/galeria/yesterday_marron.jpg', zoom: './buzos/zoom/yesterday_marron.jpg' },
];

const gallery = document.getElementById('gallery');
const zoomOverlay = document.getElementById('zoom-overlay');
const zoomImage = document.getElementById('zoom-image');
const sendBtn = document.getElementById('send-btn');
const delta = 30;

function load() {
    gallery.innerHTML = '';
    const favs = JSON.parse(localStorage.getItem('favoritos') || '[]');
    products.forEach((producto, index) => {
        const div = document.createElement('div');
        div.className = 'product';

        const img = document.createElement('img');
        img.src = producto.catalog;
        img.alt = producto.name;

        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.dataset.index = index;

        if (favs.includes(index)) {
            heart.classList.add('active');
        }

        heart.addEventListener('click', (e) => {
            heart.classList.toggle('active');
            actualizarFavoritos();
        });

        let touchTimeout;
        let touching = false;
        let startX = null, startY = null;

        img.addEventListener('touchstart', (e) => {
            touching = true;
            e.preventDefault();
            touchTimeout = setTimeout(() => {
                if (!touching) return;
                zoomImage.src = producto.zoom;
                zoomOverlay.style.display = 'flex';
            }, 300);
        });

        img.addEventListener('touchmove', (e) => {
            if (!touching) return;
            if (startX == null) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                return;
            }
            if (startX - delta < e.touches[0].clientX
                && e.touches[0].clientX < startX + delta
                && startY - delta < e.touches[0].clientY
                && e.touches[0].clientY < startY + delta) {
                return;
            }
            startY ??= e.touches[0].clientY;
            touching = false;
            startX = startY = null;
            zoomOverlay.style.display = 'none';
            clearTimeout(touchTimeout);
        });

        img.addEventListener('touchend', () => {
            touching = false;
            startX = startY = null;
            zoomOverlay.style.display = 'none';
            clearTimeout(touchTimeout);
        });

        div.appendChild(img);
        div.appendChild(heart);
        gallery.appendChild(div);
    });
}

function actualizarFavoritos() {
    const hearts = document.querySelectorAll('.heart.active');
    const favoritos = Array.from(hearts).map(heart =>
        parseInt(heart.dataset.index)
    );

    localStorage.setItem('favoritos', JSON.stringify(favoritos));

    sendBtn.style.display = favoritos.length > 0 ? 'flex' : 'none';
}

sendBtn.addEventListener('click', () => {
    const favs = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const prods = favs.map(index => products[index]);
    const groups = new Map();
    for (const product of prods) {
        const color = product.catalog.split('_')[1].split('.')[0].replaceAll(' ', '%20');
        if (groups.has(product.name)) {
            groups.get(product.name).push(color);
        } else {
            groups.set(product.name, [color]);
        }
    }
    const join = (list, mid, last) => {
        let result = list[0];
        for (let i = 1; i < list.length - 1; i++)
            result += mid + list[i];
        if (list.length > 1)
            result += last + list[list.length - 1];
        return result;
    }
    window.open(
        'https://wa.me/541131413193/?text=Hola%21%0AVi%20los%20buzos%20y%20me%20gustaron%20los%20modelos%20' +
        join([...groups].map(([modelo, colores]) =>
            modelo.replaceAll(' ', '%20') + '%20en%20' +
            join(colores, '%2C%20', '%20y%20')), '%2C%20', '%20y%20') +
        '.%0ACu%C3%A1ndo%20ingresan%3F',
        '_blank'
    );
});

load();
actualizarFavoritos();