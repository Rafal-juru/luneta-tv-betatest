function toggleAccordion(e, planetId) {
  // --- Efeito Visual de Explosão de Pixels ---
  if (e && e.clientX && e.clientY) {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = e.clientX + 'px';
    container.style.top = e.clientY + 'px';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    
    // Cria 25 partículas
    for (let i = 0; i < 25; i++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel-particula');
      
      // Trajeto aleatório (X entre -100 e 100, Y entre -150 e -50 para "pular" pra cima)
      const travelX = (Math.random() - 0.5) * 200;
      const travelY = (Math.random() * -100) - 50;
      
      pixel.style.setProperty('--travel-x', travelX + 'px');
      pixel.style.setProperty('--travel-y', travelY + 'px');
      
      // Atraso aleatório pequeno
      pixel.style.animationDelay = (Math.random() * 0.2) + 's';
      
      // Tamanho do pixel (4px a 7px)
      const size = Math.floor(Math.random() * 4) + 4;
      pixel.style.width = size + 'px';
      pixel.style.height = size + 'px';
      
      container.appendChild(pixel);
    }
    
    document.body.appendChild(container);
    
    // Remove o container do DOM após 1 segundo (quando as animações já acabaram)
    setTimeout(() => {
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    }, 1000);
  }
  // -------------------------------------------

  // Seleciona todos os painéis
  const paineis = document.querySelectorAll('.painel-expansivel');
  const painelAlvo = document.getElementById(`painel-${planetId}`);
  const containerGravidade = document.getElementById(planetId);

  // Verifica se o painel clicado já está aberto
  const isCurrentlyActive = painelAlvo.classList.contains('ativo');

  // Fecha todos os painéis
  paineis.forEach(painel => {
    painel.classList.remove('ativo');
  });

  // Se não estava aberto, rola a tela e depois abre o painel
  if (!isCurrentlyActive) {
    // Captura o elemento do planeta (a imagem clicável) dentro do container
    const planetaElement = containerGravidade.querySelector('.planetas');
    
    // Captura as coordenadas ANTES de alterar o CSS do painel
    const planetaRect = planetaElement.getBoundingClientRect();
    
    // Calcula a posição: fundo do planeta - 1/3 da tela
    const posicaoCalculada = planetaRect.bottom + window.scrollY - (window.innerHeight * 0.3);

    // Executa a rolagem suave nativa
    window.scrollTo({
      top: posicaoCalculada,
      behavior: 'smooth'
    });

    // Só após calcular e iniciar o scroll, abrimos a janela (adicionando a classe .ativo)
    painelAlvo.classList.add('ativo');
  }
}
