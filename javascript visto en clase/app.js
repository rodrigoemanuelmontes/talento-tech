





let productos = ["chocolinas", "traviata", "oreo", "rumba"]
let precios = [1500, 900, 1200, 1699]
let stock =[true,false,true,false]



for (var i=0; i < productos.length; i++){
    document.write("producto: "+ productos[i]+" ")
    document.write("precio: $" +precios[i]+" ")
    document.write("stock : " + stock[i])
    document.write("<br>")

}


//funciones

let contador = 0; // Variable global para llevar el conteo

function saludar() {
    if (contador === 10) { // Comparación correcta
        alert("Sos la " + contador + " persona que ingresó =)");
    }
    alert("Hola, persona: " + contador);
    contador++; // Incrementa el contador
}

saludar();
saludar();
saludar();
saludar();
saludar();
saludar();
saludar();
saludar();
saludar();
saludar();



