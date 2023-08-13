# TypeScript-DIO

desenvolvido por [Nathally Souza](https://github.com/nathyts)

#### Projeto desenvolvido com conceitos básicos de typescript

### Stack

- Typescript

### Como iniciar e rodar o projeto

> Nota: Utilizar esses comandos no terminal para iniciar o typescript como um todo e as dependências.

- npm init --y
- npm i -g typescript
- npm i -g yarn
- tsc --init
- npm i -D typescript
- npm i -D ts-node-dev
- npm i -D ts-node
  > Dentro de package.json em 'scripts' deveremos adicionar a linha "dev" : "ts-node-dev app.ts"

### Caso quiser buildar em um projeto usar.

> para iniciar o typescript

    npx tsc --init

> para buildar a aplicação

    npx tsc app.ts

> Para testar o programa

    npm run dev

> Outra opção

    yarn run dev

#### Desafios

[ ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount

- Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
- Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[ ] Implementar o método de empréstimo (getLoan) na classe CompanyAccount

- Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
- Apenas contas com o status true podem fazer empréstimo

[ ] Criar um novo tipo de conta a partir da DioAccount

- Esta conta não deve receber novos atributos
- Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

[ ] Todos os atributos de qualquer conta devem ser privados

[ ] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[ ] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.
