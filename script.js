let prescriptions = [];

const addPrescription = (ev)=>{
    ev.preventDefault();
    let pora;
    if (document.getElementById("8:00").checked) {
        pora = document.getElementById("8:00").value;
    } else if (document.getElementById("15:00").checked) {
        pora = document.getElementById("15:00").value;
    } else if (document.getElementById("22:00").checked){
        pora = document.getElementById("22:00").value;
    }

    if ((document.getElementById("8:00").checked ||
    document.getElementById("15:00").checked ||
    document.getElementById("22:00").checked) &&
    document.getElementById("data").value != "" &&
     document.getElementById("imie").value != "" &&
      document.getElementById("nazwisko").value != "" &&
       document.getElementById("pesel").value != "") {
    let prescription = {
        lek: document.getElementById("lek").value,
        pora: pora,
        data: document.getElementById("data").value,
        ilosc: document.getElementById("ilosc").value,
        oddzial: document.getElementById("oddzial").value,
        imie: document.getElementById("imie").value,
        nazwisko: document.getElementById("nazwisko").value,
        pesel: document.getElementById("pesel").value
    }
    prescriptions.push(prescription);
    document.querySelector("form").reset();
} else {
    alert("Proszę wprowadzić poprawne dane");
}
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("btn").addEventListener("click", addPrescription);
});

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("results").addEventListener("click", showTable);
});


const showTable = () => {
var html = "<table border='1|1'>";
html+="<tr>";
html+="<td>PESEL: </td>";
html+="<td>Imię: </td>";
html+="<td>Nazwisko: </td>";
html+="<td>Lek: </td>";
html+="<td>Pora: </td>";
html+="<td>Data: </td>";
html+="<td>Ilość: </td>";
html+="<td>Oddział: </td>";
for (var i = 0; i < prescriptions.length; i++) {
    html+="<tr>";
    html+="<td>"+prescriptions[i].pesel+"</td>";
    html+="<td>"+prescriptions[i].imie+"</td>";
    html+="<td>"+prescriptions[i].nazwisko+"</td>";
    html+="<td>"+prescriptions[i].lek+"</td>";
    html+="<td>"+prescriptions[i].pora+"</td>";
    html+="<td>"+prescriptions[i].data+"</td>";
    html+="<td>"+prescriptions[i].ilosc+"</td>";
    html+="<td>"+prescriptions[i].oddzial+"</td>";
    
    html+="</tr>";

}
html+="</table>";

var myWindow = window.open("", "Lista zleceń", "width=800, height=600");
    myWindow.document.body.innerHTML = html;
}