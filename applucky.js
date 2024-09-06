function lucky() {
    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção HTML com o ID "resultados-pesquisa" e a armazena na variável "section".
    let searchInput = document.getElementById("search-input") // Obtém a seção HTML com o ID "search-input" e a armazena na variável "searchInput".
  
    if (searchInput.value !== "") {
      search(); // Se o campo de pesquisa não estiver vazio, chama a função search()
      return;
    }
  
    let randomIndex = Math.floor(Math.random() * dados.length); // Gera um índice aleatório

    let resultadoAleatorio = dados[randomIndex]; // Obtém o resultado aleatório
  
    let html = `
      <div class="item-resultado">
        <h2>${resultadoAleatorio.title}</h2>
        <p class="descricao-meta">${resultadoAleatorio.description}</p>
        <p class="descricao-meta">${resultadoAleatorio.example}</p>
        <a href="${resultadoAleatorio.link}" target="_blank">See more</a>
      </div>
    `;
  
    section.innerHTML = html; // Atualiza o conteúdo da seção
  }