const container = document.getElementById('lista-jogos');

jogos.forEach((jogo, index) => {
  const card = document.createElement('div');
  card.classList.add('jogo-card');
  card.dataset.id = jogo.id;

  card.innerHTML = `
    <div class="capa-wrapper">
      <img src="${jogo.imagem}" alt="${jogo.nome}" class="capa-jogo">
      <span class="score-badge">${jogo.hallScore}</span>
    </div>
    <span class="posicao">#${index + 1}</span>
    <p class="nome">${jogo.nome}</p>
  `;

  container.appendChild(card);
});

container.addEventListener('click', (evento) => {
  const card = evento.target.closest('.jogo-card');
  if (!card) return;

  const id = Number(card.dataset.id);
  const jogo = jogos.find(j => j.id === id);

  const jaAberto = card.classList.contains('expandido');

  document.querySelectorAll('.jogo-card.expandido').forEach(c => {
    c.classList.remove('expandido');
    c.querySelector('.info-extra')?.remove();
  });

  if (!jaAberto) {
    card.classList.add('expandido');

    const infoExtra = document.createElement('div');
    infoExtra.classList.add('info-extra');
    infoExtra.innerHTML = `
      <p class="meta">${jogo.ano} · ${jogo.plataforma}</p>
      <p>${jogo.sobre}</p>
    `;
    card.appendChild(infoExtra);
  }
});