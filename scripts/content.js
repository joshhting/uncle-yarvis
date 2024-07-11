var styles = `
	.topcorner{
		position:absolute;
		top:0;
		right:0;
	}
`

const article = document.querySelector("article");

if (article) {
	// find pattern
	// const regex = new RegExp(regexPattern, 'g');
	const regex = /\b\w+(?:er|or)\b/g;
	const matches = document.body.innerText.match(regex);
	var target = matches[Math.floor(Math.random() * matches.length)];
	target = target.charAt(0).toUpperCase() + target.slice(1); // capitalize 1st letter

	// notify user
	const istvan = document.createElement("div");
	istvan.classList.add("topcorner");
	istvan.innerHTML = "<marquee>" + target + "? I barely know her!</marquee>";
	document.body.appendChild(istvan);

	const imgUrl = chrome.runtime.getURL('istvan.png'); // Change this to your image path

	const img = document.createElement('img');
	img.src = imgUrl;
	img.style.position = 'fixed';
	img.style.bottom = '10px';
	img.style.right = '10px';
	img.style.width = '100px';  // Adjust the size as needed
	img.style.height = '100px'; // Adjust the size as needed
	img.style.zIndex = '1000';

	istvan.appendChild(img);
}