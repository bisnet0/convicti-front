# 🚀 Conectando a API Laravel e Configuração do Frontend

## _`— Desenvolvido e documentado por Henrique Bisneto —`_

---

### 📌 Configuração inicial

1. **Conecte a API Laravel** e, logo após, siga as instruções abaixo para configurar o ambiente corretamente.

2. **Configure as variáveis de ambiente** com as Secrets do OAuth 2.0 da API. Utilize o arquivo `.env` conforme o modelo abaixo:
```.env
   VITE_APP_API_BASE_URL=http://localhost:8080
   VITE_APP_CLIENT_ID=Exemplo: [9e790fd6-cd5b-444f-8b1d-2eec61d5af25]
   VITE_APP_CLIENT_SECRET=Exemplo: [lSK6TbhZ7d8yKcZRwN0c5EaigvCEOsiObdc5rqDe]
```
---

Certifique-se de desabilitar o CORS para o Laravel 11:
`php artisan config:publish cors` vai gerar um arquivo `cors.php ` e em seguida adicione `'*'` no fnal de paths

```php
<?php

return [

    /*
  ADICIONE O ASTERISCO DENTRO DA ASPAS SIMPLES NO FINAL DE PATHS PARA PERMITIR AS REQUISIÇÕES
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie', '*'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['*'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
```

### 📦 Instalando as dependências

Execute o seguinte comando para instalar todas as dependências do projeto:

   npm install

---

### 🚀 Iniciando o projeto

Para rodar o ambiente de desenvolvimento, utilize:

   npm run dev

---

### ✅ Configuração recomendada do IDE

Para melhor experiência de desenvolvimento, utilize:

- VSCode (https://code.visualstudio.com/) com a extensão Volar (https://marketplace.visualstudio.com/items?itemName=Vue.volar) (desative o Vetur se estiver ativado).

---

### 🔧 Configuração personalizada

Veja a Referência de Configuração do Vite (https://vite.dev/config/) para ajustes adicionais.

---

### 🛠️ Comandos adicionais

**Compilar e otimizar para produção:**

   npm run build

**Executar testes unitários com Vitest (https://vitest.dev/):**

   npm run test:unit

**Executar testes end-to-end com Cypress (https://www.cypress.io/):**

   npm run test:e2e:dev

**Lint do código com ESLint (https://eslint.org/):**

   npm run lint

Agora, o projeto estará pronto para ser acessado! 🎉

---

✅ **Tudo pronto!** Se precisar de ajuda, sinta-se à vontade para entrar em contato. 🚀

