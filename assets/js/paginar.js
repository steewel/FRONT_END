function paginar(idPagina) {
  // Remover a classe 'active' do elemento atualmente ativo
  let elementoAtual = document.querySelector(".item.active");
  elementoAtual.classList.remove("active");

  // Adicionar a classe 'active' ao elemento da página selecionada
  let elementoSelecionado = document.getElementById(idPagina);
  elementoSelecionado.classList.add("active");
}
