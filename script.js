// Efeito de mudar o fundo do menu ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#ffffff';
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        // Remove ou reseta o fundo e a sombra quando volta ao topo
        header.style.backgroundColor = 'transparent'; // ou a cor original do seu menu
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
