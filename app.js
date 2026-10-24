const products = [
  { brand: 'Nike', model: 'Air Force 1', color: 'Blanco / blanco', sizes: ['38', '39', '40', '41', '42'], image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=85' },
  { brand: 'Jordan', model: 'Air Jordan 1 Mid', color: 'Blanco / rojo', sizes: ['39', '40', '41', '42', '43'], image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=1200&q=85' },
  { brand: 'Adidas', model: 'Forum Low', color: 'Blanco / negro', sizes: ['37', '38', '39', '40', '41'], image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=85' },
  { brand: 'New Balance', model: '574 Classic', color: 'Gris / blanco', sizes: ['39', '40', '41', '42'], image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=85' },
  { brand: 'Nike', model: 'Dunk Low', color: 'Blanco / azul', sizes: ['38', '39', '40', '42'], image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85' },
  { brand: 'Adidas', model: 'Campus 00s', color: 'Negro / blanco', sizes: ['40', '41', '42', '43'], image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=85' }
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
    card.querySelector('.sizes').textContent = `Tallas: ${product.sizes.join(' · ')}`;
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
