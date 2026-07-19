const jogos = [
  { id: 1, nome: "The Legend of Zelda: Ocarina of Time", ano: 1998, plataforma: "Nintendo 64", hallScore: 100, imagem: "assets/zelda-oot.png",
    sobre: "Maior jogo de todos os tempos. Revolucionou os jogos em 3D com um level design impecável, dungeons criativas, exploração recompensadora e uma trilha sonora simplesmente perfeita. Tudo aqui estava anos à frente de sua época, servindo de inspiração para dezenas de jogos que vieram depois." },

  { id: 2, nome: "Chrono Trigger", ano: 1995, plataforma: "Super Nintendo", hallScore: 100, imagem: "assets/chrono-trigger.png",
    sobre: "O melhor JRPG já criado. Combates rápidos e divertidos, sistema de viagem no tempo brilhantemente executado, personagens inesquecíveis e uma das melhores trilhas sonoras da história. As artes de Akira Toriyama dão o toque final para uma verdadeira obra-prima." },

  { id: 3, nome: "Red Dead Redemption 2", ano: 2018, plataforma: "PC / PS4 / Xbox One", hallScore: 100, imagem: "assets/rdr2.png",
    sobre: "A experiência mais imersiva já feita em um mundo aberto. Cada detalhe parece vivo, desde os NPCs até a fauna e os eventos aleatórios. Arthur Morgan protagoniza uma das melhores histórias dos videogames, tornando Red Dead Redemption 2 um marco da indústria." },

  { id: 4, nome: "The Legend of Zelda: Twilight Princess", ano: 2006, plataforma: "GameCube / Wii", hallScore: 99, imagem: "assets/zelda-twilight.png",
    sobre: "Pegou tudo o que Zelda já fazia de melhor e adicionou uma estética mais sombria e madura. O resultado foi uma aventura épica, com algumas das melhores dungeons e chefes de toda a franquia." },

  { id: 5, nome: "Resident Evil 4", ano: 2005, plataforma: "GameCube / PS2", hallScore: 99, imagem: "assets/re4.jpg",
    sobre: "Um divisor de águas. Reinventou Resident Evil quando a franquia estava em declínio e influenciou praticamente todos os jogos de ação em terceira pessoa lançados depois dele." },

  { id: 6, nome: "Hollow Knight", ano: 2017, plataforma: "PC / Switch / PS4 / Xbox One", hallScore: 98, imagem: "assets/hollow_knight.jpg",
    sobre: "Um dos maiores metroidvanias já criados. Hallownest encanta pela atmosfera melancólica, exploração recompensadora, trilha sonora marcante e combates desafiadores, entregando uma experiência inesquecível para qualquer fã do gênero." },

  { id: 7, nome: "God of War", ano: 2018, plataforma: "PC / PS4 / PS5", hallScore: 98, imagem: "assets/gow.png",
    sobre: "Reinventou completamente a franquia sem perder sua identidade. A relação entre Kratos e Atreus, os combates impactantes e a impressionante câmera sem cortes transformaram o jogo em um dos maiores exclusivos da PlayStation." },

  { id: 8, nome: "Final Fantasy VII", ano: 1997, plataforma: "PlayStation", hallScore: 98, imagem: "assets/ff7.png",
    sobre: "O JRPG que conquistou o mundo. Cloud, Sephiroth e Aerith se tornaram ícones da cultura gamer, enquanto sua história emocionante e sua trilha sonora transformaram Final Fantasy VII em uma verdadeira lenda." },

  { id: 9, nome: "Resident Evil 4 Remake", ano: 2023, plataforma: "PC / PS4 / PS5 / Xbox Series", hallScore: 97, imagem: "assets/re4remake.png",
    sobre: "Pegou tudo que fazia o original ser incrível e conseguiu melhorar ainda mais. Refinou a gameplay, aprofundou a história, modernizou os controles e praticamente não fez cortes desnecessários. Um exemplo perfeito de como um remake deve ser feito." },

  { id: 10, nome: "Bloodborne", ano: 2015, plataforma: "PlayStation 4", hallScore: 97, imagem: "assets/bloodborne.jpg",
    sobre: "A obra-prima gótica da FromSoftware. Seu combate agressivo, ambientação inspirada no horror cósmico de Lovecraft e chefes memoráveis fizeram dele um dos melhores Action RPGs já produzidos." },

  { id: 11, nome: "Super Mario World", ano: 1990, plataforma: "Super Nintendo", hallScore: 96, imagem: "assets/smw.png",
    sobre: "O melhor jogo de plataforma já feito. Controles perfeitos, fases criativas, arte atemporal e uma trilha sonora inesquecível. Um clássico da época em que a Nintendo parecia simplesmente não errar." },

  { id: 12, nome: "Castlevania: Symphony of the Night", ano: 1997, plataforma: "PlayStation", hallScore: 96, imagem: "assets/symphony.png",
    sobre: "Uma obra-prima que redefiniu completamente Castlevania. Exploração não linear, progressão viciante, trilha sonora impecável e um dos mapas mais memoráveis da história fizeram nascer o gênero Metroidvania." },

  { id: 13, nome: "Minecraft", ano: 2011, plataforma: "Multiplataforma", hallScore: 96, imagem: "assets/minecraft.jpg",
    sobre: "O maior fenômeno da história dos videogames. Sua liberdade quase ilimitada permite criar, explorar e sobreviver de maneiras diferentes a cada partida, tornando-o um dos jogos mais influentes de todos os tempos." },

  { id: 14, nome: "Baldur's Gate 3", ano: 2023, plataforma: "PC / PS5 / Xbox Series", hallScore: 95, imagem: "assets/baldurs-gate.png",
    sobre: "Uma referência moderna para os RPGs ocidentais. Liberdade de escolha, personagens extremamente bem escritos e inúmeras possibilidades fazem com que cada campanha seja única." },

  { id: 15, nome: "Grand Theft Auto V", ano: 2013, plataforma: "PC / PS3 / PS4 / PS5 / Xbox", hallScore: 95, imagem: "assets/gta5.jpg",
    sobre: "Um dos maiores sucessos da história dos games. Los Santos continua impressionando mais de uma década depois, seja pela liberdade, pelos três protagonistas ou pela quantidade absurda de conteúdo disponível." },

  { id: 16, nome: "Grand Theft Auto: San Andreas", ano: 2004, plataforma: "PS2 / PC / Xbox", hallScore: 95, imagem: "assets/gta-sa.png",
    sobre: "É difícil acreditar que tudo isso rodava em um PlayStation 2. Um mundo aberto gigantesco, dezenas de atividades, personalização, uma história marcante e liberdade como poucos jogos ofereceram até hoje." },

  { id: 17, nome: "Silent Hill 2", ano: 2001, plataforma: "PlayStation 2", hallScore: 95, imagem: "assets/silent2.jpg",
    sobre: "Mais do que um jogo de terror, uma obra psicológica. Sua narrativa profunda, atmosfera angustiante e simbolismos fizeram de Silent Hill 2 uma das histórias mais marcantes já contadas nos videogames." },

  { id: 18, nome: "Elden Ring", ano: 2022, plataforma: "PC / PS4 / PS5 / Xbox", hallScore: 95, imagem: "assets/elden-ring.jpg",
    sobre: "A evolução natural da fórmula Souls. Um mundo aberto gigantesco, exploração recompensadora e liberdade para enfrentar desafios da maneira que o jogador preferir fizeram dele um marco da geração." },

  { id: 19, nome: "Resident Evil 2", ano: 1998, plataforma: "PlayStation", hallScore: 94, imagem: "assets/re2.png",
    sobre: "Pegou a fórmula do primeiro Resident Evil e elevou tudo de nível. Dois protagonistas, campanhas complementares, ambientação memorável e uma das experiências mais marcantes do gênero survival horror." },

  { id: 20, nome: "Need for Speed: Most Wanted", ano: 2005, plataforma: "PC / PS2 / Xbox / GameCube", hallScore: 94, imagem: "assets/nfs.png",
    sobre: "O auge da franquia Need for Speed. A mistura de perseguições policiais, carros lendários, sensação de velocidade e uma trilha sonora recheada de rock e metal faz desse o melhor jogo de corrida arcade de todos os tempos." },
];