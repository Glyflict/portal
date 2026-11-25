document.querySelectorAll(".grid div img").forEach(img => {
	const a = document.createElement("a");
	a.href = img.src;
	a.target = "_blank";
	img.parentNode.insertBefore(a, img);
	a.appendChild(img);
});