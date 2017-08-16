const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';

export const earthquakes = fetch(url)
	.then((res) => {
		return res.json();
	})
