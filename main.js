//initialise the global variables
let intervalId, optionA, optionB, optionC, optionD, ans;
let numberArray = [];

//call fxn that changes header picture
setInterval(slideShow, 2000);


//Main fxn. set and call timer, get question number, save to an array, and call the question
function start(){
	const sec = '15';
	document.getElementById('timer').value = sec;
	var control = document.getElementById('timer');
	control.style.color = 'black';
	control.style.background = 'pink';
	let questionNumber = Number(document.getElementById('qtnNumber').value);
	var found = numberArray.find(function(element) {
  	return element == questionNumber;
	});
	if(found)
		{ alert(`Question number: ${questionNumber} has already been chosen \n Please choose another number`);
    	  return;
    	}
	numberArray.push(questionNumber);
	intervalId = setInterval(countDown, 1000);
	switch(questionNumber){
		case 1: displayQuestion1(); break;
		case 2: displayQuestion2(); break;
		case 3: displayQuestion3(); break;
		case 4: displayQuestion4(); break;
		case 5: displayQuestion5(); break;
	}
}


//fxn to clear question and options displayed
function clearer(){
	var pElements=document.getElementsByTagName('p');
	for (var i = 0; i < pElements.length; i++) {
		pElements[i].innerHTML='';
	}
}
//fxn to highlight the correct answer
function highlightAnswer() {
	var control = document.getElementById(ans);
	control.style.backgroundColor='pink';
	control.style.color = 'white';
}
//fxn to unhighlight the correct answer
function clearHighlight() {
	var control = document.getElementById(ans);
	control.style.backgroundColor = 'transparent';
	control.style.color = 'black';
}
//fxn that continuously changes top right image
function slideShow(){
	var imageSrc = document.getElementById('center').getAttribute('src');
	var currentImageNumber = imageSrc.substring(imageSrc.lastIndexOf('/')+1, imageSrc.lastIndexOf('/')+2);
	currentImageNumber = Number(currentImageNumber);
	if(currentImageNumber === 7){ currentImageNumber = 0;}
	var newImage = 'images/'+(currentImageNumber+1)+'.jpg';
	document.getElementById('center').setAttribute('src', newImage);
}
// fxn to show unchosen question numbers
function numbersLeft(){
	document.getElementById('numLeftPara').innerHTML = '';
	var numLeftArray = [];
	var n=0;
	for (var i=1 ; i <= 5; i++) {
		var found = numberArray.find(function(element) {
  			return element == i;
			});
		if(found){continue;}
		numLeftArray[n] = i;
		n++;
	}
	document.getElementById('numLeftPara').innerHTML = numLeftArray;
}
//countdown timer
function countDown() {
	let index = document.getElementById('timer');
	if(index.value==10){index.style.backgroundColor='red';index.style.color='white';}
	if(index.value > 1){ --index.value;}
	else{index.value = 'Time Up!'; 	clearInterval(intervalId);}	
	return;
}


//Questions to display
function displayQuestion1() {
	ques = '1) Who is the Father of all Nation';
	optionA = 'a) Moses';
	optionB = 'b) Abraham';
	optionC = 'c) Elijah';
	optionD = 'd) Moses'; 
	document.getElementById('question').innerHTML = ques;
	document.getElementById('optionA').innerHTML = optionA;
	document.getElementById('optionB').innerHTML = optionB;
	document.getElementById('optionC').innerHTML = optionC;
	document.getElementById('optionD').innerHTML = optionD;
	ans='optionB';
}
function displayQuestion2() {
	ques = '2) When was Block Rosary Crusade Founded';
	optionA = 'a) 1917';
	optionB = 'b) 1916';
	optionC = 'c) 2017';
	optionD = 'd) 2016'; 
	document.getElementById('question').innerHTML = ques;
	document.getElementById('optionA').innerHTML = optionA;
	document.getElementById('optionB').innerHTML = optionB;
	document.getElementById('optionC').innerHTML = optionC;
	document.getElementById('optionD').innerHTML = optionD;
	ans='optionA';
}
function displayQuestion3() {
	ques = '3) Who are the first members of Block Rosary Crusade';
	optionA = 'a) David and Goliath';
	optionB = 'b) Cain and Abel';
	optionC = 'c) Samson and Delilah';
	optionD = 'd) Lucia, Francisco and Jacinta'; 
	document.getElementById('question').innerHTML = ques;
	document.getElementById('optionA').innerHTML = optionA;
	document.getElementById('optionB').innerHTML = optionB;
	document.getElementById('optionC').innerHTML = optionC;
	document.getElementById('optionD').innerHTML = optionD;
	ans='optionD';
}
function displayQuestion4() {
	ques = '4) Enugu state is in which part of Nigeria?';
	optionA = 'a) North';
	optionB = 'b) West';
	optionC = 'c) South';
	optionD = 'd) East'; 
	document.getElementById('question').innerHTML = ques;
	document.getElementById('optionA').innerHTML = optionA;
	document.getElementById('optionB').innerHTML = optionB;
	document.getElementById('optionC').innerHTML = optionC;
	document.getElementById('optionD').innerHTML = optionD;
	ans='optionD';
}
function displayQuestion5() {
	ques = '5) When did Nigeria gain her independence?';
	optionA = 'a) 1950';
	optionB = 'b) 1960';
	optionC = 'c) 1970';
	optionD = 'd) 1980'; 
	document.getElementById('question').innerHTML = ques;
	document.getElementById('optionA').innerHTML = optionA;
	document.getElementById('optionB').innerHTML = optionB;
	document.getElementById('optionC').innerHTML = optionC;
	document.getElementById('optionD').innerHTML = optionD;
	ans='optionB';
}