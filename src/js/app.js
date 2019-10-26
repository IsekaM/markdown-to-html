const editor = document.querySelector('.editor__textarea');
const output = document.querySelector('.output__text');
const patterns = [
  [ /#{6}\s*([^\n]+)\n?/g, '<h6>$1</h6>' ],
	[ /#{5}\s*([^\n]+)\n?/g, '<h5>$1</h5>' ],
	[ /#{4}\s*([^\n]+)\n?/g, '<h4>$1</h4>' ],
	[ /#{3}\s*([^\n]+)\n?/g, '<h3>$1</h3>' ],
	[ /#{2}\s*([^\n]+)\n?/g, '<h2>$1</h2>' ],
  [ /#{1}\s*([^\n]+)\n?/g, '<h1>$1</h1>' ],
  [ /-\s*(.*)\n?/g, '<ul><li>$1</li></ul>' ],
  [ /\*([^\*]+)\*/g, '<em>$1</em>'],
  [ /\*\*([^\*]+)\*\*\n?/g, '<strong>$1</strong>']
];

function insertCodeTag() {
	let text = editor.value;
	for (const [ pattern, html ] of patterns) {
		text = text.replace(pattern, html);
		output.innerHTML = '';
    output.innerHTML += text;
	}
	console.log(text)
}

editor.addEventListener('keyup', insertCodeTag);

console.log(editor);
