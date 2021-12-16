const apiUrl = 'http://localhost:3000'

let modoEdicao = false;
let idEdicao = 0;

const lista = document.getElementById('lista');

const getFilmes = async () => {
    
    const chamadaApi = fetch(`${apiUrl}/filmes/get-filmes`)
    chamadaApi.then((response) => {
      
    })
    .then((filmes) => {
        
    })
    const response = await fetch(`${apiUrl}/filmes/get-filmes`);
    const filmes = await response.json();
    filmes.map((filme) => {
    
        lista.insertAdjacentHTML('beforeend', `
<div class="col"> 
<div class"col">
        <div class="card"  style="width: 18rem;">
        <div class="img-banner">
        <img src="${filme.imagem}" class="card-img-top" alt="...">

        </div>
  <div class="card-body">
    <h5 class="card-title">${filme.Filme}</h5>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">Gênero: ${filme.Gênero}</li>
    <li class="list-group-item">Assistido: ${filme.Assistido}</li>
    <li class="list-group-item">Nota: ${filme.Nota}</li>
  </ul>
  <div class="card-body">
  <button class="btn btn-primary" onclick="putFilmes(${filme.id})">Editar</button>
  <button class="btn btn-danger" onclick="deleteFilme(${filme.id})">Deletar</button>
   <h3 class="checkText"> Marque se já assistiu: </h3>
  <input type="checkbox" class="btnAssistido" id="btnAssistido" ${filme.Assistido == 'sim' ? 'checked' : ''}  onclick="btnAssistido(event,${filme.id})"></input>
  </div>
</div>
</div> 
</div>

        `)
    })

}

getFilmes();


const escolherFilme = async () => {
   
    const idDigitado = document.getElementById('idFilme').value;
    
    const response = await fetch(`${apiUrl}/filmes/get-by-id/${idDigitado}`)
    
    const filme = await response.json();

    document.getElementById('filme').insertAdjacentHTML('beforeend', `
        <tr>
            <td>${filme.id}</td>
            <td>${filme.Filme}</td>
            <td>${filme.Gênero}</td>
            <td>${filme.Assistido}</td>
            <td>${filme.Nota}</td>
            <td>${filme.imagem}</td>


            </tr>
    `)
}

const submitForm = async () => {

const Filme = document.getElementById('Filme').value;
const Gênero = document.getElementById('Gênero').value;
const Assistido = document.getElementById('Assistido').value;
const Nota = document.getElementById('Nota').value;
const imagem = document.getElementById('imagem').value;


console.log(Filme, Gênero, Assistido, Nota, imagem)

const objetoFilme = {
    Filme,
    Gênero,
    Assistido,
    Nota,
    imagem
}
console.log(objetoFilme)


if (modoEdicao){
const response = await fetch(`${apiUrl}/filmes/update/${idEdicao}`, {
    method: 'PUT',
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(objetoFilme)
    
})
 const data = await response.json();
 alert(data.message)
 modoEdicao = false;
 idEdicao = 0;
}else{
    const response = await fetch(`${apiUrl}/filmes/create`, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(objetoFilme)
    })
     const data = await response.json();
     alert(data.message)};


    lista.innerHTML = "";

getFilmes();
 limpaCampos();
 
}

const putFilmes = async (id) => {
  modoEdicao = true;
  idEdicao = id;
  const result = await getById(id);
 
document.getElementById('Filme').value = result.Filme
document.getElementById('Gênero').value = result.Gênero
document.getElementById('Assistido').value = result.Assistido
document.getElementById('Nota').value = result.Nota
document.getElementById('imagem').value = result.imagem

}

const getById = async (id) => {
    const response = await fetch(`${apiUrl}/filmes/get-by-id/${id}`);
    const filme = await response.json();
    return filme
};

const deleteFilme = async  (id) => {
const response = await fetch(`${apiUrl}/filmes/delete/${id}`, {
    method: 'DELETE'
});
const result = await response.json();
alert(result.message);
lista.innerHTML = "";
getFilmes();

};

const limpaCampos = () => {
 document.getElementById('Filme').value = "";
 document.getElementById('Gênero').value = "";
 document.getElementById('Assistido').value = "";
 document.getElementById('Nota').value = "";
 document.getElementById('imagem').value = "";

}

const btnAssistido = async (event, id) => {
const checked = event.target.checked
const filme = await getById(id)

console.log(event.target.checked)

if (checked){
    filme.Assistido = 'sim'
}
else {
    filme.Assistido = 'não'
}

console.log(filme)
const response = await fetch(`${apiUrl}/filmes/update/${id}`, {
    method: 'PUT',
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(filme)
    
})
lista.innerHTML = "";

getFilmes();

 

}

