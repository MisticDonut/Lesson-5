//this program will remove what ever 
function splitjoin(){
	var string1 = prompt("ender what ever you'd like.")
	var string2 = prompt("enter what characters you'd like to remove.");
	var string3 = string1.split(string2).join("")

	document.write("Before removing " + string2 + "s : " + string1 + "<p>After removing " + string2 + "s : " + string3 + "</p>");
};

splitjoin();