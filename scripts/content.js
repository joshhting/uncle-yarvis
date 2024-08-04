
const article = document.querySelector("article");
const main = document.querySelector("main");

if (article || main) {
	// find pattern
	// const regex = new RegExp(regexPattern, 'g');
	const regex = /\b\w+(?:er|or)\b/g;
	const matches = document.body.innerText.match(regex);
	var target = matches[Math.floor(Math.random() * matches.length)];
	target = target.charAt(0).toUpperCase() + target.slice(1); // capitalize 1st letter

	// I'm Uncle Yarvis

	// notify user
	const istvan = document.createElement("div");
	istvan.className = "animated";
	istvan.textContent = target + "? I barely know her!";
	istvan.style.position = 'fixed';
	istvan.style.bottom = '120px';
	istvan.style.right = '10px';
	istvan.style.borderRadius = '15px';
	istvan.style.border = '2px solid black';
	istvan.style.padding = '5px';
	istvan.style.backgroundColor = '#ffffff';
	istvan.style.color = '#000000';
	document.body.appendChild(istvan);

	// Create CSS rule for the pseudo-element
	const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
	const speechStyle = `
	.animated::after {
		content: '';
		position: absolute;
		bottom: -20px;
		right: 20px;
		border-width: 10px;
		border-style: solid;
		border-color: #000000 transparent transparent transparent;
	}
	`;
	styleElement.appendChild(document.createTextNode(speechStyle));
	document.head.appendChild(styleElement);

	// add istvan's face
	const imgUrl = chrome.runtime.getURL('istvan.png');
	const img = document.createElement('img');
	img.src = imgUrl;
	img.style.position = 'fixed';
	img.style.bottom = '10px';
	img.style.right = '10px';
	img.style.width = '100px';  // Adjust the size as needed
	img.style.height = '100px'; // Adjust the size as needed
	img.style.zIndex = '1000';
	img.style.borderRadius = '15px';
	istvan.appendChild(img);
}
