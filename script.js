function showData(response) {
  console.log(response.data.results[0]);
}

let url = "https://swapi.dev/api/people/";
axios.get(url).then(showData);
