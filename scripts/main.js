document.addEventListener("DOMContentLoaded", initialize)

function initialize() {

    let btn = document.getElementById("btn");

    document.getElementById('txt').onkeydown = function (event) {
        if (event.keyCode == 13) {
            getMovieData();
        }
    }
    btn.addEventListener("click", getMovieData)
}

function getMovieData() {

    let txt = document.getElementById("txt");
    let apiKey = '86c39163';
    let url = "http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + txt.value
    fetch(url)

        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            let movie = document.getElementById("movie");
            let movieInfo = document.getElementById("movieInfo");
            let title = myJson.Title;
            movieInfo.innerHTML = title;
            movieInfo.innerHTML += '<br>';
            movieInfo.innerHTML += myJson.Plot;
            movieInfo.innerHTML += '<br>';
            myJson.Actors.split(",").forEach(function (actor) {
                movieInfo.innerHTML += actor + " | "
            })
            movieInfo.innerHTML += '<br>';

            myJson.Ratings.forEach(function (rating) {
                movieInfo.innerHTML += rating.Source + " : " + rating.Value + "<br>"
            })
            let link = document.createElement("a");
            link.href = "https://www.imdb.com/title/" + myJson.imdbID;
            let img = document.createElement("img");
            img.src = myJson.Poster;
            img.style.width = "25vw";
            link.appendChild(img);
            movie.appendChild(link);
        });

}