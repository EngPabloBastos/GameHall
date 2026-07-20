var campoCep = document.getElementById('cep');

campoCep.addEventListener('blur', function () {
    var cep = campoCep.value.replace('-', '').replace(' ', '');

    if (cep.length !== 8) {
        return;
    }

    fetch('https://viacep.com.br/ws/' + cep + '/json/')
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {
            if (dados.erro) {
                alert('CEP não encontrado');
                return;
            }
            document.getElementById('cidade').value = dados.localidade + ' - ' + dados.uf;
        });
});

var formulario = document.getElementById('form-contato');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var confirmacao = document.getElementById('confirmacao');
    confirmacao.innerHTML =
        '<div class="caixa">' +
        '<h3>Mensagem enviada</h3>' +
        '<p>Obrigado por entrar em contato com a GameHall!</p>' +
        '<button type="button" id="btn-ok">OK</button>' +
        '</div>';
    confirmacao.classList.add('visivel');

    document.getElementById('btn-ok').addEventListener('click', function () {
        confirmacao.classList.remove('visivel');
        formulario.reset();
    });
});