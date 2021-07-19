for (let property in navigator)
	{
		console.log(property + ":", navigator[property]);
	}
navigator.geolocation.getCurrentPosition((position) => alert(position.coords.latitude + ' - ' + position.coords.longitude));