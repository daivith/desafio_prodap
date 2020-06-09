


## Solução de desafio

Solução do desafio usando Nodejs e Docker e BD falso
Link https://github.com/juniorsnts/pre-desafio-hackaton-prodap/blob/master/README.md

## Dependências e execução
Para iniciar o projeto, é necessário ter o [Nodejs](https://nodejs.org/en/download/) e [Docker](https://hub.docker.com/editions/community/docker-ce-desktop-windows) instalados

Acesse a pasta `./api` no terminal e execute:

```bash
npm install
```

## Rodando o projeto
No terminal, execute para iniciar o Docker, serão baixadas automaticamente em seu ambientes todas a depencias necessárias para isso
```bash
docker-compose up --build
```
## Rotas

* GET http://localhost:3000/pessoas executando a rota para obter a lista de pessoas.
* POST http://localhost:3000/pessoas para adicionar pessoas.
* PATCH http://localhost:3000/pessoas/{pessoa_id} atualizar pessoa
* DELETE http://localhost:3000/pessoas/{pessoa_id} deleta pessoa




