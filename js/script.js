console.log("ciao");

// chiedo all'utente quanti km e quanti anni ha
const userKm = parseInt(prompt("Ciao Utente! Quanti Km vuoi percorrere?"));
console.log(userKm);

// chiedo all'utente quanti anni ha?
const userAge = parseInt(prompt("Ciao Utente! Quanti Anni hai?"));
console.log(userAge);

// calcolo il costo per km
const kmPrice = 0.21;
const basePrice = userKm * kmPrice;
console.log(basePrice);



let discount = 0;
let discountMessage = " Non hai nessun sconto";

if(userAge < 18){
    discount = basePrice * 0.2;
    discountMessage =`Sei minorenne quindi hai uno sconto del 20% ( ${discount.toFixed(2)})`;
}else if  (userAge > 65) {
    discount = basePrice * 0.4;
    discountMessage =``;
} 

// calcolo prezzo finale

const finalPrice = basePrice - discount;

console.log(finalPrice.toFixed(2));


// prepar il  messaggio
document.getElementById("result").innerHTML = `il prezzo è ${finalPrice.toFixed(2)}. ${discountMessage}`;
