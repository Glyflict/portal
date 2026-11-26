const scriptURL = document.currentScript.src;

const components = [
	{ file: "menu.html", id: "menu-container" },
	{ file: "footer.html", id: "footer-container" }
];

async function loadComponents() {
	await Promise.all(components.map(async component => {
		const url = new URL(component.file, scriptURL);
		const response = await fetch(url);

		console.log("File:", url.href);
		console.log("Status:", response.status);

		const html = await response.text();

		console.log("HTML:", html);

		document.getElementById(component.id).innerHTML = html;

		console.log("Inserted:", document.getElementById(component.id).innerHTML);
	}));

	const params = new URLSearchParams(location.search);
	const lang = params.get("lang") || "ja";

	await setLanguage(lang);

	document.getElementById("language-select").value = lang;
}

loadComponents();