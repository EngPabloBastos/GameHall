const jogos = [
  { id: 1, nome: "The Legend of Zelda: Ocarina of Time", ano: 1998, plataforma: "Nintendo 64", hallScore: 100, imagem: "assets/zelda-oot.png",
    sobre: "Maior jogo de todos os tempos. Revolucionou os jogos em 3D com um level design impecável, dungeons criativas, exploração recompensadora e uma trilha sonora simplesmente perfeita. Tudo aqui estava anos à frente de sua época, servindo de inspiração para dezenas de jogos que vieram depois." },

  { id: 2, nome: "Chrono Trigger", ano: 1995, plataforma: "Super Nintendo", hallScore: 100, imagem: "assets/chrono-trigger.png",
    sobre: "O melhor JRPG já criado. Combates rápidos e divertidos, sistema de viagem no tempo brilhantemente executado, personagens inesquecíveis e uma das melhores trilhas sonoras da história. As artes de Akira Toriyama dão o toque final para uma verdadeira obra-prima." },

  { id: 3, nome: "Red Dead Redemption 2", ano: 2018, plataforma: "PC / PS4 / Xbox One", hallScore: 99, imagem: "assets/rdr2.png",
    sobre: "A experiência mais imersiva já feita em um mundo aberto. Cada detalhe parece vivo, desde os NPCs até a fauna e os eventos aleatórios. Arthur Morgan protagoniza uma das melhores histórias dos videogames, tornando Red Dead Redemption 2 um marco da indústria." },

  { id: 4, nome: "Resident Evil 4 Remake", ano: 2023, plataforma: "PC / PS4 / PS5 / Xbox Series", hallScore: 99, imagem: "assets/re4remake.png",
    sobre: "Pegou tudo que fazia o original ser incrível e conseguiu melhorar ainda mais. Refinou a gameplay, aprofundou a história, modernizou os controles e praticamente não fez cortes desnecessários. Um exemplo perfeito de como um remake deve ser feito." },

  { id: 5, nome: "Resident Evil 4", ano: 2005, plataforma: "GameCube / PS2", hallScore: 99, imagem: "assets/re4.jpg",
    sobre: "Um divisor de águas. Reinventou Resident Evil quando a franquia estava em declínio e influenciou praticamente todos os jogos de ação em terceira pessoa lançados depois dele." },

  { id: 6, nome: "Grand Theft Auto: San Andreas", ano: 2004, plataforma: "PS2 / PC / Xbox", hallScore: 99, imagem: "assets/gta-sa.png",
    sobre: "É difícil acreditar que tudo isso rodava em um PlayStation 2. Um mundo aberto gigantesco, dezenas de atividades, personalização, uma história marcante e liberdade como poucos jogos ofereceram até hoje." },

  { id: 7, nome: "Resident Evil", ano: 1996, plataforma: "PlayStation", hallScore: 98, imagem: "assets/re1.png",
    sobre: "O jogo que praticamente criou o survival horror moderno. Atmosfera, tensão, gerenciamento de recursos e exploração fizeram deste um dos títulos mais importantes da história dos videogames." },

  { id: 8, nome: "Resident Evil 2", ano: 1998, plataforma: "PlayStation", hallScore: 98, imagem: "assets/re2.png",
    sobre: "Pegou a fórmula do primeiro Resident Evil e elevou tudo de nível. Dois protagonistas, campanhas complementares, ambientação memorável e uma das experiências mais marcantes do gênero survival horror." },

  { id: 9, nome: "The Legend of Zelda: Twilight Princess", ano: 2006, plataforma: "GameCube / Wii", hallScore: 98, imagem: "assets/zelda-twilight.png",
    sobre: "Pegou tudo o que Zelda já fazia de melhor e adicionou uma estética mais sombria e madura. O resultado foi uma aventura épica, com algumas das melhores dungeons e chefes de toda a franquia." },

  { id: 10, nome: "Super Mario World", ano: 1990, plataforma: "Super Nintendo", hallScore: 97, imagem: "assets/smw.png",
    sobre: "O melhor jogo de plataforma já feito. Controles perfeitos, fases criativas, arte atemporal e uma trilha sonora inesquecível. Um clássico da época em que a Nintendo parecia simplesmente não errar." },

  { id: 11, nome: "Need for Speed: Most Wanted", ano: 2005, plataforma: "PC / PS2 / Xbox / GameCube", hallScore: 97, imagem: "assets/nfs.png",
    sobre: "O auge da franquia Need for Speed. A mistura de perseguições policiais, carros lendários, sensação de velocidade e uma trilha sonora recheada de rock e metal faz desse o melhor jogo de corrida arcade de todos os tempos." },

  { id: 12, nome: "Bomba Patch 100% Atualizado", ano: 2007, plataforma: "PlayStation 2", hallScore: 97, imagem: "assets/bomba-patch.jpg",
    sobre: "\"100% atualizado, é ruim de aturar...\" Não é só um mod de PES, é um patrimônio cultural brasileiro. Marcou gerações, reuniu amigos em incontáveis partidas e se tornou muito maior do que qualquer atualização de elenco." },

  { id: 13, nome: "Grand Theft Auto V", ano: 2013, plataforma: "PC / PS3 / PS4 / PS5 / Xbox", hallScore: 96, imagem: "assets/gta5.jpg",
    sobre: "Um dos maiores sucessos da história dos games. Los Santos continua impressionando mais de uma década depois, seja pela liberdade, pelos três protagonistas ou pela quantidade absurda de conteúdo disponível." },

  { id: 14, nome: "Final Fantasy VII", ano: 1997, plataforma: "PlayStation", hallScore: 96, imagem: "assets/ff7.png",
    sobre: "O JRPG que conquistou o mundo. Cloud, Sephiroth e Aerith se tornaram ícones da cultura gamer, enquanto sua história emocionante e sua trilha sonora transformaram Final Fantasy VII em uma verdadeira lenda." },

  { id: 15, nome: "Midnight Club 3: DUB Edition Remix", ano: 2005, plataforma: "PS2 / Xbox / PSP", hallScore: 95, imagem: "assets/midnight-club-3.png",
    sobre: "Velocidade absurda, customização praticamente infinita e uma sensação de corrida que poucos jogos conseguiram reproduzir. Até hoje continua sendo referência quando o assunto é corrida arcade." },

  { id: 16, nome: "Castlevania: Symphony of the Night", ano: 1997, plataforma: "PlayStation", hallScore: 95, imagem: "assets/symphony.png",
    sobre: "Uma obra-prima que redefiniu completamente Castlevania. Exploração não linear, progressão viciante, trilha sonora impecável e um dos mapas mais memoráveis da história fizeram nascer o gênero Metroidvania." },

  { id: 17, nome: "Castlevania: Harmony of Dissonance", ano: 2002, plataforma: "Game Boy Advance", hallScore: 94, imagem: "assets/harmony.png",
    sobre: "Mesmo sendo menos lembrado que outros jogos da série, entrega exploração excelente, ótimo level design e mantém viva toda a essência que tornou Castlevania uma franquia tão respeitada." },

  { id: 18, nome: "Castlevania: Aria of Sorrow", ano: 2003, plataforma: "Game Boy Advance", hallScore: 93, imagem: "assets/aria-of-sorrow.png",
    sobre: "O melhor Castlevania portátil. O sistema de almas trouxe uma profundidade inédita à gameplay, tornando cada inimigo derrotado uma nova possibilidade de evolução para o personagem." },

  { id: 19, nome: "Max Payne", ano: 2001, plataforma: "PC / PS2 / Xbox", hallScore: 93, imagem: "assets/max-payne.png",
    sobre: "Revolucionou os jogos de ação com o icônico Bullet Time. Sua narrativa em estilo noir, atmosfera melancólica e gameplay extremamente satisfatória fizeram dele um clássico absoluto." },

  { id: 20, nome: "Project Zomboid", ano: 2021, plataforma: "PC", hallScore: 92, imagem: "assets/project-zomboid.png",
    sobre: "O simulador de apocalipse zumbi definitivo. Não existe missão para salvar o mundo: o objetivo é apenas sobreviver o máximo possível. Profundo, extremamente desafiador e com uma liberdade quase ilimitada." }
];