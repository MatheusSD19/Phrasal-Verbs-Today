let searchInput = document.getElementById("search-input"); // Obtém a seção HTML com o ID "search-input" e a armazena na variável "searchInput".

searchInput.addEventListener("keypress", (event) => { //Adiciona um "ouvinte de eventos" ao elemento searchInput

  if (event.key === "Enter") { // Se a tecla pressionada for "Enter", chama a função "search()"
    
    search();

  }

});