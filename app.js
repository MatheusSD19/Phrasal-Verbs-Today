function search() {
  let section = document.getElementById("resultados-pesquisa"); // Obtém a seção HTML com o ID "resultados-pesquisa" e a armazena na variável "section".
  let searchInput = document.getElementById("search-input").value // Obtém a seção HTML com o ID "search-input" e a armazena na variável "searchInput".
 
  if (searchInput == "") {  // se searchInput for uma string vazia
      section.innerHTML = "<p>Enter a term or try your Luck :)</p>"
      return // impede que a função continue
  }
  
  searchInput = searchInput.toLowerCase(); // Torna tudo que estiver em searchInput em letra minúscula

  let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML
  let title = ""; // Variável criada para utilizar o toLowerCase
  let description = ""; // Variável criada para utilizar o toLowerCase

  for (let dado of dados) {  // Itera sobre cada elemento "dado" no array "dados"

      title = dado.title.toLowerCase() // Torna o conteúo de title em letra minúscula
      description = dado.description.toLowerCase() // Torna o conteúo de description em letra minúscula

      if (title.includes(searchInput) || description.includes(searchInput)) { // se  title ou (||) description includes searchInput, então faça...
        
      resultados += ` 
        <div class="item-resultado">
            <h2>
                <p>${dado.title}</p>
            </h2>
            <p class="descricao-meta">${dado.description}</p>
            <p class="descricao-meta">${dado.example}</p>
            <a href="${dado.link}" target="_blank">See more</a>
        </div>
    `;
    }
       
  }

  if (!resultados) { // Se nenhum resultado for encontrado, então... - A exclamação é usada para caso nao exista nada para exibir
      resultados = "<p>Sorry, no results found :(</p>"
  }

  section.innerHTML = resultados; // Isso substitui o conteúdo HTML existente da seção pelos resultados da pesquisa formatados.

}

