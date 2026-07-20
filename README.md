# 🎮 GameHall

Site pessoal de ranking dos 20 melhores jogos de todos os tempos, na opinião da equipe GameHall — um grupo de amigos da faculdade e colegas de trabalho apaixonados por videogames.

Além das opiniões pessoais, o ranking também leva em conta as avaliações da crítica especializada para chegar na classificação final.

## 🔗 Acesse o site

[https://engpablobastos.github.io/GameHall/](https://engpablobastos.github.io/GameHall/)

## 📌 Sobre o projeto

O GameHall foi desenvolvido como atividade da **MaisPraTI**, com o objetivo de praticar HTML, CSS e JavaScript puro (sem frameworks ou bibliotecas), incluindo:

- Estrutura de páginas com HTML semântico
- Estilização com CSS puro, incluindo variáveis de cor (`:root`)
- Manipulação do DOM com JavaScript
- Consumo de API externa (ViaCEP)
- Versionamento com Git, utilizando branches `main` e `develop`
- Publicação via GitHub Pages

## 🗂️ Páginas

| Página | Descrição |
|---|---|
| `index.html` | Página inicial com o ranking dos 20 jogos, sidebar com curiosidades e informações sobre como o ranking foi feito |
| `contato.html` | Formulário de contato com nome, email, mensagem e busca automática de cidade via CEP |
| `sobre.html` | Página explicando o propósito do projeto |

## ⚙️ Funcionalidades

- **Ranking interativo**: clique em qualquer jogo para expandir e ver ano de lançamento, plataforma e uma breve análise
- **Hall Score**: nota de 0 a 100 exibida em um selo circular sobre a capa de cada jogo
- **Busca de CEP (ViaCEP)**: ao digitar o CEP no formulário de contato, a cidade é preenchida automaticamente
- **Confirmação de envio**: mensagem de agradecimento exibida após o envio do formulário de contato

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3 (variáveis CSS, Flexbox, Grid)
- JavaScript (Vanilla JS)
- [ViaCEP API](https://viacep.com.br/)

## 📁 Estrutura de pastas

```
gamehall-site/
├── assets/
│   ├── games-img/     → capas dos jogos
│   └── site/           → logo, favicon e ícones de redes sociais
├── js/
│   ├── jogos.js         → dados dos 20 jogos do ranking
│   ├── script.js        → lógica do ranking (geração dos cards e expansão)
│   └── contato.js       → lógica do formulário e busca de CEP
├── index.html
├── contato.html
├── sobre.html
└── style.css
```

## 👤 Autor

Desenvolvido por **Pablo Bastos**

- [GitHub](https://github.com/EngPabloBastos)
- [LinkedIn](https://linkedin.com/in/bastospablo)
- [Instagram](https://instagram.com/pablobastos__)
