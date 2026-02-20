
🌦️ Clima Look

Aplicação web que sugere o tipo de roupa ideal para usar durante o dia e à noite com base na temperatura máxima e mínima informada pelo usuário.

O projeto foi desenvolvido para portfólio, com o objetivo de praticar desenvolvimento web fullstack (frontend, backend e banco de dados), aplicando validações, organização de projeto, integração entre camadas e boas práticas de segurança.


Funcionalidades

-Informar temperatura máxima e mínima manualmente
-Sugestão automática de roupas para dia (máxima) e noite (mínima)
-Alternar entre dia e noite com animação
-Validação para impedir que a temperatura mínima seja maior que a máxima
-Registro de acessos no banco de dados MySQL
-Layout em uma única página
-Design responsivo para desktop e mobile
-Footer com link para o GitHub


Regras de sugestão de roupas (baseadas em minhas preferências)

-Partes de cima
Menor que 10°C: casaco de frio
Menor que 16°C: blusa com casaco
Menor que 20°C: blusa longa
Menor que 28°C: blusa de manga curta
Igual ou maior que 28°C: regata

-Partes de baixo
Menor ou igual a 8°C: calça quente/dupla
Menor ou igual a 22°C: calça
Maior que 22°C: shorts


Tecnologias utilizadas

-Frontend
HTML5
CSS3 (layout responsivo e animações)
JavaScript

-Backend
Node.js
Express
CORS

-Banco de dados
MySQL


Estrutura de pastas

clima-look
├─ public
│ ├─ index.html
│ ├─ css
│ │ └─ style.css
│ └─ js
│ └─ script.js
├─ database.sql
├─ db.js
├─ server.js
├─ .env
├─ .gitignore
├─ package.json
└─ package-lock.json


Banco de dados

O projeto possui um arquivo database.sql que cria automaticamente o banco e a tabela de acessos.
A tabela armazena a temperatura máxima, mínima, cidade e a data/hora do acesso.



--Como rodar o projeto localmente--

Clone o repositório
git clone https://github.com/GiuliaGuizzoBS/clima-look.git

Entre na pasta do projeto
cd clima-look

Instale as dependências
npm install

Crie um arquivo .env na raiz do projeto com as variáveis de ambiente do banco de dados
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=clima_look

O arquivo .env não deve ser versionado por segurança.

Crie o banco de dados executando o arquivo database.sql no MySQL Workbench

Inicie o servidor
node server.js

Acesse no navegador:
http://localhost:3000

Segurança

As credenciais do banco de dados são armazenadas em variáveis de ambiente.
O arquivo .env não é versionado no GitHub.
Boas práticas de separação entre código e dados sensíveis foram aplicadas.


Objetivo do projeto

Este projeto foi criado para treinar:

lógica de programação
integração entre frontend e backend
uso de banco de dados
validação de dados no frontend
organização de projeto
Além disso, é uma aplicação útil para o dia a dia, ajudando na escolha de roupas conforme a temperatura.

Autora

Giulia Guizzo Baladão Santos
GitHub: https://github.com/GiuliaGuizzoBS

