const products = [
  { brand: 'Adidas', model: 'Samba OG', color: 'Blanco / negro', sizes: ['36', '37', '44', '45'], note: 'Corre una talla menos', image: 'assets/adidas-samba-white-hq.png' },
  { brand: 'Jordan', model: 'Air Jordan 4 Retro Black Cat', color: 'Negro total', sizes: ['43', '44'], image: 'assets/air-jordan-4-black-cat.png' },
  { brand: 'Nike', model: 'P-6000', color: 'Plateado / rosado', sizes: ['37', '39'], image: 'assets/nike-p6000-rosado.png' },
  { brand: 'New Balance', model: '530', color: 'Blanco / negro', sizes: ['38', '40', '42', '44'], image: 'assets/new-balance-530.png' },
  { brand: 'Nike', model: 'Free Metcon', color: 'Negro / blanco', sizes: ['37', '38', '41'], image: 'assets/nike-free.png' },
  { brand: 'Puma', model: 'Suede XL', color: 'Negro / blanco', sizes: ['37', '38', '39', '40'], image: 'assets/puma-suede-xl.png' },
  { brand: 'Nike', model: 'V5 RNR', color: 'Blanco / chocolate', sizes: ['37', '40', '43'], image: 'assets/nike-v5-rnr-chocolate.png' },
  { brand: 'Nike', model: 'Air Force 1 ’07', color: 'Blanco total', sizes: ['43', '45'], image: 'assets/nike-air-force-1-white.png' },
  { brand: 'New Balance', model: '1906R', color: 'Gris / lila', sizes: ['37'], image: 'assets/new-balance-1906r-lila.png' },
  { brand: 'Puma', model: 'Speedcat OG', color: 'Rojo / blanco', sizes: ['41'], image: 'assets/puma-speedcat-red.png' },
  { brand: 'Nike', model: 'P-6000', color: 'Plateado metálico / sail / negro', sizes: ['39'], image: 'assets/nike-p6000-silver.png' },
  { brand: 'Adidas', model: 'Campus 00s', color: 'Negro / blanco', sizes: ['42', '43'], image: 'assets/adidas-campus-00s-black.png' }
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
    card.querySelector('.sizes').textContent = `Tallas: ${product.sizes.join(' · ')}${product.note ? ` · ${product.note}` : ''}`;
    const text = `Hola, quiero apartar la ${product.brand} ${product.model} (${product.color}). ¿Cómo hago?`;
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
