var change = document.getElementById("changebg")

function changeColor(color){
    document.body.style.background = color;
}

function runChangebg(){
    changeColor('green');
}

/* Allt ovan är för att ändra bakgrundsfärg. Jag använder document.getElementById("changebg") för att ändra rätt div. Sedan ändrar den bakgrunden till grön. */

function goodvibespopup(){
    /* Sätter texten 'You are the best!' vid diven med id:t goodvibes. */
    document.getElementById("goodvibes").textContent = 'You are the best!';
}

function timeDisplay(){
    /* Använder Date för att få tiden när knappen klickas. Detta värde sätts sen in i diven med id:t tid. */
    var time_now = new Date();
    var time_date = time_now.getDate() + "/" + (time_now.getMonth()+1) + "/" + time_now.getFullYear() + "kl:" + time_now.getHours() + ":" + time_now.getMinutes() + ":" + time_now.getSeconds()
    document.getElementById('tid').innerHTML = time_date
}


   /* Ändrar vilken bild som visas uppe i högre hörnet */
function pictureChange(){
    let colorImage = document.getElementById("idBild");
    
        if (colorImage.getAttribute('src') === "./harambe.jpg") {
            colorImage.setAttribute('src', "./monkey.jpg");
        }
        else {
            colorImage.setAttribute('src', "./harambe.jpg");
        }
    }
    

function pictureHide(){
    /* Sätter värdet på img tagen med id:t bild_calle till noll. Detta gör att bilden försvinner. */
    document.getElementById('bild').style.display = 'none';
}

function pictureShow(){
    /* Samma princip som hidePicture med skillnaden att den visar det så som det var ursprungligen. Initial används istället för none för att uppnå detta. */
    document.getElementById('bild').style.display = 'initial';
}



