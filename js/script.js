var container = document.getElementById('lista-jogos');
var cardAberto = null;

for (var i = 0; i < jogos.length; i++) {
    var jogo = jogos[i];

    var card = document.createElement('div');
    card.className = 'jogo-card';
    card.setAttribute('data-id', jogo.id);

    card.innerHTML =
        '<img src="' + jogo.imagem + '" alt="' + jogo.nome + '" class="capa-jogo">' +
        '<span class="score">' + jogo.hallScore + '</span>' +
        '<span class="posicao">#' + (i + 1) + '</span>' +
        '<p class="nome">' + jogo.nome + '</p>';

    card.addEventListener('click', function () {
        abrirJogo(this);
    });

    container.appendChild(card);
}

function abrirJogo(card) {
    var id = Number(card.getAttribute('data-id'));

    if (cardAberto !== null) {
        var infoAntiga = cardAberto.querySelector('.info-extra');
        if (infoAntiga !== null) {
            cardAberto.removeChild(infoAntiga);
        }
        cardAberto.classList.remove('expandido');

        var idAntigo = Number(cardAberto.getAttribute('data-id'));

        if (idAntigo === id) {
            cardAberto = null;
            return;
        }
    }

    var jogo = null;
    for (var i = 0; i < jogos.length; i++) {
        if (jogos[i].id === id) {
            jogo = jogos[i];
        }
    }

    card.classList.add('expandido');

    var infoExtra = document.createElement('div');
    infoExtra.className = 'info-extra';
    infoExtra.innerHTML =
        '<p class="meta">' + jogo.ano + ' · ' + jogo.plataforma + '</p>' +
        '<p>' + jogo.sobre + '</p>';

    card.appendChild(infoExtra);
    cardAberto = card;
}