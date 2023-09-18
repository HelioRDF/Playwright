## Pré-requisitos

- Instalar o Node

```npm install```
```npm init -y```
```npx playwright install ```
```npm install playwright```
```node teste.js```
```npm install expect```
```npx playwright codegen https://fdbidpl-tst1.outsystemsenterprise.com/```

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

- Plugin
Headless Recorder