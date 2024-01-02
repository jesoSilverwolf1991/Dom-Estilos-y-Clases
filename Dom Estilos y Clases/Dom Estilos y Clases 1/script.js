function cambiarColorFondo() {
  
    var miElemento = document.getElementById("miElemento");
  
    
    var colorAleatorio = "#" + Math.floor(Math.random()*16777215).toString(16);
  
   
    miElemento.style.backgroundColor = colorAleatorio;
  }