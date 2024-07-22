## Projeto Web de Match - Upik
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Descrição
Projeto web de match, onde busca uma api de imagens e o usuário da 
like nas imagens que gosta e dislike nas imagens que não gosta.

Construido utilizando a Biblioteca React, NextJS (framework do react) e o Taillwind para estilizar.

## Instrução de instalação
 Node 20.15.0
 npm install axios
 npm install react-responsive-carousel

## Informações técnicas do projeto.

# Api
Primeiramente foi lido o teste e criado o projeto (npx create-next-app@latest), logo depois foi fazer 
um get simples com o fetch(get simples nativo do JS) para entender como seria retornado a imagem no site.

Após entender isso, foi criado um array onde foi limitado pelo length em 5 imagens, após entender que retornando 5 
imagens todas estariam com o mesmo nome (600x400) não faria sentido deixar elas assim pois seria confuso e o usuário não iria saber qual imagem seria correspondente.

![alt text](image.png)

(foi usado o AXIOS por já possuir familiariedade e por ser mais explicito, mesmo sabendo que o fetch é nativo, mais amigavel, mais "humanizado" e mais fácil de entender)
![alt text](image-1.png)

useEffect foi usado para realizar chamada da api
Código a ser executado quando o efeito é disparado.
![alt text](image-4.png)

Cria uma lista de promisses para buscar 5 imagens diferentes, o response para aguardar todas as promisses serem resolvidas e armazenar as respostas.
![alt text](image-2.png)

InitialImages Cria um array de objetos ImageData com likes e dislikes inicializados em 0. SetImages atualiza o estado "images"

assim acaba a função pegaDadosApi.

![alt text](image-3.png)

# Incrementos Likes e Dislikes

Foi criada 3 funções para serem disparadas.

handleLike - onde ele percorre com o map e incrementa em +1 o numero de likes da imagem atual.
handleDislike - onde ele percorre com o map e incrementa em +1 o numero de dislikes da imagem atual.
e a handleIndexChange - onde atualiza o índice da imagem atualmente exibida.
![alt text](image-5.png)

# Estilização

Inicialmente foi usado um componente em react para visualizar o carrosel, foi setadas suas propriedades, adicionado o handleIndexChange 
e estilizado. Podendo ser utilizada outro componente ou criado o slider puro

# Considerações finais

Foi um projeto bem interessante, estava acostumado a retornar bastante JSON então esse de imagem foi bem interessante, como eu tive um tempo
maior de produção adicionei alguns itens básicos a mais a fim de melhor usabilidade e responsividade em outros dispositivos e resoluções.

Tentei explicar a lógica e a explicação da minha forma de pensar, porém se houver alguma dúvida ou pergunta, só me chamar. 



