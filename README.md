## Pré-requisitos

- Instalar o Node

- Dependências
```npm init -y```
```npm install playwright``` ou ```npx playwright install ```
```node teste.js```
```npm install expect```
```npx playwright test --ui```
```npx playwright codegen https://fdbidpl-tst1.outsystemsenterprise.com/```

-------------------------------------------------------------------------------------

- Instalar Playwright teste
```npm i -D @playwright/test ```
- Iniciar testes
```npx playwright test ```
- Iniciar testes com paralelismo
```npx playwright test --workers 4```
- Iniciar testes por arquivo
```npx playwright test first.spec.js ```
- Iniciar testes por nome
```npx playwright test -g "basic test" ```
- Iniciar testes em todos os navegadores
```npx playwright test --headed --browser "all" ```


-------------------------------------------------------------------------------------

- Instalar Jest
```npm install jest jest-playwright-preset playwright```
```npm run jest```
- reports
```npm install jest-html-reporters```


-Config em
 jest-playwright.config.js
 jest.config.js
 CustomEnvironment.js

-Criar arquivo jest.config.js
```module.exports={
    preset: 'jest-playwright-preset'
}
```
- Em package.json
```
  "scripts": {
    "jest": "jest"
  },
```



-------------------------------------------------------------------------------------
-Cucumber
```npm install playwright cucumber expect```
```npm i @cucumber/cucumber```? não sei se precisa
```npm run cucumber```

- Em package.json
```
  "scripts": {
    "cucumber": "npx cucumber-js"
  },
```
-------------------------------------------------------------------------------------

- Plugin
Headless Recorder