
do {
    var Vinitial = prompt("Saisissez l'investissement initiale en dirhams :");


} while (isNaN(Vinitial) || Vinitial < 0);



do {
    var Taux = prompt("Saisissez le taux d'interet annuel en %:");


} while (isNaN(Taux) || Taux < 0);



do {
    var Duree = prompt("Saisissez la duree en annee:");


} while (isNaN(Duree) || Duree < 0);

var VF = parseFloat(Math.round((Vinitial * Math.pow(1 + Taux / 100, Duree)) * 100) / 100);




document.getElementById("h1").innerHTML = "Votre investissement initiale est : " + Vinitial + " DHS";
document.getElementById("h2").innerHTML = "Votre taux d'interet est : " + Taux + "%";
document.getElementById("h3").innerHTML = "votre duree en annee est : " + Duree + " Ans";
document.getElementById("h4").innerHTML = "Voici la valeur finale : " + VF + " DHS";





