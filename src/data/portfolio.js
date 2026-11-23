function portfolioImage(filename, alt) {
  return { src: `${import.meta.env.BASE_URL}images/${filename}`, alt };
}

export const profile = {
  name: 'Eduardo Rauber',
  education: 'Engenharia de Software · PUC Minas',
  bio: 'Sou estudante de Engenharia de Software. Desenvolvo interfaces web e APIs em projetos acadêmicos, com React, Java e Spring Boot.',
  photo: portfolioImage('eu.jpg', 'Eduardo Rauber'),
};

export const skills = [
  { name: 'Front-end', tools: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { name: 'Back-end e dados', tools: ['Java', 'Python', 'Spring Boot', 'Node.js', 'MongoDB'] },
  { name: 'Ferramentas', tools: ['Git', 'GitHub', 'Figma', 'Postman', 'Notion'] },
];

export const experienceFields = [
  { key: 'role', label: 'Meu papel' },
  { key: 'challenge', label: 'Principal desafio' },
  { key: 'lesson', label: 'O que aprendi' },
];

// Mantenha a lista do projeto mais recente ao mais antigo.
export const projects = [
  {
    id: 'cuida-mais',
    name: 'Cuida+',
    period: 'Agosto a dezembro de 2026',
    teamSize: 5,
    status: 'Em andamento',
    statusNote: 'O desenvolvimento continua. A descrição é parcial, e as funcionalidades podem mudar.',
    description: 'Aplicativo móvel que ajuda pessoas idosas e quem tem pouca familiaridade com tecnologia a cuidar da própria rotina de saúde com mais autonomia.',
    about: 'O Cuida+ reúne tarefas de saúde do dia a dia em um aplicativo móvel com foco em facilidade de uso e acessibilidade. A proposta é ajudar pessoas idosas e usuários com pouca familiaridade com tecnologia a acompanhar sua rotina de saúde de forma mais independente.',
    technologies: ['React', 'Spring Boot', 'MongoDB'],
    images: [
      portfolioImage('logo_cuidamais.png', 'Logotipo do Cuida+'),
      portfolioImage('homepage_cuidamais.png', 'Tela inicial do Cuida+'),
      portfolioImage('agua.png', 'Tela de hidratação do Cuida+'),
    ],
    features: [
      'Registro de água e acompanhamento da meta diária',
      'Lembretes de medicamentos e registro das doses',
      'Quiz para personalizar atalhos e recursos',
    ],
    experience: {
      role: 'Liderei a equipe, desenvolvi interfaces em React e conduzi a integração das telas.',
      challenge: 'Aprender React em pouco tempo, orientar a equipe e integrar telas que usavam a tecnologia de maneiras diferentes.',
      lesson: 'Aprendi React e percebi como uma estrutura compartilhada e o acompanhamento da equipe facilitam a integração.',
    },
    account: {
      role: 'Liderei uma equipe de cinco integrantes que trabalhava com Scrum. Atuei como Product Owner e, durante boa parte do projeto, também como Scrum Master. Defini a estrutura inicial do código, distribuí responsabilidades e apoiei a equipe nas dificuldades de desenvolvimento. Implementei interfaces, incluindo a de hidratação e o quiz de perfil, e fui o principal responsável por integrar as telas em um sistema funcional.',
      challenge: 'Tive um prazo curto para aprender React e ajudar a equipe a adotar a tecnologia. Na integração, precisei revisar e ajustar telas que usavam React de maneiras diferentes para que funcionassem juntas.',
      lesson: 'Além de aprender React na prática, entendi a importância de combinar uma estrutura de desenvolvimento desde o início e acompanhar a equipe ao longo do trabalho. Também conheci Docker e RESTHeart e passei a entender como essas ferramentas poderiam ter facilitado o desenvolvimento.',
    },
  },
  {
    id: 'portugeses',
    name: 'Portugeses',
    period: 'Abril a julho de 2026',
    teamSize: 3,
    description: 'Jogo de dados para dois jogadores, inspirado em Farkle, com regras próprias e opção de jogar contra um robô.',
    about: 'O Portugeses nasceu como um projeto de aula para praticar algoritmos mais avançados com Python e Pygame. É um jogo de dados inspirado em Farkle, com regras próprias. Em cada partida, vence quem atingir primeiro a pontuação definida.',
    technologies: ['Python', 'Pygame'],
    images: [
      portfolioImage('mapa.png', 'Mapa do Portugeses'),
      portfolioImage('jogo.png', 'Tela de partida do Portugeses'),
    ],
    features: ['Partidas de dados um contra um', 'Modo contra um adversário controlado pelo jogo', 'Multiplayer local com ranking'],
    experience: {
      role: 'Liderei a equipe com Scrum e desenvolvi boa parte da interface, das regras e do robô adversário.',
      challenge: 'Investigar e corrigir bugs no meu primeiro projeto de grande porte em Python.',
      lesson: 'Melhorei na organização da equipe e apliquei conceitos de computabilidade na construção de algoritmos.',
    },
    account: {
      role: 'Liderei uma equipe de três integrantes como Product Owner e Scrum Master e usei o Notion para organizar o trabalho. Desenvolvi boa parte da interface, da lógica das partidas e do comportamento do robô adversário. Também trabalhei na estrutura do código e na correção de bugs.',
      challenge: 'Como era meu primeiro projeto de grande porte em Python, o principal desafio foi localizar e corrigir erros em uma base de código maior, especialmente quando envolviam a lógica das partidas.',
      lesson: 'Ganhei prática para escrever algoritmos mais eficientes e aplicar conceitos de computabilidade à programação. Também melhorei a organização do projeto e da equipe, uma habilidade que eu ainda estava desenvolvendo desde o Hidrofix.',
    },
  },
  {
    id: 'hidrofix',
    name: 'Hidrofix',
    period: 'Fevereiro a junho de 2026',
    teamSize: 5,
    description: 'Plataforma B2B que conecta empresas a encanadores para agilizar atendimentos hidráulicos urgentes.',
    about: 'O Hidrofix aproxima encanadores de empresas que precisam de atendimento hidráulico rápido. Um vazamento grave em um restaurante, mercado ou hospital, por exemplo, pode exigir que a empresa encontre um profissional o quanto antes. A plataforma ajuda empresas a encontrar encanadores e profissionais a encontrar serviços.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'JSON'],
    images: [
      portfolioImage('logo_hidrofix.png', 'Logotipo do Hidrofix'),
      portfolioImage('homepage_hidrofix.png', 'Página inicial do Hidrofix'),
    ],
    features: ['Busca de encanadores por empresas', 'Busca de serviços por profissionais', 'Foco em atendimentos hidráulicos urgentes'],
    experience: {
      role: 'Liderei minha primeira equipe de software, desenvolvi interfaces e contribuí para a integração das telas.',
      challenge: 'Comunicar prioridades e assumir a condução da equipe no meu primeiro projeto de grande porte.',
      lesson: 'Aprendi a dar orientações mais claras, alinhar expectativas e acompanhar o trabalho da equipe.',
    },
    account: {
      role: 'Liderei uma equipe de cinco integrantes no meu primeiro projeto de software em equipe no curso. Desenvolvi parte das interfaces em HTML, CSS e JavaScript, com dados estruturados em JSON. Corrigi bugs, refatorei trechos difíceis de manter e ajudei a integrar as telas.',
      challenge: 'Minha maior dificuldade foi assumir a liderança na prática. Precisei aprender a comunicar decisões, alinhar expectativas e me posicionar com clareza diante da equipe.',
      lesson: 'O projeto me mostrou que liderar também envolve orientar e acompanhar o trabalho ao longo do desenvolvimento. Apliquei esses aprendizados ao organizar e apoiar as equipes dos projetos seguintes.',
    },
  },
];
