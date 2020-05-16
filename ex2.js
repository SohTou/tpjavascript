for (var i = 1; i <= Duree; i++) {



    var VF = parseFloat(Math.round((Vinitial * Math.pow(1 + Taux / 100, 1)) * 100) / 100);

    document.getElementById("content").innerHTML += "<tr><td>" + i + "</td><td>" + Math.round((Vinitial * Taux / 100) * 100) / 100 + "</td><td>" + VF + "</td></tr>";


    Vinitial = VF;
}
document.body.appendChild(tab);

