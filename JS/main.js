function loader(){
	const flag = 0;
	if(flag === 0){
		document.getElementById("load").style.display = "none";
		document.getElementById("cont").style.display = "block";
		let flag = 1;
		console.log("Loaded");
	}
}

alert("For Better Experience switch to DESKTOP or LANDSCAPE Mode... !")

function aboutMe(){
	document.getElementById("sitting").style.visibility = "hidden";
	document.getElementById("walk").style.visibility = "visible";
	document.getElementById("walk").className = "startwalkr";
	var audio = new Audio('./Assets/beep.mp3');
	audio.play();
	setTimeout("location.href='./page/aboutMe';",5000);
}
function skills(){
	document.getElementById("sitting").style.visibility = "hidden";
	document.getElementById("walk").style.visibility = "visible";
	document.getElementById("walk").className = "startwalkl";
	var audio = new Audio('./Assets/beep.mp3');
	audio.play();
	setTimeout("location.href='./page/skills';",5000);
}
function projects(){
	document.getElementById("sitting").style.visibility = "hidden";
	setTimeout("location.href='./page/construction';",000);
}

const words = ["Hello.", "Hi.", "Namaste."];
let i = 0;
let timer;
function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 350);
	};
	loopTyping();
};
function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 150);
	};
	loopDeleting();
};

typingEffect();
