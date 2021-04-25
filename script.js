let contador=0;
var num = 0;


function cuenta(){
	document.getElementById("incrementar").innerHTML = ++contador;

	num = Math.round(Math.random()*2);


	var foto = document.getElementById("foto");
	foto.src = "foto"+num+".png";
}