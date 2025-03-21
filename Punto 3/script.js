
// c significa calificación
// parseInt sirve para transformar textis en números
let c1= parseInt(prompt("Ingrese la primera calificación"));
let c2= parseInt(prompt("Ingrese la segunda calificación"));
let c3= parseInt(prompt("Ingrese la tercera calificación"));
let c4= parseInt(prompt("Ingrese la cuarta calificación"));
let c5= parseInt(prompt("Ingrese la quinta calificación"));

let promedio = (c1+c2+c3+c4+c5)/5

console.log(promedio); 

if (promedio >= 3){
    console.log("El estudiante aprobó");   
} else{
    console.log("El estudiante no aprobó");
}

