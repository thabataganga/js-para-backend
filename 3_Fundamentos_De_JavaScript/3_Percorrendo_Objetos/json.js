const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
})

console.log(jsonLivro)

const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)


/* O processo de converter estruturas de dados em sequências de bytes ou caracteres. como no caso do JSON, é chamado de serialização */