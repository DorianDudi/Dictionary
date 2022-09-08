const dictionary = [];

function addWord() {
	let inputField = document.getElementById("addField");
	if(inputField.value != "") {
		dictionary.push(inputField.value);
		alert(inputField.value + " has been added to dictionary");
		inputField.value = "";
	} else {
		alert("Please type the word you want to add");
	}
}

function searchForWord() {
	let searchField = document.getElementById("searchField");
	if(dictionary.includes(searchField.value)) {
		alert("Word found in Dictionary!");
	} else {
		alert("Word not found in Dictionary!");
	}
	searchField.value = "";
}
