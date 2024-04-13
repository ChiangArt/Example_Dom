
let timer;
let segundos=0;
let minutos=45;
let contadorTeam1=0;
let contadorTeam2=0;


function addGoal(team){
    
    switch (team) {
        case 1:
            contadorTeam1++;
            document.getElementById("goalsTeam1").innerText = contadorTeam1;
            break;
        case 2:
            contadorTeam2++;
            document.getElementById("goalsTeam2").innerText = contadorTeam2;
            break;
        default:
            break;
    }

    
}



function startTimer(){
    stopTimer();
    timer = setInterval(updateTimerDisplay, 1000)
}


function stopTimer(){
    clearInterval(timer);

}

function reiniciarJuego(){
    segundos = 0;
    minutos= 45;
    clearInterval(timer);
    document.getElementById("countdownTimer").innerText = "45:00";
    document.getElementById("goalsTeam1").innerText = "0";
    document.getElementById("goalsTeam2").innerText = "0";

}

function updateTimerDisplay(){
    segundos--;
    if(segundos <=0){
        if(minutos > 0){
            segundos =59;
            minutos--;
        }else {
            segundos = 0;
        }
       
    }

    let mostrarMinutos = (minutos < 10) ? "0" + minutos : minutos;
    let mostrarSegundos = (segundos < 10) ? "0" + segundos : segundos;

    document.getElementById("countdownTimer").innerText = mostrarMinutos +":" + mostrarSegundos;

    if(minutos === 0 && segundos === 0){
        stopTimer();
    }
}