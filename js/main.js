function calculateInterest(principal, rate, months) {
    return principal * rate * months / 100;
}

const principal = prompt("CANTIDAD DEL PRESTAMO"); // Monto del préstamo
const rate = 2.5 / 12; // Tasa mensual convertida a tasa mensual
const months = 12; // Número de meses
const interest = calculateInterest(principal, rate, months);

alert("El interés es de $" + interest);


let nombreUusuario = prompt("Ingrese Usuario")
alert("El usuario ingresado es: " + nombreUusuario + " " + "Su deuda es de " + interest)

class deudor{
    constructor(nombre, deuda){
    this.nombre = nombreUusuario
    this.deuda = interest
    }
}
alert("El usuario: " + this.nombre + " " + "Tiene una deuda de: " + this.deuda);
