# 📚 Next Book Rental

Este é um projeto em **Next.js + TypeScript** para locação de livros,
utilizando a **Open Library API** para busca e detalhes dos livros.  
O projeto segue os requisitos da task final:

- **React/Next.js**
- **Redux Toolkit + RTK Query** para consumo da API
- Persistência do carrinho no **localStorage**

---

## 🚀 Funcionalidades

- Buscar livros por título usando Open Library API
- Ver detalhes de cada livro
- Adicionar livros ao carrinho de locação
- Alterar quantidade de dias de locação
- Remover itens do carrinho
- Carrinho persistido no localStorage

---

## 📂 Estrutura de pastas

```
next-book-rental/
│── app/              # Rotas e páginas
│── components/       # Componentes de UI (Header, Footer, Navbar, BookCard)
│── store/            # Redux Toolkit + RTK Query
│── hooks/            # Custom hooks (ex.: useCart)
│── styles/           # Estilos globais
│── utils/            # Funções auxiliares (localStorage, formatters)
│── public/           # Assets estáticos
│── README.md         # Documentação
```

---

## 🔧 Instalação e execução

1. Clone o repositório ou extraia o `.zip`
2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse em [http://localhost:3000](http://localhost:3000)

---

## 🌍 API utilizada

- [Open Library API](https://openlibrary.org/developers/api)

Endpoints principais usados:
- **Busca de livros**: `https://openlibrary.org/search.json?q=TITLE`
- **Detalhes do livro**: `https://openlibrary.org/works/WORK_ID.json`

---

## 🛠️ Tecnologias

- Next.js 14 (App Router)
- React 18
- TypeScript
- Redux Toolkit
- RTK Query
- localStorage

---

## 👨‍💻 Autor

Desenvolvido por Amitair Ferreira como projeto final de Frontend da Formação Complementar Vem ser - DBC.  

