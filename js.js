let voornaam 	  	= document.getElementById("voornaam");
let achternaam 		= document.getElementById("achternaam");
let leeftijd	  	= document.getElementById("leeftijd");
let email 				= document.getElementById("email");
let verzenden   	= document.getElementById("verzenden");
let antwoord 	    = document.getElementById("antwoord");





verzenden.addEventListener('click', ajax);

function ajax()
{
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200){
				antwoord.innerHTML = this.responseText;
				}






	};
	let httpString = "form1.php?voornaam=" + voornaam.value + "&leeftijd=" + leeftijd.value + "&achternaam=" + achternaam.value + "&email=" + email.value;
		console.log(httpString);
		xmlhttp.open("GET", httpString, true);
		xmlhttp.send();
}
