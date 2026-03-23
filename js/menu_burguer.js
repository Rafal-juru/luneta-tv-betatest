function burguer_menu() {
    const elemento = document.getElementById('lista_nav');
    elemento.style.display = (elemento.style.display === 'flex') ? 'none' : 'flex';
}