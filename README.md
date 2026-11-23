# Portfólio de Eduardo Rauber

Portfólio de um estudante de Engenharia de Software da PUC Minas, com projetos acadêmicos, experiências de desenvolvimento e canais de contato.

**[Acessar o site publicado no Render](https://portfolio-eduardo-rauber.onrender.com)**

## Como usar

- **Home** apresenta minha formação, minhas habilidades e o que aprendi em cada projeto.
- **Projects** reúne Cuida+, Portugeses e Hidrofix em uma linha do tempo. Use as setas para navegar pelas imagens e **Ver detalhes** para abrir a descrição completa.
- **Contact** traz os links para GitHub e Instagram e um formulário de contato. O LinkedIn aparece como indisponível.

## Tecnologias utilizadas

| Tecnologia | Uso |
| --- | --- |
| React e JavaScript | Componentes e interações do portfólio |
| Vite | Servidor de desenvolvimento e build de produção |
| Material UI e Emotion | Componentes de interface e tema |
| CSS | Layout responsivo |
| React Router | Navegação entre as páginas |
| EmailJS | Envio das mensagens do formulário |
| Render | Hospedagem do site estático |

## Desenvolvimento local

Use Node.js 24 e npm. Clone o repositório e instale as dependências.

```sh
git clone https://github.com/EdRauber/portifolio-EdRauber.git
cd portifolio-EdRauber
npm ci
npm run dev
```

Abra o endereço que o Vite mostrar no terminal. Para gerar e testar o build de produção, execute:

```sh
npm run build
npm run preview
```

| Caminho | O que editar |
| --- | --- |
| `src/data/portfolio.js` | Apresentação, habilidades, experiências, projetos e referências às imagens |
| `src/data/contact.js` | Links das redes sociais |
| `public/images/` | Foto de perfil e imagens dos projetos |
| `src/theme.js` e `src/styles.css` | Tema e layout responsivo |

### Configurar o formulário

Copie `.env.example` para `.env.local` na raiz e preencha com os valores do seu painel no EmailJS.

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

No template, preencha **To Email** com o endereço de destino e **Reply To** com `{{reply_to}}`. No corpo, use `{{from_name}}`, `{{reply_to}}` e `{{message}}`. Reinicie o Vite após editar o arquivo. O envio fica desabilitado enquanto a configuração estiver incompleta.

## Publicação no Render

O `render.yaml` configura um Static Site que executa `npm ci && npm run build`, publica a pasta `dist` e reescreve as rotas para `/index.html`. Isso permite abrir e recarregar rotas como `/projects` e `/contact` diretamente.

As três variáveis do EmailJS devem estar disponíveis no ambiente do serviço durante o build. Depois de alterá-las no painel, faça um novo build e deploy.
