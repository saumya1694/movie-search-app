const API_KEY = "afe58dc8";

async function searchMovie(){

let query = document.getElementById("searchInput").value;

if(query === "") return;

let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;

let response = await fetch(url);

let data = await response.json();

let moviesDiv = document.getElementById("movies");

moviesDiv.innerHTML="";

if(data.Search){

data.Search.forEach(movie=>{

let movieCard = document.createElement("div");

movieCard.classList.add("movie");

movieCard.innerHTML = `
<img src="${movie.Poster}">
<h3>${movie.Title}</h3>
<p>${movie.Year}</p>
`;

moviesDiv.appendChild(movieCard);

});

}else{

moviesDiv.innerHTML="<p>No movies found</p>";

}

}