> npm init
> npm install
> npm i -D @playwright/test 
> npx playwright install
> npx playwright test

- Abrir o navegador e executar em todos os browsers todos os arquivos.
> npx playwright test --headed --browser=all 

- Executar de acordo com o nome do arquivo
> npx playwright test /second.spec.js
> npx playwright test /first

- Executar teste de acordo com o nome
> npx playwright test -g 'login test'

- Executar teste definindo a quantidade de workes
> npx playwright test --workers 1


- Executar teste dividindo em shards exemplo: 1/3, 2/3, 3/3
> npx playwright test --shard=1/3