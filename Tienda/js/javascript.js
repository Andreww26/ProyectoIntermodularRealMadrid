function myFunction(){
    var x = document.getElementById("inicio");
    if(x.className === "barra"){
        x.className += " responsive";
    }else{
        x.className = "barra";
    }
}

const btnCart = document.querySelector('.iconocarrito')
const containercarritoproductos = document.querySelector('.containercarritoproductos')

btnCart.addEventListener('click', () =>{
    containercarritoproductos.classList.toggle('ocultarcarrito')
})