let pais = document.getElementById("paises").value;
paises.addEventListener ("change", function escolhaPais () {
if (pais == "brasil"){
    console.log(WORLDBANK.BRA.indicators)
}
else if (pais == "peru"){
    console.log(WORLDBANK.PER.indicators)
}
else if (pais == "chile"){
    console.log(WORLDBANK.CHL.indicators)
}
else {
    console.log(WORLDBANK.MEX.indicators)
}
} 
);
