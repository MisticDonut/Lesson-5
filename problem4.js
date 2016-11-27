//this program will remove what ever 
function palindrome(){
	var word = prompt("please enter your word so i may check if its a Palindrome?")
	var wordrev = word.split("").reverse().join("");

	if (word === wordrev){
		document.write(word + " is a palindrome.");
	}
	else{
		document.write(word + " is not a palindrome.")
	}
	//document.write(wordrev)
};

palindrome();