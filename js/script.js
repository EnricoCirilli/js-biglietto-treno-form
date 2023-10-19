


// Tasto invia test se funziona ed è collegato bene

document.getElementById("send").addEventListener("click", function () {
    console.log("funziona");
    //collego form per inserire il nome
    const userNameElem = document.getElementById("nome");
    console.log(userNameElem);
    const userName = userNameElem.value;

    // collego il fotm con html per inserire i km
    const userKmElem = document.getElementById("km");
    console.log(userKmElem);
    const userKm = userKmElem.value;

    // collego il form per far scegliere all'utente la fascia di età
    const userAgeElem = document.getElementById("anni")
    console.log(userAgeElem);
    const userAge = userAgeElem.value;
    console.log(userKm, userAge);

    //
    const userGreeting = `Ciao! ${userName} vuoi percorrere km ${userKm}, `;
    const userMessage = `secondo la fascia di età, il prezzo del tuo biglietto ${userAge}`;
    console.log(userGreeting, userMessage);




    // calcolo il costo per km
    const kmPrice = 0.21;
    const basePrice = userKm * kmPrice;
    console.log(basePrice);


    let discount = 0;


    if (userAge < 18) {
        discount = basePrice * 0.2;
    } else if (userAge > 65) {
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




    // resettare il nome
document.getElementById("clear").addEventListener("click", function () {
    const userNameElem = document.getElementById("nome");
    userNameElem.value = "";
    userKmElem.value = "";
    userAgeElem.value = "";
    document.getElementById("greeting").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    resultSection.classList.add("hidden");
   


    // resettare km
    // resettare fascia di età

});

});

/*
// resettare il nome
document.getElementById("clear").addEventListener("click", function () {
    const userNameElem = document.getElementById("nome");
    userNameElem.value = "";
    userNameElem.value = "";
    userNameElem.value = "";
    document.getElementById("greeting").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    resultSection.classList.add("hidden");


    // resettare km
    // resettare fascia di età

});*/






























