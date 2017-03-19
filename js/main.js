var grammar = tracery.createGrammar(autoflaneur);

function generateText() {
	document.getElementById("generatedText").innerHTML = grammar.flatten('#aloitus').replace("\u2605", "\u0023");
}
