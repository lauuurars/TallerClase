let sueldo = prompt("Ingrese su sueldo");
let descuento = 0;

if (sueldo <= 1000){
    descuento = (sueldo * 5)/100;
}

let sueldoNeto = sueldo - descuento; 

if (sueldo > 1000 && sueldo <= 2000) {
    descuento = (sueldo * 10)/100;
}

if (sueldo > 2000){
    descuento = (sueldo * 15)/100;
}

console.log("Sueldo Base: " + sueldo)
console.log("Descuento de $" + descuento)
console.log("Sueldo Neto es de $: " +sueldoNeto)