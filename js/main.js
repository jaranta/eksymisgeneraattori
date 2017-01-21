var grammar = tracery.createGrammar(autoflaneur);

function generateText() {
	document.getElementById("generatedText").innerHTML = grammar.flatten('#origin');
}
