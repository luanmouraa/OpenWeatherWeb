var content = document.getElementById("content");
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const KEY = "f7d753a72cc16aef58a6b8647ef7ea4a";

const corpoHTML = document.getElementById("corpo");
// Apaga HTML de exemplo
// corpoHTML.innerHTML = "";


async function criarCartao(nome) {
  const URL = BASE_URL + "?q=" + nome + "&lang=pt_br" + "&appid=" + KEY ;

  const resp = await fetch(URL);
  const json = await resp.json();
  
  const cidade = json.name;
  const data = (new Date()).toLocaleDateString();
  const imagem = 'http://openweathermap.org/img/wn/10d@2x.png' + json.weather[0].icon +'@2x.png';
  const temperatura = (json.main.temp - 273).toFixed(1); // converte para celsius

  let cartao = "<div class='cartao'>";
  cartao += "<div class='cabecalho'>";
  cartao += `<div class='dia'>${cidade}</div>`;
  cartao += `<div class='data'>${data}</div>`;
  cartao += "</div>";
  cartao += "<div class='corpo'>";
  cartao += `<div class='temperatura'>${temperatura}º</div>`;
  cartao += `<img class='icone' src='${imagem}' />`;
  cartao += "</div>";
  cartao += "<div class='rodape'>Open Weather Map</div>";
  cartao += "</div>";

  return cartao;
}

function adicionar() {
  const cidade = document.getElementById("cidade").value;
  console.log(cidade);
  
  criarCartao(cidade).then(cartao => {
    corpoHTML.innerHTML += cartao;
  });
}