

window.addEventListener('scroll', function() {
    let scrollText = document.getElementById('logo_menu');

    if (window.scrollY > CordenadaAtiva(8)) { // Ajuste o valor conforme necessário
        scrollText.classList.remove('close');
        scrollText.classList.remove('hidden');
        scrollText.classList.add('visible');
    } else {
        scrollText.classList.remove('visible');
        scrollText.classList.add('close');
    }
});


window.addEventListener('scroll', function() {
    let scrollText = document.querySelector('.cordenada00');

    if (window.scrollY > CordenadaAtiva(3)) { // Ajuste o valor conforme necessário
        scrollText.classList.remove('hidden');
        scrollText.classList.add('open');
    } else {
        scrollText.classList.remove('open');
        scrollText.classList.add('hidden');
    }
});

window.addEventListener('scroll', function() {
    let scrollText = document.querySelector('.cordenada01');

    if (window.scrollY > CordenadaAtiva(35)) { // Ajuste o valor conforme necessário
        scrollText.classList.remove('hidden');
        scrollText.classList.add('open');
    } else {
        scrollText.classList.remove('open');
        scrollText.classList.add('hidden');
    }
});

window.addEventListener('scroll', function() {
    let scrollText = document.querySelector('.cordenada02');
    
    if (window.scrollY > CordenadaAtiva(40)) { // Ajuste o valor conforme necessário
        scrollText.classList.remove('hidden');
        scrollText.classList.add('open');
    } else {
        scrollText.classList.remove('open');
        scrollText.classList.add('hidden');
    }
});

window.addEventListener('scroll', function() {
    let scrollText = document.querySelector('.cordenada03');

    if (window.scrollY > CordenadaAtiva(55)) { // Ajuste o valor conforme necessário
        scrollText.classList.remove('hidden');
        scrollText.classList.add('open');
    } else {
        scrollText.classList.remove('open');
        scrollText.classList.add('hidden');
    }
});

window.addEventListener('scroll', function() {
    let scrollText = document.querySelector('.cordenada04');

    if (window.scrollY > CordenadaAtiva(60)) { // Ajuste o valor conforme necessário
        scrollText.classList.remove('hidden');
        scrollText.classList.add('open');
    } else {
        scrollText.classList.remove('open');
        scrollText.classList.add('hidden');
    }
});


function CordenadaAtiva(porcentagem)
{
    // Altura total da pagina:
    const alturaTotal = document.documentElement.scrollHeight;

    if (alturaTotal > 1000) {
        return(alturaTotal*((porcentagem/99)));
    }
    else{
        return(alturaTotal*(porcentagem/100));
    }
}