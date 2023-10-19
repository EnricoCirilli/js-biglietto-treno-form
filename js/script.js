document.getElementById("send").addEventListener("click", function(){
    console.log("funziona");
   
    const userNameElem = document.getElementById("nome");
    console.log(userNameElem);
    const userName = userNameElem.value;


    const userKmElem = document.getElementById("km");
    console.log(userKmElem);
    const userKm = userKmElem.value;


    const userAgeElem =document.getElementById("anni")
    console.log(userAgeElem);
    const userAge = userAgeElem.value;
    console.log(userKm, userAge);


    const userGreeting = `Ciao! ${userName} vuoi percorrere km ${userKm}, `;
    const userMessage = `secondo la fascia di età, il prezzo del tuo biglietto ${userAge}`;
    console.log( userGreeting, userMessage);




    // calcolo il costo per km
const kmPrice = 0.21;
const basePrice = userKm * kmPrice;
console.log(basePrice);


let discount = 0;


if(userAge < 18){
    discount = basePrice * 0.2;
}else if  (userAge > 65) {
    discount = basePrice * 0.4;
} 

// calcolo prezzo finale

const finalPrice = basePrice - discount;

console.log(finalPrice.toFixed(2));


//out put 
document.getElementById("greeting").innerHTML = userGreeting;
document.getElementById("message").innerHTML = userMessage;

document.getElementById("result").innerHTML = `il prezzo finale è di euro ${finalPrice.toFixed(2)}`;


const resultSection = document.querySelector(".result-section");
resultSection.classList.remove("hidden");

}) ;


































