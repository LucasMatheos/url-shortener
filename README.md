# URL - Shortener

---

## Descrição

 

O projeto consta com um backend para o encurtador de URL, desenvolvido em [NodeJs](https://nodejs.org/en/) e [TypeScript](https://www.typescriptlang.org), utilizando o [MongoDB](http://mongodb.com) como banco de dados.

## Endpoints

`post("/shortener”)`  que recebe uma `originURL` pelo body da requisição, caso a url  já escista, o retorno será o `shortURL` (URL encurtada), caso não, criará um novo `hash` para a `originURL` que sera salvo no banco de dados na collection urls.

`get("/:hash")` redireciona, caso a `hash` do encurtador exista, para a pagina designada.

### Uso

Clonar o repositório utilizando o `git clone` ou baixa-lo compactado como .`zip`.

Abrir o a pasta do repositório e instalar as dependências do `package.json` utilizando o `yarn` ou `yarn install`

Iniciar o modo de desenvolvimento utilizando o `yarn dev`

Instalar o `Insomnia` ou `Postman`

Criar a requisição com método POST `http://localhost:5000/shortener`

Utilizar o body enviando um json na forma :

```jsx
{
"originURL": "[https://www.google.com.br](https://www.google.com.br/)" //Exemple
}
```

Retorno:

```jsx
{
	"hash": "naiCYp8md",
	"originURL": "https://www.google.com.br",
	"shortURL": "http://localhost:5000/naiCYp8md",
	"_id": "62af101c3b9bd1ef2233f255",
	"__v": 0
}
```

Utilizar o `hash` a partir do browser: `http://localhost:5000/naiCYp8md` para testar o redirecionamento.

###
