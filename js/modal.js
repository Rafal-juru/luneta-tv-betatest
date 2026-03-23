// Lista de conteudo:
const CONTEUDO_PLANETAS = [
  {
    'id': 1,
    'tag': 'tagSaturno.png',
    'texto': 
    `\n\nSaturno é o segundo maior planeta do nosso sistema solar e carrega seu anel icônico feito de gelo e poeira.\n\nO gigante gasoso e tempestuoso foi o escolhido pela Luneta para representar o setor de Markenting e Comunicação para <span class="green">empresas públicas ou projetos advindos de recursos públicos</span>, pois uma responsa dessas requer <span class="blue">disciplina , estrutura, responsabilidade e limites</span>, que é justamente o que o planeta representa.\n\nApessar das tempestades terríveis, a visita foi agradável.`,
    'fundo': 'fundoSaturno'
  },
  {
    'id': 2,
    'tag': 'tagMarte.png',
    'texto': 
    `\n\nNosso vizinho Marte representa <span class="blue">desejo, coragem, ação, ímpeto, força e poder</span> e foi o escolhido para guiar os nossos <span class="green">clientes da Política</span>.\n\nMarte é o deus romano da guerra e, vai por mim, precisamos dessa energia pra enfrentar as infinitas batalhas em campanhas políticas.\n\nE não é à toa que ele é vermelho, não! Assim como todos os nossos clientes, estes, em especial, são progressistas eentram no jogo político com objetivos de equidade e justiça socioambiental.`,
    'fundo': 'fundoMarte'
  },
  {
    'id': 3,
    'tag': 'tagLua.png',
    'texto': 
    `\nSabia que o nome da nossa lua é Selene? A deusa grega em sua carruagem prateada, velando nosso planetinha azul todas as noites, o que deu a ela o arquétipo de uma grande mãe. Selene representa <span class="blue">renovação, mistério, sonhos, desejos e amor eterno</span> e foi em homenagem a ela que a Luneta nasceu com sonhos sociais e coletivos pra lá de ambiciosos.\n\n<span class="green">Somos uma agência cooperativista baseada em Economia Solidária</span>. Todo lucro é dividido equitativamente e todos os profissionais podem se ver em seus trabalhos e participam dele do começo ao fim.  Nosso jornal independente e profissional, a Luneta TV, foca em dar voz aos mais silenciados e promover o <span class="green">Jornalismo ativista em prol de um mundo mais justo</span>.`,
    'fundo': 'fundoLua'
  },
  {
    'id': 4,
    'tag': 'tagJupiter.png',
    'texto': 
    `\n\nJúpiter é o maior planeta do nosso sistema solar, formado principalmente por gás e tempestades. Uma delas dura há mais de 300 anos: a Grande Mancha Vermelha — aquela mesma que você reparou na atmosfera magnífica do astro.\n\nJúpiter representa <span class="blue">autoridade e sabedoria.</span> Por isso, foi o escolhido para simbolizar as <span class="green">coproduções de infoprodutos</span> da Luneta com uma galera que ama tanto o que faz que decidiu ensinar os outros por meio de seus cursos.\n\nAcreditamos que sabedoria precisa ser compartilhada — e a paixão dos nossos clientes nos inspira!`,
    'fundo': 'fundoJupiter'
  },
  {
    'id': 5,
    'tag': 'tagTerra.png',
    'texto': 
    `\n\nNa <spam class="blue">UEMG(Universidade do Estado de Minas Gerais)</spam>, unidade Passos, foi estudada e criada a Luneta. A Terra tem um dos recursos mais valiosos e raros do universo: a <spam class="green">a vida!</spam> E, com ela, possibilidades inimagináveis. Entretanto, o seleto grupo orgânico e racional que a habita acabou se organizando de forma bastante hierárquica e desigual.\n\nAcreditamos que as Ciências e a cooperação são algumas das soluções para repensarmos a forma de existirmos. E, no que tange ao nosso trabalho, prestamos serviços de <spam class="blue">jornalismo, publicidade, propaganda e marketing</spam> de forma justa, criativa e com compromisso social - sempre em busca de conexões com quem também <spam class="green">enxerga além</spam>`,
    'fundo': 'fundoTerra'
  },
];

const modal = (numID = 0) => {
  // Seleciona o elemento:
  const container = document.getElementById('modal');

  // fecha modal se clicar fora do conteúdo 
  container.onclick = function(e) { 
    if (e.target === container) {
      modal(0); 
    }
  };

  // Fecha ao apertar a tecla ESC
  document.onkeydown = function(e) {
    if (e.key === "Escape") {
      modal(0);
    }
  };

  // Caso esteja ABRINDO o modal (numID diferente de 0)
  if (numID != 0) {
    // 1. Prepara o display e trava o scroll
    container.style.display = 'flex';
    let body = document.querySelector('body');
    body.classList.add('stopBody');

    // 2. Dispara a animação da fenda (CSS clip-path) com um micro-delay
    setTimeout(() => {
      container.classList.add('animar-fenda');
    }, 10);

    // 3. Esconde a logo flutuante do menu
    let scrollText = document.getElementById('logo_menu');
    if (scrollText) {
      scrollText.classList.remove('visible');
      scrollText.classList.add('close');
    }

    let p;
    let p_txt;

    // 4. Percorre a lista de conteúdo para montar o HTML
    CONTEUDO_PLANETAS.forEach(planeta => {
      if (planeta.id == numID) {
        // Limpa o conteúdo anterior e insere o novo
        container.innerHTML = `
          <div class="conteudo">
            <div class="${planeta.fundo}">
              <img src="./artes/${planeta.tag}" alt="Faixa" class="faixa">
              <div class="white ${planeta.fundo}2">
                <img src="./artes/${planeta.tag}" alt="Faixa" class="faixap">
                <p></p>
              </div>
            </div>
            <button class="btn" onclick="modal()">X</button>
          </div>
        `;

        // 5. Lógica da Digitação
        p = container.querySelector('p');
        p_txt = planeta.texto;
        let html = '';
        let j = 0;

        function digitar1() {
          if (j < p_txt.length) {
            html += p_txt.charAt(j);
            p.innerHTML = html;
            j++;
            setTimeout(digitar1, 2); // Velocidade da letra
          }
        }

        // 6. Inicia a digitação após a fenda abrir (800ms da animação + 200ms de folga)
        setTimeout(function() {
          digitar1();
        }, 900);
      }
    });

  } 
  // Caso esteja FECHANDO o modal (numID é 0)
  else {
    // 1. Inicia o fechamento da fenda no CSS
    container.classList.remove('animar-fenda');

    // 2. Espera a animação de fechar (800ms) antes de dar display none
    setTimeout(() => {
      container.style.display = 'none';
      container.innerHTML = '';
      
      // Destrava o scroll do body
      let body = document.querySelector('body');
      body.classList.remove('stopBody');
    }, 800);
  }
};