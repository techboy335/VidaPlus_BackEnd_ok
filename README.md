# SGHSS - Sistema de Gestão Hospitalar e de Serviços de Saúde (Back-End)

Este projeto é uma API REST desenvolvida em TypeScript com Express e SQLite3. O objetivo é gerenciar pacientes, médicos, consultas e usuários com autenticação JWT.

## 🚀 Funcionalidades

- Cadastro, edição, listagem e exclusão de **pacientes**
- Cadastro, edição, listagem e exclusão de **médicos**
- Agendamento, edição e cancelamento de **consultas**
- **Login de usuários** com autenticação e tokens JWT

## 🧰 Tecnologias

- Node.js + TypeScript
- Express.js
- SQLite3 com Knex.js
- JWT + Bcrypt

## ▶️ Como executar o projeto localmente

```bash
npm install
npx knex migrate:latest --knexfile ./src/database/knexfile.ts
npx ts-node-dev src/index.ts
```

A API estará disponível em `http://localhost:3003`

## 🧪 Testes

Todos os endpoints foram testados no Postman com autenticação JWT.  
Você pode visualizar todos os testes nesta coleção pública:

🔗 [Documentação da API no Postman](https://documenter.getpostman.com/view/44152068/2sB2ixjtYZ)

## 💻 Estrutura de pastas

- `src/controller` → Controllers das rotas
- `src/business` → Lógica de negócio
- `src/database` → Acesso ao banco de dados e configurações do Knex
- `src/models` → Tipagens das entidades
- `src/router` → Rotas da aplicação
- `src/services` → JWT, hash, ID generator

## 📁 Repositório no GitHub

Todo o código-fonte e arquivos de configuração estão disponíveis neste repositório:

🔗 https://github.com/techboy335/VidaPlus_BackEnd_ok.git


## 👨‍💻 Autor

Alexandre da Silva – RU: 4377199
