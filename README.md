# Gympoint | GoStack 9.0

* [1. Conceitos abordados](#1-Conceitos)
* [2. Descrição do projeto](#2-Descrição)
* [3. Iniciando o projeto](#2-Iniciando)

## 1. Conceitos abordados:

  1.  Back-end:
      1.  Migration a DB SQL.
      2.  Criação de Models.
      3.  Criação de Controllers (POST / PUT / GET / DELETE).
      4.  Gerando Hash de senha.
      5.  Autenticação/Middleware de sessão JWT.
      6.  Validação de dados de cadastro via schema YUP.
      7.  utilizar multipart form data via Multer / Criar o Avatar do usuário.
      8.  Vincular arquivos a tabelas na DB (Avatar a usuário).
      9.  formatação e cálculo de datas via biblioteca 'date-fns'.
      10.  Aplicar paginação.
      11.  Envios de e-mails usando uma DB não-relacional e filas (Nodemailer e redis).
  
  2.  Front-end:
      1.  Criação e estilização de páginas, header, AvatarInput, Ações (editar, excluir). Informações acessíveis por toda a aplicação e por todas as requisições via **Redux**.
          1.  token, dados de usuário, menu, e dados de item selecionado.
      2.  Chamada a API.
      3.  usar o useState, useEffect do 'react'.
      4.  usar o useSelector, useDispatch do 'react-redux'.
  
  3.  Mobile:

## 2. Descrição do projeto:

  1.  Um aplicativo que permite o cadastro de administradores e alunos, planos e matrículas de alunos, atendimento a dúvidas.
  2.  Pelo website, os administradores cadastram alunos, planos, matriculas e respondem a dúvidas de alunos.
  3.  O aplicativo mobile permite a alunos fazerem check-in nas academias, verificar o seu plano, e perguntar as suas dúvidas.

### Front-end:
<div display="flex" flex-direction="row" justify-content="space-between">
<img src="https://github.com/MaisDennis/GoStack-GymPoint/blob/master/images/signIn.png" alt="SignIn" width="300" height="280">

<img src="https://github.com/MaisDennis/GoStack-GymPoint/blob/master/images/EnrollCreate.png" alt="EnrollCreate" width="280" height="auto">

<img src="https://github.com/MaisDennis/GoStack-GymPoint/blob/master/images/PlanList.png" alt="PlanList" width="600" height="auto">
</div>


## 3. Iniciando o projeto:

  1.  Back-end:
        ```
        docker database2
        docker redisgympoint
        yarn dev
        ```
  2.  Front-end:
        ```
        yarn start
        ```
  
  3.  Mobile
     