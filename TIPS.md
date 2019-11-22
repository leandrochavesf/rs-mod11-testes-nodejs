# Módulo 11 - testes no NodeJS

## Installation Steps

1. Rodar o comando para instalar o CLI da Rocketseat que tem a função de trazer
   um projeto pré-configurado
   `yarn global add @rocketseat/omni`

2. Rodar o comando para criar um projeto importado (especifico para server)
   `omni init modulo11 --only=server`

3. Criar o .env do exemplo e adicionar credenciais do BD

4. Instalar o PG para comunicação com o BD
   `yarn add pg`

5. instalar o jest
   `yarn add jest -D`

6. Rodar o jest
   `yarn jest --init`

7. Configurar o jest.config.js conforme a neccessidade do projeto

8. Adicionar o plugin do Sucrase para que os testes no jest possam usar a sintaxe
   de import/export e configurar no jest.config.js conforme instrução do desenvolvedor
   `yarn add --dev @sucrase/jest-plugin`

9. Adicionar um Ignore no nodemon para a pasta "\__tests_"

10. Adicionar o pacote que auxilia no IntelliSense do jest
    `yarn add -D @types/jest`

11. Criar um novo arquivo .env, agora voltado para testes
    server/.env.test

12. Configurar o storage em config/database.js

13. Criar o arquivo bootstrap.js para adicionar a condicional onde importa o .env
    correto de acordo com o ambiente

14. Configurar o NODE_ENV no script do package.json
