//its a little comical intro for this... 
//I'm in the lobby of my hotel and its 11:45pm here right now... 
//yeah... 
//just let me have my fun...
var name = prompt("Hello, may i ask you your first name?");

if(name == "collin" || name == "steve" || name == "Steve"){
	alert("oh! it's you, I've been expecting you.");
};
	else if( name == "Collin" || name == "Steven" || name == "steven"){
		alert("oh! it's you, I've been expecting you.");
	};
	else if(name == "john" || name == "John" || name == "jon" || name == "Jon"){
		alert("hm " + name + "? I've always like that name. Okay " + name + " shall we continue?");
	};
else{
	alert("wht kind of name is " + name + "? You know what I'll just call you John, I've always liked John")
	var name = "John"
};
//prompts the user for their percentage and checks it to make sure it a real percentage 
var percent1 = prompt("What is your percentage " + name);
var percent1 = percent1.split("%").join("");
	while(percent1 > 100 || percent1 < 0){
		var percent1 = prompt("Use a real percentage please" + name);
	};

// the if statements that decide what the letter grade is and a little witty comment to go with.
if(percent1 >= 100){
	document.write("Congradulation " + name + ", you got an A+!");
};
	else if(percent1 >= 93){
		document.write("Congradulation " + name + ", you got an A.");
};
	else if(percent1 >= 90){
		document.write("Good Job " + name + ", you got an A-.");
};
	else if(percent1 >= 87){
		document.write("well " + name + ", you got a B+. That's still pretty good.");
};
	else if(percent1 >= 83){
		document.write("well " + name + ", you got a B. Not too bad.");
};
	else if(percent1 >= 80){
		document.write("well " + name + ", you got a B-.");
};
	else if(percent1 >= 77){
		document.write(name + ", you got a C+.");
};
	else if(percent1 >= 73){
		document.write("Okay " + name + ", you got a C. I know you can do better.");
};
	else if(percent1 >= 70){
		document.write("Okay " + name + ", you got a C-. Next time bring your A game... or at least your B- game.");
};
	else if(percent1 >= 69){
		document.write("Okay Okay " + name + ", you got a D+. We might have a small problem with this.");
};
	else if(percent1 >= 68){
		document.write("this is not good " + name + ", you got a D. We need to get this up else you'll fail.");
};
	else if(percent1 >= 67){
		document.write("this is bad " + name + ", you got a D-. If this dosen't get better your going to fail.");
};
	else{
		document.write("um... " + name + " you aren't going to like this... that's a F. That means a failing grade.");
};