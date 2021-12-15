const apiUrl = 'http://localhost:3000'

const lista = document.getElementById('lista');

const getfilmes = async () => {
    
    const response = await fetch(`${apiUrl}/filmes`);
    const filmes = await response.json();

    filmes.map((filmes) => {
        console.log(filmes.empresa);
        lista.insertAdjacentHTML('beforeend', `
            <tr>
                <th scope="row">${catalogoFilmes.id}</th>
                <td>${catalogoFilmes.Filme}</td>
                <td>${catalogoFilmes.ano}</td>
                <td>${catalogoFilmes.descrição}</td>
                <td>${catalogoFilmes.imagem}</td>
            </tr>
        `)
    })

}

getfilmes();


const escolherfilme = async () => {
 
    const idDigitado = document.getElementById('idVaga').value;
  
    const response = await fetch(`${apiUrl}/filmes/${idDigitado}`)
   
    const filmes = await response.json();

    document.getElementById('filmes').insertAdjacentHTML('beforeend', `
        <tr>
            <th scope="row">${vaga.id}</th>
            <td>${vaga.empresa}</td>
            <td>${vaga.oportunidade}</td>
            <td>${vaga.tipo}</td>
            <td>${vaga.salario}</td>
        </tr>
    `)
}

