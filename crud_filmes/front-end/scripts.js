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
    
        lista.insertAdjacentHTML(
            "beforeend",
            `
                  <tr>
                      <th scope="row">${catalogoFilmes
                        .id} ${ catalogoFilmes.visualizado ? 'visualizada': 'nao visualizada' }</th>
                      <td>${catalogoFilmes.Filme}</td>
                      <td>${catalogoFilmes.ano}</td>
                      <td>${catalogoFilmes.descrição}</td>
                      <td>${catalogoFilmes.imagem}</td>
                      <td>
                          <button class="btn btn-primary" onclick="editaVaga(${catalogoFilmes.id})">Editar</button>
                          <button class="btn btn-danger" onclick="deleteVaga(${catalogoFilmes.id})">Deletar</button>
                          <input type="checkbox" onclick="marcarVisualizacao(${catalogoFilmes.id})" ${ catalogoFilmes.visualizado ? 'checked': '' }/> assistido
                          ${ catalogoFilmes.visualizado ? '': `<button class="btn btn-info" onclick="marcarVisualizacao(${catalogoFilmes.id})">Visualizar</button>` }
                          
                      </td>
                  </tr>
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
            <td>${filme.ano}</td>
            <td>${filme.descrição}</td>
            <td>${filme.imagem}</td>
        </tr>

    `)
}

const submitForm = async () => {

          const Filme = document.getElementById('Filme').value;
          const ano = document.getElementById('ano').value;
          const descrição = document.getElementById('descrição').value;
          const imagem = document.getElementById('imagem').value;

console.log(Filme, ano, descrição, imagem)

const objetoFilme = {
    Filme,
    ano,
    descrição,
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

} else{

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
document.getElementById('ano').value = result.ano
document.getElementById('descrição').value = result.descrição
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
 document.getElementById('ano').value = "";
 document.getElementById('descrição').value = "";
 document.getElementById('imagem').value = "";

}



