const products = [
  { brand: 'Adidas', model: 'Samba OG', color: 'Blanco / negro', image: 'assets/adidas-samba-white-hq.png' },
  { brand: 'Jordan', model: 'Air Jordan 4 Retro Black Cat', color: 'Negro total', image: 'assets/air-jordan-4-black-cat.png' },
  { brand: 'Nike', model: 'P-6000', color: 'Plateado / rosado', image: 'assets/nike-p6000-rosado.png' },
  { brand: 'New Balance', model: '530', color: 'Blanco / negro', image: 'assets/new-balance-530.png' },
  { brand: 'Nike', model: 'Free Metcon', color: 'Negro / blanco', image: 'assets/nike-free.png' },
  { brand: 'Puma', model: 'Suede XL', color: 'Negro / blanco', image: 'assets/puma-suede-xl.png' },
  { brand: 'Nike', model: 'V5 RNR', color: 'Blanco / chocolate', image: 'assets/nike-v5-rnr-chocolate.png' },
  { brand: 'Nike', model: 'V5 RNR', color: 'Blanco / plateado / negro', image: 'assets/nike-v5-rnr-black.png' },
  { brand: 'Nike', model: 'Air Force 1 ’07', color: 'Blanco total', image: 'assets/nike-air-force-1-white.png' }
];

const grid = document.querySelector('#product-grid');
const count = document.querySelector('#product-count');
const template = document.querySelector('#product-template');

function render(brand = 'Todas') {
  const filtered = brand === 'Todas' ? products : products.filter(product => product.brand === brand);
  grid.replaceChildren();
  count.textContent = `${filtered.length} MODELOS`;
  filtered.forEach(product => {
    const card = template.content.cloneNode(true);
    const image = card.querySelector('img');
    image.src = product.image;
    image.alt = `${product.brand} ${product.model} ${product.color}`;
    card.querySelector('.brand-label').textContent = product.brand;
    card.querySelector('.model').textContent = product.color;
    card.querySelector('h3').textContent = product.model;
    card.querySelector('.sizes').textContent = 'Tallas disponibles: consulta por WhatsApp';
    const text = `Hola, me interesa la ${product.brand} ${product.model} (${product.color}). ¿Tienen disponible la talla?`;
    card.querySelector('.inquire').href = `https://wa.me/50765412909?text=${encodeURIComponent(text)}`;
    grid.appendChild(card);
  });
}

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    render(button.dataset.brand);
  });
});

render();
