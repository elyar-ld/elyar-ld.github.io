var texts = {
	title : {
		eng : "Coming soon...",
		esp : "Próximamente..."
	},
	subtitle : {
		eng : "Just connecting some dots, the page will be launched shortly",
		esp : "Dando los últimos detalles, la página se lanzara en breve"
	},
	timeInfo : {
		eng : "Launching countdown",
		esp : "Tiempo para lanzamiento"
	},
	daysText : {
		eng : "days",
		esp : "días"
	},
	hoursText : {
		eng : "hours",
		esp : "horas"
	},
	minsText : {
		eng : "mins",
		esp : "mins"
	},
	secsText : {
		eng : "secs",
		esp : "segs"
	},
}

function setTexts(lang){
	var keys = Object.keys(texts);
	keys.forEach((key) => {
		document.getElementById(key).innerHTML = texts[key][lang];
	});
	var langs = Object.keys(texts[keys[0]]);
	langs.forEach((langVal) => {
		document.getElementById(""+langVal).classList.toggle("selected-lang");
	});
}

setTexts("eng");

document.getElementById("eng").addEventListener("click", () => {
	setTexts("eng");
});
document.getElementById("esp").addEventListener("click", () => {
	setTexts("esp");
});