# Gympoint | GoStack 9.0

* [1. Conceitos abordados](#1-conceitos-abordados)
* [2. Descrição do projeto](#2-descrição-do-projeto)
* [3. Iniciando o projeto](#2-iniciando-o-projeto)

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

### Front-end

### Sign In
<img src="https://github.com/MaisDennis/GoStack-GymPoint/blob/master/images/signIn.png" alt="SignIn" width="100%" height="auto">

### Criar matrícula de aluno
<img src="https://github.com/MaisDennis/GoStack-GymPoint/blob/master/images/EnrollCreate.png" alt="EnrollCreate" width="100%" height="auto">

### Lista de planos de alunos
<img src="https://github.com/MaisDennis/GoStack-GymPoint/blob/master/images/PlanList.png" alt="PlanList" width="100%" height="auto">

## 3. Iniciando o projeto:

### 1. Back-end:
       ```
       docker database2
       docker redisgympoint
       yarn dev
       ```
### 2. Front-end:
       ```
       yarn start
       ```
  
### 3. Mobile
       Esse projeto foi desenvolvido para o ambiente mobile.
       No desenvolvimento do projeto foi usado o emulador mobile: Genymotion.
       Instruções para a instalação do Genymotion:
       https://docs.rocketseat.dev/ambiente-react-native/android/emulador
       Iniciar o GenyMotion:
       ```
       ./genymotion (na pasta genymotion)
       ```
       Dentro da pasta do projeto, Para iniciar o bundle:
       ```
       yarn react-native start
       ou
       yarn react-native start --reset-cache
       ```
       Redirecionamento de porta para o uso do debugger: Reactotron.
       ```
       adb reverse tcp:9090 tcp:9090 ( redirecionar à porta do Reactotron)
       ```
       Iniciar o app:
       ```
       yarn react-native run-android
       ```
       obs. O aplicativo foi desenvolvido para o ambiente Android.

