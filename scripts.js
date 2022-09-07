const dictionary = [];
let test_ = 1;

function addWord() {
	let inputField = document.getElementById("addField");
	if (inputField.value != "") {
  	dictionary.push(inputField.value);
    alert(inputField.value + " has been added to dictionary");
    alert(dictionary[dictionary.length - 1]);
    inputField.value = "";
    listDictionary();
  } else {
  	alert("Please type the word you want to add");
  }
}

function listDictionary() {
	for (let i = 0; i < dictionary.length; ++i) {
  	console.log(dictionary[i]);
  }
}
