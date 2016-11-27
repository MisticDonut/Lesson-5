var num1 = prompt("What is the first number");
	while(isNaN(num1)){
		var num1 = prompt("please use a number")
	};
var num2 = prompt("What is the second number");
	while(isNaN(num2)){
		var num1 = prompt("please use a number")
	};
var display;

function bitwiseAnd(){
	display = num1 & num2
};

function bitwiseOR(){
	display = num1 | num2
};

function bitwiseXOR(){
	display = num1 ^ num2
};

function bitwiseLeftShift(){
	display = num1 << num2
};

function bitwiseRightShift(){
	display = num1 >> num2
};

bitwiseAnd();

alert("this is the And Bitwise " + display);

bitwiseOR();

alert("this is the OR Bitwise " + display)

bitwiseXOR();

alert("this is the XOR Bitwise " + display)

bitwiseLeftShift();

alert("this is the left shift Bitwise " + display)

bitwiseRightShift();

alert("this is the right shift Bitwise " + display);