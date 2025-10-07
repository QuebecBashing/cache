const myLocalPackage = require("my-local-package");

console.log(myLocalPackage.greet("World"));

const axios = require("axios");

async function fetchData() {
	try {
		const response = await axios.get(
			"https://github.com",
		);
		console.log("Fetched data:", response.data);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

fetchData();
