var styles = `
	.topcorner{
		position:absolute;
		top:0;
		right:0;
	}
`

const body = document.querySelector("body");

if (body) {
	const istvan = document.createElement("div");
	istvan.classList.add("topcorner");
	istvan.innerHTML = "<style type='text/css'>.topcorner{position:absolute;top:0;right:0;}</style><h1>Lorem</h1>";
	document.body.appendChild(istvan);
}