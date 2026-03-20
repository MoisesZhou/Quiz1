


function alternativa(numero){
    if(numero==2){
        alert("Resposta Certo!")
        document.getElementById("opcaoB1").style.backgroundColor = "green";

    }
    else if(numero==1){
        alert("Resposta Errada!")
        document.getElementById("opcaoA1").innerHTML = "Incorreto";
        document.getElementById("opcaoA1").style.backgroundColor = "red";
    }
    else if(numero==3){
        alert("Resposta Errada!")
        document.getElementById("opcaoC1").innerHTML = "Incorreto";
        document.getElementById("opcaoC1").style.backgroundColor = "red";
    }
    else if(numero==4){
        alert("Resposta Errada!")
        document.getElementById("opcaoD1").innerHTML = "Incorreto";
        document.getElementById("opcaoD1").style.backgroundColor = "red";
    }
    

}