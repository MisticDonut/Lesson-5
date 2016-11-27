//this program will remove what ever 
function iAmAwesome(){
	var num1 = prompt("How many times would you like me to say I am awesome?")
		while(num1 < 0 || isNaN(num1)){
		var num1 = prompt("I can't say i am awesome \"" + num1 + "\" times, please tell me how many times i should say I am awesome?")
		};
	switch(num1)
	{
		case "0": 
			var iAmAwesome = "oh... i guess you don't want me bragging about you.";
			break;
		default:
			var iAmAwesome = "I am Awesome ".repeat(num1);
	}
	
	document.write(iAmAwesome);
};

iAmAwesome();