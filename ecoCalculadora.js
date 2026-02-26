/**
* MÓDULO EcoCalculadora - Compatible Node.js y navegador
*/

const { text } = require("express");
const ecoCalculadora={


sumar:(a,b)=>Number(a)+Number(b),
restar:(a,b)=>Number(a)-Number(b),
multiplicar:(a,b)=>Number(a)*Number(b),
dividir:(a,b)=>{
if(Number(b)===0)return "Error: División por cero";
return Number(a)/Number(b);
},
calcularPorcentaje:(total,porcentaje)=>
(Number(total)*Number(porcentaje))/100,
saludar:(nombre)=>
"🌿 Hola "+(nombre||"Visitante")+", hoy reciclarás código y cuidarás el planeta",
raiz:(a)=>Math.sqrt(Number(a)),
potenciar:(a,b)=>Math.pow(a,b)
};

// Exportar para Node.js
if (typeof module !== 'undefined' && module.exports) {
module.exports = { ecoCalculadora };
}