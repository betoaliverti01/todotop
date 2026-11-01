# 📝 TodoTop - Task Widget Retro

O **TodoTop** é uma aplicação de lista de tarefas (To-Do List) com uma estética vintage inspirada nos widgets de computador dos anos 80. O projeto foi desenvolvido como parte do **Desafio 3** dos estudos de Google AI Studio e Antigravity.

## 🎯 Objetivo do Projeto
O objetivo deste desafio era criar uma aplicação web simples, funcional e visualmente atraente, focando em conceitos de Front-End (HTML, CSS e JavaScript) e UX/UI, simulando a interface de um pequeno aplicativo flutuante de desktop retrô.

## 🚀 Funcionalidades
- **Adicionar Tarefas:** Permite a inserção de novas atividades rapidamente.
- **Concluir Tarefas:** Marcação de tarefas finalizadas com feedback visual imediato.
- **Remover Tarefas:** Exclusão de itens individuais da lista.
- **Contadores em Tempo Real:** Exibição da quantidade de tarefas pendentes e concluídas.
- **Estado Vazio:** Interface amigável e ilustrada quando não há tarefas na lista.
- **Persistência de Dados:** Utiliza `localStorage` do navegador para salvar as tarefas, permitindo que os dados permaneçam disponíveis mesmo após fechar a página.

## 🎨 Design e Identidade Visual
A interface foi projetada para evocar nostalgia, utilizando:
- **Paleta de Cores:** Tons pastéis (Rosa, Azul, Verde e Creme).
- **Tipografia:** Combinação de fontes pixeladas (`Press Start 2P`) e monoespaçadas (`IBM Plex Mono`).
- **Estética:** Bordas sólidas, sombras suaves e elementos que remetem às janelas do Windows clássico.
- **Diferenciação Visual:** Tarefas concluídas assumem um tom de verde suave e recebem um efeito de texto riscado.

## 🛠️ Tecnologias Utilizadas
- **HTML5**: Estrutura semântica.
- **CSS3 / Tailwind CSS**: Estilização moderna via CDN com customizações para o efeito retrô.
- **JavaScript (ES6+)**: Lógica de funcionamento e persistência.
- **Google Fonts**: Tipografias especializadas.

## 📂 Estrutura de Arquivos
- `index.html`: Arquivo principal com a estrutura e links de dependências.
- `style.css`: Estilos personalizados e animações.
- `script.js`: Lógica de manipulação de dados e interface.
- `assets/`: Pasta destinada a recursos visuais.

## ⚙️ Como Executar
Como se trata de uma aplicação estática, não é necessário instalar dependências ou compiladores:
1. Faça o download ou clone o repositório.
2. Abra o arquivo `index.html` em qualquer navegador web moderno.

## ✅ Testes Realizados
Foram validados os seguintes fluxos:
- [x] Inclusão de tarefas (validação de campos vazios).
- [x] Alternância de status (pendente $\leftrightarrow$ concluído).
- [x] Remoção de itens da lista.
- [x] Persistência de dados via `localStorage` (refresh da página).
- [x] Atualização automática dos contadores de status.
- [x] Responsividade básica e carregamento de fontes/estilos via CDN.

---
**Desenvolvedor:** Beto Aliverti  
*Projeto desenvolvido durante os estudos de Google AI Studio e Antigravity, com auxílio de Inteligência Artificial.*
