let selectID = document. getElementById ("selectOpt"); //guarda a referencia do <select>
let hr = document.getElementById("myHR"); //guarda a referencia do <hr>
let error = document.getElementById("error");//guarda a referencia do <p>

function getDataSW(id) {
    fetch(`https://swapi.py4e.com/api/people/${id}`)    //faz a requisição para a API
    .then(handleErrors) //verifica se houve erro
    .then((res) => res.json()) //Tranforma num objecto JS
    .then((json) => adicionaCaoInfo(json)) //imprime na consola o objecto
    .catch((err) => {
        error.innerHTML = err; //mostra o erro no paragrafo
    })
}

function adicionaPessoaInfo(json) {
    let html = `<div class=”comentario”> 
     <h2>${json.name}</h2>
      <p>Altura: ${json.height}</p> 
      <p>Cor-Cabelo: ${json.hair_color}</p> 
      <p>Sexo ${json.gender}</p> 
      <p>Data-Nascimento: ${json.birth_year}</p> 
     </div>`;
    hr.insertAdjacentHTML("afterend", html);
}

function adicionaCaoInfo(json) {
    let html = `<div class=”comentario”> 
     <img src="${json.message}" alt="Cão">
        </div>`;
    hr.insertAdjacentHTML("afterend", html);
}

selectID.addEventListener("change", function () {
    const id = selectID.value;
    console.log(id);
    getDataSW(id);
});

function handleErrors(res) {
    if (!res.ok) {
      throw Error(res.status + " - " + res.url);
    }
    return res;
  }
  