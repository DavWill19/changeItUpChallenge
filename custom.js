

const api1 = 'https://api.openweathermap.org/data/2.5/weather?lat=37.6611&lon=-82.2856&cnt=10&appid=9fe3916f8f1041f29ee752c05a931976&units=imperial';

let temperature = document.querySelector('.temperature-degree');
let describe = document.querySelector('.temperature-description');
let icon = document.querySelector('.icon');

function fetch1(api1, temp, description, pic) { 	
	fetch(api1)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
			temp.textContent = Math.round(data.main.temp) + 'F';
			description.textContent = data.weather[0].description;
			var img = document.createElement("img");
			img.classList.add("iconImage");0
			img.src = `animated/${data.weather[0].icon}.svg`;
			var src = document.querySelector(pic);
			src.appendChild(img);
		})
		.catch(err => {
			console.error(err);
		});
	};

fetch1(api1, temperature, describe, ".icon");

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.66112492510572, lng: -82.28565387925029 },
    zoom: 8,
  });
  new google.maps.Marker({
    position: { lat: 37.66112492510572, lng: -82.28565387925029 },
    map,
    title: "NuCamp",
  });

}
