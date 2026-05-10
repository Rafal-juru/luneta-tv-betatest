function toggleAccordion(planetId) {
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

  // Se não estava aberto, abre-o e rola a tela
  if (!isCurrentlyActive) {
    painelAlvo.classList.add('ativo');

    // Aguarda um pequeno delay para a transição do max-height iniciar antes de dar o scroll
    setTimeout(() => {
      // Ajusta o scroll com um offset suave, priorizando o cabeçalho do painel ou o container gravidade
      const headerOffset = 100; // Offset para não colar no topo
      const elementPosition = containerGravidade.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Como alternativa, você pode usar o scrollIntoView:
      // document.querySelector(`#painel-${planetId} .painel-header`).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }
}
