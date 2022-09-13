function Card(filme) {
    let card = document.createElement("div")
    card.classList.add("card")
    
    let poster = document.createElement("img")
    poster.src = filme.poster
    poster.alt = "Poster do filme " + filme.titulo
    
    let titulo = document.createElement("p")
    titulo.innerText = filme.titulo
    
    let divNota = document.createElement("div")
    divNota.classList.add("nota")
    
    let estrela = document.createElement("span")
    estrela.classList.add("material-icons")
    estrela.classList.add("estrela")
    estrela.innerText = "star"
    
    let nota = document.createElement("span")
    nota.innerText = filme.nota
    
    divNota.appendChild(estrela)
    divNota.appendChild(nota)
    
    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerText = "detalhes"
    
    card.appendChild(poster)
    card.appendChild(titulo)
    card.appendChild(divNota)
    card.appendChild(botao)

    return card
}

const dados = 
[
    {
        poster: "https://www.themoviedb.org/t/p/original/25biyygJ8FECofsQjKIvAxekiMm.jpg",
        titulo: "Homem-Aranha: Sem Volta Pra Casa",
        nota: "Nostalgia"
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/rvX8f3QuUkYtirO0hL9CoeXMzkv.jpg",
        titulo: "Jurassic World Dominion",
        nota:"O melhor da trilogia"
    },
    {
        poster:"https://www.themoviedb.org/t/p/original/4NphuHmnuROLqCjAEr5LS7Aage6.jpg",
        titulo:"Halloween Kills",
        nota:"A volta do slasher"
    }
]


let fimles = document.querySelector("#filmes")
dados.forEach((filme)=>{fimles.appendChild(Card(filme))})
