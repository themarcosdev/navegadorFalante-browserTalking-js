

//usando metodo para pegar todas as vozes e filtramos em pt-br
const voice = speechSynthesis.getVoices().filter((voice)=>voice.lang.includes("pt-BR"))[0]// isso retorna um array e quero apenas um elemento.

// criando a função de play e def que irá pegar o está no documento com o id fala
function play(){
  //recebendo o input do id=texto
  const input = document.querySelector("#texto");
  
  // definindo que a const fala é o que recebemos do input;
  const fala = input.value;

  //criando o utterance que é um parametro para a nossa api
  const utterance = new SpeechSynthesisUtterance(fala);
  
  //definindo que o utterance ira usar a voz que eu filtrei
  utterance.voice = voice;
  // consumindo uma api, ela precisa do utterence como parâmetros 
  speechSynthesis.speak(utterance);

}

