# testeQA_DOT
PROVA PARA QA &amp; AUTOMAÇÃO DE TESTES DOT

# Projeto Cypress para Teste de Compra de Livro na Amazon

Este projeto contém testes automatizados usando Cypress para validar a compra do livro "AI Engineering: Building Applications with Foundation Models" na Amazon Brasil.

## Pré-requisitos

- Node.js (versão LTS recomendada)
- NPM (geralmente instalado junto com o Node.js)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/andersonsoares12/testeQA_DOT.git
    ```

2. Instale as dependências do projeto:

    ```bash
    npm install
    ```

3. Instale o Cypress:

    ```bash
    npm install cypress --save-dev
    ```

4. Inicie o Cypress para criar a estrutura de diretórios:

    ```bash
    npx cypress open
    ```

5. Instale o mochawesome-reporter:  gerar relatorio amigavel

    ```bash
    npm install mochawesome --save-dev
    npm install mochawesome-merge --save-dev
    npm install mochawesome-report-generator --save-dev
    npm i -D cypress-mochawesome-reporter cypress-multi-reporters mocha-junit-reporter
  
    ```
    * comando para rodar o relatorio: cypress run --browser chrome

   
## para gerar o relatorio deve ser configurado o  cypress.config.js dessa forma*

```const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
  },
});

e na pasta suport/ e2e.js 
adicionar : 
import 'cypress-mochawesome-reporter/register'
```

## Estrutura do Projeto

```text
my-cypress-project/
├── cypress/
│   ├── fixtures/
│   │   └── example.json
│   ├── integration/
│   │   └── amazon/
│   │       └── add_to_cart.spec.js
│   ├── plugins/
│   │   └── index.js
│   ├── reports/
│   ├── support/
│   │   ├── commands.js
│   │   └── index.js
├── .gitignore
├── cypress.json
├── node_modules/
├── package.json
└── README.md
