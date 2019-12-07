# Módulo 11 - testes no NodeJS

## Installation Steps

1.  Rodar o comando para instalar o CLI da Rocketseat que tem a função de trazer
    um projeto pré-configurado
    `yarn global add @rocketseat/omni`

2.  Rodar o comando para criar um projeto importado (especifico para server)
    `omni init modulo11 --only=server`

3.  Criar o .env do exemplo e adicionar credenciais do BD

4.  Instalar o PG para comunicação com o BD
    `yarn add pg`

5.  instalar o jest
    `yarn add jest -D`

6.  Rodar o jest
    `yarn jest --init`

7.  Configurar o jest.config.js conforme a neccessidade do projeto

8.  Adicionar o plugin do Sucrase para que os testes no jest possam usar a sintaxe
    de import/export e configurar no jest.config.js conforme instrução do desenvolvedor
    `yarn add --dev @sucrase/jest-plugin`

9.  Adicionar um Ignore no nodemon.json para a pasta "\_\_tests\_\_"

10. Adicionar o pacote que auxilia no IntelliSense do jest
    `yarn add -D @types/jest`

    Nota: Caso o IntelliSense continue sem funcionar, crie o arquivo jsconfig.json
    na raiz do projeto e adicione o seguinte código:

        {
          "typeAcquisition": {
              "include": [
                  "jest"
              ]
          }
        }

11. Criar um novo arquivo .env, agora voltado para testes
    server/.env.test

12. Configurar o storage em config/database.js

13. Criar o arquivo bootstrap.js para adicionar a condicional onde importa o .env
    correto de acordo com o ambiente, e importar o bootstrap.js no app.js

14. Configurar o NODE_ENV no script do package.json

15. Instalar o sqlite3 e configurar o config/database.js em DIalect para uso do sqlite
    `yarn add sqlite3 -D`

16. Criar uma migration para o sequelize
    `yarn sequelize migration:create --name=create-users`

17. Apenas rodar o migrate pelo terminal não será o suficiente
    `yarn sequelize db:migrate`
    logo, será criado um script com o prefixo `pre` para rodar imediantamente antes
    do script `test` em package.json
    Além disso, cria-se outro script com o prefixo `post` para rodar quando encerrado
    o serviço e apagar os dados criados no sqlite

18. Criar o model de User para fazer inserções no BD
    src/app/models/User.js

19. Criar o test para User seguindo os modelos do TDD onde voce cria o teste antes
    da funcionalidade
    \_\_tests\_\_/integration/user.test.js

20. Instalar o supertest para trabalhar com requisições voltadas para testes
    O supertest trabalha de forma similar ao axios, mas sem necessariamente ter uma porta
    aberta para fazer requisições, pode-se dizer que ele facilita para o trabalho de testes
    em requisições http.
    `yarn add supertest -D`

21. Aplicar modificações a user.test.js

22. Criar uma rota em routes.js retornando um id para validar o teste

23. Criar o UserController para configurar o método que executará a chamado da rota
    src/app/controllers/UserController.js

24. Fazer um novo teste, agora para checar quando um email estiver duplicado, para isso
    criar um novo `it()` em user.test.js, e acertar o checkEmail em UserController.js

25. Como foi duplicado os testes, a criação dos usuarios de um testes está interferido no
    outro, logo é necessário uma funçåo que limpe as variáveis criadas para cada final de teste

26. Cria-se o arquivo \_\_tests\_\_/util/truncate.js

27. Importa o truncate.js em user.test.js para limpar os dados entre testes

### Criptografia de senha

28. Instalar o bcrypt
    `yarn add bcryptjs`

29. Criar o teste para verificar se a senha criada está criptografa. Recebe-se a
    password e compara usando o bcrypt.compare()

30. Criar um addHook no Model User para pegar o password em modo virtual e transformar em hash

31.
