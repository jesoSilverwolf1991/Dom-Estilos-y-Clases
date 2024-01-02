const subcategorias = {
    frutas: ["Manzana", "Plátano", "Uva","piña"],
    vegetales: ["Zanahoria", "Lechuga", "Tomate","Cebolla"],
    carnes: ["Pollo", "Res", "Pescado","Cerdo"],
    Granos: ["frijoles" , "Lentejas", "Arvejas","Caraotas"],
    Productosdelimpiezas: ["Shampoo" , "Jabon", "Crema para peinar","crema de diente"],
};


const categoriaSelect = document.getElementById('categoria');
const subcategoriaSelect = document.getElementById('subcategoria');


function cargarSubcategorias() {
  
    const categoriaSeleccionada = categoriaSelect.value;

    
    subcategoriaSelect.innerHTML = '';

   
    const subcategoriasCargadas = subcategorias[categoriaSeleccionada];

    
    subcategoriasCargadas.forEach(function(subcategoria) {
        const option = document.createElement('option');
        option.value = subcategoria;
        option.textContent = subcategoria;
        subcategoriaSelect.appendChild(option);
    });
}


cargarSubcategorias();