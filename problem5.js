var num1 = prompt("What is the first number")
	while(isNaN(num1)){
		var num1 = prompt("please use a number")
	}
var num2 = prompt("What is the second number")
	while(isNaN(num2)){
		var num1 = prompt("please use a number")
	}
var num3 = prompt("What is the third number")
	while(isNaN(num3)){
		var num1 = prompt("please use a number")
	}
var num1 = parseInt(num1);
var num2 = parseInt(num2);
var num3 = parseInt(num3);
	
if(num1 >= num2){
	if(num1 >= num3){
		document.write("From lowest to hightest the numbers are " + num3 + " , " + num2 + " , " + num1 + ".")
	}
	else{
		document.write("From lowest to hightest the numbers are " + num2 + " , " + num1 + " , " + num3 + ".")
	}
}
else{
	if(num2 >= num3){
		document.write("From lowest to hightest the numbers are " + num1 + " , " + num3 + " , " + num2 + ".")
	}
	else{
		document.write("From lowest to hightest the numbers are " + num1 + " , " + num2 + " , " + num3 + ".")
	}
}