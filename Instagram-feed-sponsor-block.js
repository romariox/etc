// Criar uma função de filtro que recebe um array de elementos
function filterElements(elements) {

  let sponsorString = 'Patrocinado'


  // Filtrar apenas os elementos que contêm a string "PatrocinadoO"
  let filtered = elements.filter(function(element) {
    if (element.innerText.includes(sponsorString) && !(element.style.display == 'none'))
    {
      // element.remove();
      // element.style.display = 'none';
      element.innerText = ''
      console.log('elemento removido ou escondido')
    };
  });
}

// Adicionar um evento de scroll no window
window.addEventListener("scroll", function() {
  // Pegar todos os elementos <article> e transformá-los em um array
  let list = [...document.getElementsByTagName('article')];
  // Chamar a função de filtro com o array de elementos
  filterElements(list);
});
