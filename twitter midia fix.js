// Adicionar um evento de scroll no window
window.addEventListener("scroll", function() {

  let buttonClassFeed = 'css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-173mn98 r-1s2bzr4 r-15ysp7h r-4wgw6l r-ymttw5 r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l'
  // Cria list de click com elementos de feed
  let listClick = [...document.getElementsByClassName(buttonClassFeed)];

  let midiaClass = 'css-175oi2r r-1awozwy r-1p0dtai r-zchlnj r-1cmwbt1 r-1777fci r-edyy15 r-u8s1d r-1d2f490 r-ipm5af';
  let midiaButtonClass = 'css-1qaijid r-bcqeeo r-qvutc0 r-poiln3';
  // Grid de midias
  let midiaList = [...document.getElementsByClassName(midiaClass)]
  midiaList.forEach(midiaElement => {
    let midiaButton = midiaElement.getElementsByClassName(midiaButtonClass)[1]
    // Adiciona para lista de click elementos da aba midia
    listClick.push(midiaButton)
  });


  // Clica nos botões
  listClick.forEach(element => {
    element.click();
    console.log('Elemento click');
  });


});

