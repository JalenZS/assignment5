function biggerFunction(){
	alert("Increased font size");
	document.getElementById("mainbox").style.fontSize = "24pt";
}
function alertFancy(){
	alert("Style set to fancy");
	document.getElementById("mainbox").style.fontWeight = "bold";
	document.getElementById("mainbox").style.color = "blue";
	document.getElementById("mainbox").style.textDecoration = "underline";
}
function alertBoring(){
	alert("Style set to boring");
	document.getElementById("mainbox").style.fontWeight = "normal";
	document.getElementById("mainbox").style.color = "black";
	document.getElementById("mainbox").style.textDecoration = "none";
}
function mooFunction(){
	alert("Set to uppercase");
	document.getElementById("mainbox").style.textTransform = "uppercase";
	var str = document.getElementById("mainbox").value;
	var parts = str.split(".");  // ["How", "are", "you?"]
	str = parts.join("Moo.");       // "How_are_you?"
	document.getElementById("mainbox").value = str;
}
