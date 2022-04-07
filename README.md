# 💻 Sobre o desafio

O  principal objetivo do desafio é refatorar uma página para listagem de filmes de acordo com gênero. <br>
Utilizando uma prática no react denominada <a href="https://reactjs.org/docs/lifting-state-up.html">"(Lifting State Up) Elevação de estado" <a/>, que consiste em elevar <br> o state compartilhado ao elemento pai comum mais próximo.

A aplicação já está totalmente funcional mas grande parte do seu código está diretamente no arquivo App.tsx. <br>
  
Para resolver isso da melhor forma, é necessário dividir a aplicação em pelo menos duas partes principais: sidebar e o conteúdo principal que possui o header e a listagem de filmes.

- A aplicação possui apenas uma funcionalidade principal que é a listagem de filmes;
- Na sidebar é possível selecionar qual categoria de filmes deve ser listada;
- A primeira categoria da lista (que é "Ação") já deve começar como marcada;
- O header da aplicação possui apenas o nome da categoria selecionada que deve mudar dinamicamente.

<img src="https://github.com/valmir1227/Ignite-Componetizando-app/blob/main/.github/161743504-abad57af-3f9c-4ad6-814d-2c030e46e297.gif?raw=true" />
