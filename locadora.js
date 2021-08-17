
const listaFilmes = document.querySelector('#listaFilmes')

const filmes = [
    {Nome:'rocky 1', Genero:'luta'},
    {Nome:'titanic', Genero:'drama'},
    {Nome:'jason', Genero:'terror'},
    {Nome:'o pequenino', Genero:'comedia'},
    {Nome:'007', Genero:'ação'}
];

const criaElementosUi = function(){
    
    let aux = ''; 
    filmes.forEach((filme)=>{
        aux += `<li> Nome:${filme.Nome} Genero:${filme.Genero}`

    });
    
    listaFilmes.innerHTML = aux;

}  

function exibeFilmes (){

    setTimeout(criaElementosUi, 1000);

}

function adicionaFilme(filme){
    const promise2 = (resolve,reject)=>{

       setTimeout(()=> {
        if(filme.Nome === ''){
            reject(new Error('Nome inválido.')); 

        }else{
            filmes.push(filme);
            resolve();

                }
            },2000);
        }
    
        return new Promise(promise2)
    }
    

adicionaFilme({Nome:'o mentiroso', Genero:'comedia'})
.then(()=>{
    return adicionaFilme({Nome:'velozes e furiosos' ,Genero:'ação'})

})
.then(()=>{
    return adicionaFilme({Nome:'velozes e furiosos 2' ,Genero:'ação'})

})
.then(()=>{
    return adicionaFilme({Nome:'velozes e furiosos 3' ,Genero:'ação'})

})
.then(()=>{
    return adicionaFilme({Nome:'velozes e furiosos 4' ,Genero:'ação'})

})
.then(()=>{
    return adicionaFilme({Nome:'velozes e furiosos 5' ,Genero:'ação'})

})
.then(exibeFilmes)
.catch((erro)=>{
    console.error(erro)

})
