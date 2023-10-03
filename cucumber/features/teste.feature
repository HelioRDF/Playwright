Feature: PaginaLogin

Scenario: Login com Sucesso

Given Que estou na página xpto
When informar email
And informar senha
And clicar em login
Then acesso a pagina home