# listadeusuarios

Este é um projeto simples de listagem e filtragem de usuários, construído utilizando React. 
Ele permite buscar usuários pelo nome e exibir informações adicionais sobre eles ao clicar.

Funcionalidades
Busca por nome: Permite filtrar os usuários ao digitar no campo de pesquisa.

Exibição de detalhes do usuário: Ao clicar em um usuário, é exibido um modal com informações adicionais 
(website, empresa e endereço).

Design responsivo: A interface se ajusta para diferentes tamanhos de tela, 
oferecendo uma experiência amigável em dispositivos móveis, tablets e desktops.

Tecnologias Utilizadas
React: Para construção da interface.

Axios: Para realizar as requisições HTTP e obter os dados dos usuários de uma API.

CSS customizado: Estilização simples utilizando CSS para a interface do usuário.

Modal: Exibição das informações detalhadas do usuário em um modal abaixo do nome clicado.

Estratégia de Resolução
Estrutura do Projeto:

Inicialmente, criei o projeto utilizando o create-react-app.

Organizei o código em componentes para manter a estrutura modular, facilitando a reutilização de código 
e a manutenção.

A estrutura de pastas foi organizada para separar os componentes da interface (como Card, Input, Button) 
e as funcionalidades de lógica (como o UserListApp).

Busca e Filtragem:

Utilizei o estado searchTerm para armazenar o valor da busca e filteredUsers para filtragem da lista de usuários, 
que é atualizada com base no valor da pesquisa digitada no campo de busca.

O estado filteredUsers é filtrado sempre que o valor de searchTerm muda, garantindo que a lista de usuários seja atualizada em tempo real.

Modal para Detalhes do Usuário:

Quando o usuário clica em um card, o estado selectedUser é atualizado com as informações do usuário selecionado.

O modal é exibido abaixo do card, sem sobrepor outros elementos na tela, garantindo uma visualização clara das informações.

Estilização:

A estilização foi feita com CSS simples. No entanto, ao longo do desenvolvimento, uma solução baseada em TailwindCSS 
poderia ser implementada para otimizar a aparência do projeto e torná-lo mais escalável, 
porém dificultaria as intruções de execução e resolvi não implementá-lo neste caso.

O layout foi projetado para ser responsivo, utilizando unidades relativas (como vw, vh e rem) 
para garantir uma boa aparência em diferentes tamanhos de tela.

Respostas às Interações:

Ao clicar no nome de um usuário, as informações adicionais aparecem em um modal. 
A navegação foi projetada de maneira intuitiva, proporcionando uma boa experiência ao usuário.


Observações Finais
A aplicação consome dados de uma API pública (https://jsonplaceholder.typicode.com/users), 
então a exibição dos usuários depende da disponibilidade da API.

O design foi mantido simples e funcional. Caso o projeto fosse expandido, poderia ser integrado o TailwindCSS 
para otimizar a parte visual e tornar o layout mais flexível.


