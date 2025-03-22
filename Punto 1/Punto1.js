
let pais = prompt("Ingrese el nombre del país: ");
let idioma = "";

if (pais === "Colombia" || pais == "colombia" || pais == "COLOMBIA") {
    idioma = "Español";
} else if (pais === "Estados Unidos" || pais == "estados unidos" || pais == "ESTADOS UNIDOS") {
    idioma = "Inglés";
} else if (pais === "Inglaterra" || pais == "inglaterra" || pais == "INGLATERRA") {
    idioma = "Inglés";
} else if (pais === "Canada" || pais == "canada" || pais == "CANADA") {
    idioma = "Inglés";
} else if (pais === "Francia" || pais == "francia" || pais == "FRANCIA") {
    idioma = "Francés";
} else if (pais === "Italia" || pais == "italia" || pais == "ITALIA") {
    idioma = "Italiano";
} else if (pais === "Alemania" || pais == "alemania" || pais == "ALEMANIA") {
    idioma = "Alemán";
} else if (pais === "China" || pais == "china" || pais == "CHINA") {
    idioma = "Mandarín";
} else if (pais === "Japon" || pais == "japon" || pais == "JAPON") {
    idioma = "Japonés";
} else if (pais === "Brasil" || pais == "brasil" || pais == "BRASIL") {
    idioma = "Portugués";	
} else {
    console.log("No existe el país !!!");
}

if (idioma !== "") {
    console.log("En " + pais + " se habla: " + idioma);
}