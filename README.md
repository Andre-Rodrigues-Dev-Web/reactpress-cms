# Documentação do ReactPress CMS

## Introdução

O ReactPress é um CMS (Content Management System) desenvolvido em React, utilizando tecnologias como Styled Components, React Icons, React Router, PHP e MySQL. Ele é projetado para fornecer uma plataforma flexível e fácil de usar para criação e gerenciamento de conteúdo web.

Nesta documentação, você encontrará informações sobre a configuração do ambiente de desenvolvimento, recursos principais do ReactPress, como criar e gerenciar conteúdo, e como estender suas funcionalidades por meio de plugins e temas.

## Requisitos de Sistema

Antes de começar a usar o ReactPress, certifique-se de que o seu sistema atende aos seguintes requisitos:

* Node.js (versão 12 ou superior)
* NPM (Node Package Manager)
* PHP (versão 8 ou superior)
* MySQL (ou outro banco de dados compatível com o PHP)

## Instalação

Siga as etapas abaixo para instalar o ReactPress em seu ambiente de desenvolvimento:

1. Clone o repositório do ReactPress do GitHub:
   `git clone https://github.com/Andre-Rodrigues-Dev-Web/reactpress-cms.git`
2. Acesse o diretório do projeto:
   `cd reactpress`
3. Instale as dependências do frontend (React):
   `npm install`
4. Acesse o diretório do backend (PHP):
   `cd backend`
5. Instale as dependências do backend (PHP):
   `composer install`
6. Crie um banco de dados MySQL para o ReactPress.
7. Copie o arquivo de configuração `.env.example` e renomeie para `.env`.
8. Edite o arquivo `.env` e configure as informações de conexão com o banco de dados.
9. Inicie o servidor de desenvolvimento:
   `npm start`
10. Abra o navegador e acesse `http://localhost:3000` para ver a página inicial do ReactPress.

## Configuração

O ReactPress oferece opções de configuração que podem ser personalizadas de acordo com suas necessidades. O arquivo de configuração principal está localizado em `src/config.js`.

No arquivo de configuração, você pode ajustar configurações como título do site, configurações de roteamento, ícones personalizados e muito mais.

## Recursos Principais

### 1. Criação e Gerenciamento de Conteúdo

O ReactPress fornece uma interface intuitiva para criar e gerenciar conteúdo web. Ele oferece recursos como:

* Criação de páginas e posts.
* Edição de conteúdo usando um editor de texto rico.
* Organização de conteúdo em categorias e tags.
* Upload de imagens e outros arquivos de mídia.

### 2. Temas Personalizáveis

O ReactPress suporta a criação de temas personalizados para alterar a aparência do seu site. Você pode criar um tema do zero ou aproveitar os temas existentes disponíveis na comunidade ReactPress.

Os temas são construídos utilizando Styled Components e podem ser estilizados de acordo com suas preferências.

### 3. Extensibilidade com Plugins

O ReactPress suporta plugins, permitindo que você estenda suas funcionalidades de maneira modular.
