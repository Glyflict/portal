async function setLanguage(lang) {
	const url = new URL(location.href);

	if (url.searchParams.get("lang") !== lang) {
		url.searchParams.set("lang", lang);
		history.replaceState(null, "", url);
	}
	
	const response = await fetch(`/portal/localization/${lang}.json`);
	const data = await response.json();

	// ページの言語
	document.documentElement.lang = lang;

	// テキストの翻訳
	document.querySelectorAll("[data-i18n]").forEach(element => {
		const key = element.dataset.i18n;
		const value = key.split(".").reduce((obj, k) => obj?.[k], data);

		if (value !== undefined) {
			element.textContent = value;
		}
	});

	// HTML属性の翻訳
	document.querySelectorAll("[data-i18n-attr]").forEach(element => {
		const attributes = element.dataset.i18nAttr.split(",");

		attributes.forEach(item => {
			const [attribute, key] = item.trim().split(":");
			const value = key.split(".").reduce((obj, k) => obj?.[k], data);

			if (value !== undefined) {
				element.setAttribute(attribute, value);
			}
		});
	});
}