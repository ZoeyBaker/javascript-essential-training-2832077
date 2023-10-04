const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd37724f31amsh5b7b473995b9699p1dd08djsn1424a0334a39',
    'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
  }
};

fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));