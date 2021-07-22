for (let property in navigator)
	{
		console.log(property + ":", navigator[property]);
	}
navigator.geolocation.getCurrentPosition((position) => alert(position.coords.latitude + ' - ' + position.coords.longitude));

let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
