const scriptURL = document.currentScript.src;

const components = [
	{ file: "menu.html", id: "menu-container" },
	{ file: "footer.html", id: "footer-container" }
];

components.forEach(component => {
	const url = new URL(component.file, scriptURL);

	fetch(url)
		.then(response => response.text())
		.then(html => {
			document.getElementById(component.id).innerHTML = html;
		});
});