# <img src="https://github.com/vinicius-hso/api-sem3-target-crm/blob/development/target/public/favicon.svg" width="30"/> TARGET CRM
Aplicação de gerenciamento de relações com clientes

Nesta branch estão dispostos todos os códigos em ambiente de desenvolvimento da Aplicação TARGET utilizando TypeScript, Node.js, e React.

A aquitetura da aplicação é explicada pela seguite imagem:
<p align="center">
 <img src="https://github.com/vinicius-hso/api-sem3-target-crm/blob/Sprint-1/Documentation/arquitetura-da-aplicação.jpeg"/></p>

## AMBIENTE DE DESENVOLVIMENTO:

### Requerimentos do Sistema
- [Node.js](https://nodejs.org/en/download/)
- [docker](https://www.docker.com) e [docker-compose](https://docs.docker.com/compose)
- [yarn](https://yarnpkg.com/en)

### Inicializando o projeto - BACKEND:

Na pasta "backend" via terminal:
  - rode `yarn` para instalar dependências
  - crie um aquivo na raiz do projeto chamado `.env` copie os valores do `.env.exemple` para ele;
  - rode `docker-compose up -d`;
  - rode `yarn typeorm migration:run`;
  - rode `yarn dev`;
  - acesse `http://localhost:3333`;

<p align="center">
 <img src="https://github.com/vinicius-hso/api-sem3-target-crm/blob/Sprint-1/Images/localhost_3333.png"/></p>

### Inicializando o projeto - FRONTEND:

Na pasta "target" via terminal:
  - rode `yarn` para instalar dependências
  - rode `yarn dev`;
  - acesse `http://localhost:3000`;
  
<p align="center">
 <img src="https://github.com/vinicius-hso/api-sem3-target-crm/blob/Sprint-1/Images/localhost_3000.png"/></p>

## ESTRUTURA DO PROJETO

Para a organização do projeto foram utilizadas [Referência de Projeto em Typescript](https://www.typescriptlang.org/docs/handbook/project-references.html)

Para acessibilidade e experiência do usuário utilizamos como referência o manual [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

<p align="center">
 <img src="https://github.com/vinicius-hso/api-sem3-target-crm/blob/Sprint-2/Images/Estrutura_development.png"/></p>
 

## TECNOLOGIAS UTILIZADAS
- [TypeScript](http://www.typescriptlang.org/)
- Backend
    - [Node.js](https://nodejs.org)
    - [Express](https://expressjs.com/)
       - [PostgreSQL](https://www.postgresql.org/) como SGBD
        - [TypeORM](http://typeorm.io) para código primário e migrações do Banco de dados
- Frontend
    - [React](https://reactjs.org/)
    - [UI Biblioteca](https://material-ui.com/pt/) para estilização dos componentes
    - [NextJS](https://nextjs.org) para sistema de rotas
- Developer environment
    - [docker](https://www.docker.com/) e [docker-compose](https://docs.docker.com/compose)
    - VSCode
- Testing
    - Testes funcionais da aplicação e apropriada documentação

## CONTRIBUIÇÃO

- "Features", "issues reports" e "bug fixes" são bem vindos!


### 👨‍💻 Equipe

### 👨‍💻 Equipe

| Aluno(a)         | Função           | GitHub                                                         | LinkedIn                                              |
| ---------------- | ---------------- | -------------------------------------------------------------- | ----------------------------------------------------- |
|__Debora Faria__  | *Developer Team*  | [![](https://bit.ly/3f9Xo0P)](https://github.com/deborafaria01)| [![](https://bit.ly/2P1ZogM)](https://bit.ly/2QwcT8R) |
|__Hariel Thums__  | *Tech Lead Backend* | [![](https://bit.ly/3f9Xo0P)](https://github.com/HarielThums)  | [![](https://bit.ly/2P1ZogM)](https://bit.ly/3f9bjUH) |
|__Jonathan Assis__| *Developer Team* | [![](https://bit.ly/3f9Xo0P)](https://github.com/Jonathan-Assis) | [![](https://bit.ly/2P1ZogM)](https://www.linkedin.com/in/jonathan-gabriel-/) |
|__Mariana Assis__ | *Scrum Master* | [![](https://bit.ly/3f9Xo0P)](https://github.com/mariana299)   | [![](https://bit.ly/2P1ZogM)](https://bit.ly/3foKv3d) |
|__Matheus Costa__| *Developer Team* | [![](https://bit.ly/3f9Xo0P)](https://github.com/MatheusCoxxxta?tab=repositories) | [![](https://bit.ly/2P1ZogM)](https://www.linkedin.com/in/matheus-costa-500695187/) |
|__Rita de Cássia__| *Developer Team* | [![](https://bit.ly/3f9Xo0P)](https://github.com/ferreirarita) | [![](https://bit.ly/2P1ZogM)](https://www.linkedin.com/in/rita-ferreira-894ba1200/) |
|__Sarah Ribeiro__| *Developer Team* | [![](https://bit.ly/3f9Xo0P)](https://github.com/Sarah6197) | [![](https://bit.ly/2P1ZogM)](https://www.linkedin.com/in/sarah-fernandes-494000196/) |
|__Vinícius Oliveira__| *Product Owner*| [![](https://bit.ly/3f9Xo0P)](https://github.com/vinicius-hso) | [![](https://bit.ly/2P1ZogM)](https://bit.ly/3fdl0BE) |
|__Willian Rodrigues__| *Tech Lead Frontend* | [![](https://bit.ly/3f9Xo0P)](https://github.com/Willian-Rodrigues) | [![](https://bit.ly/2P1ZogM)](https://www.linkedin.com/in/willianrsilva/)| 
  




