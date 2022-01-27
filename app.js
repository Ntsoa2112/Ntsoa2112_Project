document.body.onload = function(){ //Function anonyme
    nbr = 6; //Nbr image
    p = 0;

    container = document.getElementById('container')
    droite = document.getElementById('droite')
    gauche = document.getElementById('gauche')
    container.style.width=(800*nbr)+"px"; // On multiplie width container par le nbr image
    afficherMasquer();
    for (let i = 1; i <= nbr; i++) {
        div = document.createElement("div")
        div.className = "photo"
        div.style.backgroundImage = "url('images/im"+i+".jpg')"
        container.appendChild(div)
    }

    gauche.onclick = function(){
        if(p>-nbr+1) p--;
        container.style.transform = "translate("+p*800+"px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquer();
    }

    droite.onclick = function(){
        if(p<0) p++;
        container.style.transform = "translate("+p*800+"px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquer();
    }

    function afficherMasquer(){
        if(p==-nbr + 1) {
            gauche.style.visibility="hidden";
        }
        else {
            gauche.style.visibility = "visible";
        }

        if(p==0) {
            droite.style.visibility="hidden";
        }
        else {
            droite.style.visibility = "visible";
        }
    }
}