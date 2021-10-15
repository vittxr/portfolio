
var button1 = () => {
    if(document.getElementById('sobre').style.display == 'none') {
        document.getElementById('sobre').style.display = 'flex';
    } else { document.getElementById('sobre').style.display = 'none' }
}

var button2 = () => {
    if(document.getElementById('projetos').style.display == "none") {
        document.getElementById('projetos').style.display = "flex"; 
        } else {document.getElementById('projetos').style.display = "none"}
    }


var botao1 = () => {    
    document.getElementById("projeto1").style.display = "flex";
}

var botao2 = () => {
    document.getElementById("projeto1").style.display = "none" 
}

var botao3 = () => {
    document.getElementById("projeto2").style.display = "flex";
}

var botao4 = () => {
     document.getElementById("projeto2").style.display = "none";
}

var botao5 = () => {
    document.getElementById("projeto3").style.display = "flex"
}

var botao6 = () => {
    document.getElementById("projeto3").style.display ="none";
}
