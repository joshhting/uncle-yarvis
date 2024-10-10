var mainElement;

if (window.location.hostname == 'www.youtube.com' || window.location.hostname == 'youtube.com') {
	mainElement = document.body;
} else if (document.querySelector("article")) {
	mainElement = document.querySelector("article");
} else if (document.querySelector("main")) {
	mainElement = document.querySelector("main");
}

if (mainElement) {
	console.log(mainElement.innerText);
	var matches = [];
	var target;

	const regex1 = /\b\w+(?:er|or)\b/g;
	const matches1 = mainElement.innerText.match(regex1);
	if (matches1) {
		target = matches1[Math.floor(Math.random() * matches1.length)];
		target = target.charAt(0).toUpperCase() + target.slice(1); // capitalize 1st letter
		matches.push(target + "? I barely know her!");
	}

	const regex2 = /\bnice\b\s[\w-]+/gi;
	const matches2 = mainElement.innerText.match(regex2);
	if (matches2) {
		target = matches2[Math.floor(Math.random() * matches2.length)].substring(4);
		matches.push("Nice " + target + ", where'd you get it? The " + target + " store?");
	}

	const regex3 = /\b(2|two)\b\s[\w-]+/g;
	const matches3 = mainElement.innerText.match(regex3);
	if (matches3) {
		target = matches3[Math.floor(Math.random() * matches3.length)];
		if (target.charAt(0) === 't') {
			target = "2" + target.substring(3);
		}
		matches.push("Yeah I like Dune 2. Dune " + target + " at the same time");
	}

	const regex4 = /55 [\w-]+/g;
	const matches4 = mainElement.innerText.match(regex4);
	if (matches4) {
		target = matches4[Math.floor(Math.random() * matches4.length)].toUpperCase();
		matches.push(target + " 55 BURGERS 55 FRIES");
	}


	if (matches) {

		// notify user
		const istvan = document.createElement("div");
		istvan.className = "animated";
		istvan.textContent = matches[Math.floor(Math.random() * matches.length)];
		istvan.style.position = 'fixed';
		istvan.style.bottom = '-100px';
		istvan.style.right = '10px';
		istvan.style.borderRadius = '15px';
		istvan.style.border = '2px solid black';
		istvan.style.padding = '5px';
		istvan.style.backgroundColor = '#ffffff';
		istvan.style.color = '#000000';
		istvan.style.animation = 'moveSpeechUp 1s forwards 1s';
		document.body.appendChild(istvan);

		// Create CSS rule for the pseudo-element
		const styleElement = document.createElement('style');
		styleElement.type = 'text/css';
		const speechStyle = `
		.animated::after {
			content: '';
			position: absolute;
			bottom: -40px;
			right: 10px;
			border-width: 20px;
			border-style: solid;
			border-color: #000000 transparent transparent transparent;
		}

		@keyframes moveSpeechUp {
			0% {
				bottom: -100px;
			}
			100% {
				bottom: 130px;
			}
		}

		@keyframes moveImgRight {
			0% {
				left: 0; 
			}
			100% {
				left: calc(100% - 100px);
			}
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
		img.style.left = '10px';
		img.style.width = '100px';  // Adjust the size as needed
		img.style.height = '100px'; // Adjust the size as needed
		img.style.zIndex = '1000';
		img.style.borderRadius = '15px';
		img.style.animation = 'moveImgRight 1s forwards';
		istvan.appendChild(img);
	}
}
