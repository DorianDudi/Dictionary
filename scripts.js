const dictionary = [];

function addWord() {
	let inputField = document.getElementById("addField");
	if(inputField.value != "") {
  	dictionary.push(inputField.value);
    alert(inputField.value + " has been added to dictionary");
    inputField.value = "";
    listDictionary();
  } else {
  	alert("Please type the word you want to add");
  }
}

function searchForWord() {
	let inputWord = document.getElementById("searchField");
  if(dictionary.includes(inputWord.value)) {
  	alert("Word found in Dictionary!");
  } else {
  	alert("Word not found in Dictionary!");
  }
}
