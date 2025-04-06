# 🛍️ Catálogo de Produtos - Microfrontend Angular

Este projeto é um **microfrontend** desenvolvido com Angular, que exibe um catálogo de produtos com imagens, preços e categorias. O módulo está preparado para futura integração com um **App Shell**, utilizando **Module Federation** do Webpack.

## 🚀 Funcionalidades

- Listagem de produtos com:
  - Nome
  - Preço
  - Imagem
  - Categoria
- Filtragem de produtos por categoria
- Design responsivo
- Arquitetura preparada para Module Federation

## ✅ Como rodar o projeto

### Pré-requisitos
- Node.js (versão recomendada: 18.x ou superior)
- Angular CLI (versão usada no projeto: Angular 17)
- npm (vem com Node.js)
- Git (opcional, caso for clonar o repositório)

### Passo a passo
```bash
# Clone o repositório (se ainda não tiver clonado)
git clone <url-do-repositório>
cd catalogo-produtos
# Instale as dependências
npm install
# Inicie a aplicação
npm start
A aplicação estará disponível em: http://localhost:4200
```

## ✅ O que foi feito
- Catálogo de produtos com nome, imagem e preço.
- Organização por categoria.
- Layout responsivo, adaptável a dispositivos móveis.
- Componentes independentes com Angular standalone.
- Configuração com Webpack Module Federation.
- Preparado para futura integração com App Shell.

## 🧠 Decisões técnicas
- Module Federation: Escolhido para permitir integração independente do microfrontend com um App Shell.
- Standalone Components: Utilização de componentes standalone do Angular para melhor modularidade e simplicidade.
- State Management: Gerenciamento simples de estado com serviços Angular (services/). Pode evoluir futuramente para NgRx ou outro estado global.
- Responsividade: Design mobile-first com media queries e layout flexível usando Flexbox.
- Separação de responsabilidades: O código está dividido em pastas por função, seguindo boas práticas de arquitetura Angular.

## 🧱 Estrutura do projeto
src/
├── app/
│   ├── catalogo/           # Componente principal do catálogo de produtos
│   ├── lista-produtos/     # Lista de exibição dos produtos por categoria
│   ├── models/             # Interfaces e tipos de dados dos produtos
│   └── app.*               # Componentes e arquivos principais da aplicação
├── assets/
│   └── images/             # Imagens dos produtos
├── styles.css              # Estilos globais
├── bootstrap.ts            # Bootstrap do microfrontend (para Module Federation)
├── main.ts                 # Ponto de entrada da aplicação Angular
└── index.html              # HTML principal da aplicação

## 📦 Versões utilizadas
Angular: v17.x  
Node.js: v18.x (ou compatível)  
@angular-architects/module-federation: v17.x  
Webpack: integrado via Angular CLI