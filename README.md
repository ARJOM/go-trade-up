# go-trade-up

Caso o link não esteja com acesso significa provavelmente que excedemos o limite gratuito de algum serviço de deploy que usamos.
Para executar esse sistema localmente você precisará do npm instalado na sua máquina.
Para testar esse repositório localmente execute os passoas a seguir:

- Clone o repositório
  
  `git clone https://github.com/ARJOM/go-trade-up.git`
- Acesse o diretório do projeto
  
  `cd go-trade-up`
- Acesse a pasta do backend
  
  `cd backend`
- Instale as dependências
  
  `npm i`
- Execute as migrações

  `npx knex migrate:latest`
- Inicie o servidor
  
  `npm start`

- Em outro terminal, dentro do diretório go-trade-up, acesse a pasta do frontend
  
  `cd frontend`
- Instale as dependências
  
  `npm i`
  
- Acesse o arquivo src/services/api.js e mude o basic url para
  
  `http://localhost:3000/`

- Inicie o servidor
  
  `npm start`
