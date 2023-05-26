var change = document.getElementById("changebg")

function runChangebg(){
    if (document.body.style.background != "green")
    {
        document.body.style.background = "green";
        document.body.style.color = "white"; 
        return
    }
    document.body.style.background = "white";
    document.body.style.color = "black";
}

/* Allt ovan är för att ändra bakgrundsfärg. Jag använder document.getElementById("changebg") för att ändra rätt div. Sedan ändrar den bakgrunden till grön. */

function goodvibespopup(){
    /* Sätter texten 'You are the best!' vid diven med id:t goodvibes. */
    const goodvibestext = document.getElementById("goodvibes");
    goodvibestext.innerHTML = "You got this!";
    goodvibestext.style.display = 'initial';
}


function timeDisplay(){

    const text_time = document.getElementById('text_time');
    /* Använder Date för att få tiden när knappen klickas. Detta värde sätts sen in i diven med id:t tid. */
    var time_now = new Date();
    var time_date = time_now.getDate() + "/" + (time_now.getMonth()+1) + "/" + time_now.getFullYear() + "kl:" + time_now.getHours() + ":" + time_now.getMinutes() + ":" + time_now.getSeconds()
    document.getElementById('text_time').innerHTML = time_date
    text_time.innerHTML = "The time is " + time_now
    text_time.style.display = 'initial';
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


/* För att flytta diven med klassen .header  */
function headerMaker(){
    const head = document.getElementById('Div_Header');
    const picture = document.getElementById('idBild');

    /* Ser till så att våran header har header klassen */
    if (head.className == "flexbs"){
        head.className = head.className + " header";

        picture.style.padding = "5px";
        picture.style.background = "blue";
        return
    }



    head.className = head.className.slice(0, -7);

    picture.style.padding = "4px";
    picture.style.background = "none";




}




/* För att ta bort Header Diven med simpel display none */
function headerRemove(){
    const head = document.getElementById('Div_Header');
    head.style.display = "none";
    
}




/* För att visa Header diven med display flex och hur den ska va displayad med flex direction column */
function headerDisplay(){
    const head = document.getElementById('Div_Header');
    head.style.display = "flex";
    head.style.flexDirection = "column";
}

