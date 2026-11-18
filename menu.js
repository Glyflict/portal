const scriptURL = document.currentScript.src;
const menuURL = new URL("menu.html", scriptURL);

fetch(menuURL)
	.then(response => response.text())
	.then(html => {
		document.getElementById("menu-container").innerHTML = html;
	});