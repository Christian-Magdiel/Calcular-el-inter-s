// Declarar variables
let capitalInicial = 1000; // Monto inicial de inversión
let tasaInteres = 5; // Tasa de interés anual en porcentaje
let añosInversion = 3; // Número de años de inversión

// Calcular interés simple
let interesGenerado = (capitalInicial * tasaInteres * añosInversion) / 100;
let totalCapital = capitalInicial + interesGenerado;

// Mostrar resultados en consola
console.log("Interés generado después de", añosInversion, "años: $", interesGenerado);
console.log("Total del capital después de", añosInversion, "años: $", totalCapital);
