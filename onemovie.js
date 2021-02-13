
var baseUrlString = 'https://api.tvmaze.com/shows/' + getMovieID();
function getMovieID() {
    // console.log(localStorage.getItem("movieID"))
    return localStorage.getItem("movieID")
}


function getMovieID() {
    return localStorage.getItem("movieID",)
}

function showTitle() {
    var req = new XMLHttpRequest();
    var baseUrl = baseUrlString;

    req.open('GET', baseUrl);

    req.onload = function () {
        var titleInfo = JSON.parse(req.responseText)

        console.log(titleInfo)
        console.log(titleInfo.name)


        createTitle(titleInfo.name)
    }
    req.send();
}

function showMoviePoster() {
    var req = new XMLHttpRequest();
    var baseUrl = baseUrlString;

    req.open('GET', baseUrl);

    req.onload = function () {
        var imgInfo = JSON.parse(req.responseText)
        // console.log("poster")
        // console.log(imgInfo)

        createMoviePoster(imgInfo.image.medium)
    }
    req.send();
}

function showSeasons() {
    var req = new XMLHttpRequest();
    var baseUrl = baseUrlString + '/seasons';

    req.open('GET', baseUrl);

    req.onload = function () {
        var seasonInfo = JSON.parse(req.responseText)
        // console.log("seasons")
        // console.log(seasonInfo)
        seasonInfo.forEach(function (el) {
            // console.log(el)
            // console.log(el.premiereDate)
            // console.log(el.endDate)
            createSeasonData(el.premiereDate, el.endDate)
        })
    }
    req.send();
}
function showCast() {
    var req = new XMLHttpRequest();
    var baseUrl = baseUrlString + '/cast';

    req.open('GET', baseUrl);

    req.onload = function () {
        var castInfo = JSON.parse(req.responseText)
        // console.log("cast")


        castInfo.slice(0, 10).map((el, i) => {
            createCastData(el.person.name)
             console.log(el.person.name, "usaoo u map")
          });   

    }

    req.send();
}
function showDetails() {
    var req = new XMLHttpRequest();
    var baseUrl = baseUrlString;

    req.open('GET', baseUrl);

    req.onload = function () {
        var detailsInfo = JSON.parse(req.responseText)
        console.log(detailsInfo)
        // console.log(DetailsInfo)
        // console.log(DetailsInfo.summary)


        createDetails(detailsInfo.summary)
    }
    req.send();
}
showTitle()
showMoviePoster()
showSeasons()
showCast()
showDetails()

function createTitle(name) {
    var title = document.querySelector(".title")
    console.log(title)
    // var p = document.createElement("p")
    // title.appendChild(p)
    title.textContent = name
    // console.log(p)
}
function createMoviePoster(poster) {
    var moviePoster = document.getElementById("moviePoster")
    // console.log(moviePoster)
    var movieImg = document.createElement("img")
    movieImg.setAttribute('src', poster);
    moviePoster.appendChild(movieImg)
}

function createSeasonData(pdate, enddate) {
    var season = document.getElementById("seasons")
    var p = document.createElement("p")
    season.appendChild(p)
    // console.log(season)
    p.textContent = pdate + " " + enddate
}

function createCastData(actors) {
    var cast = document.getElementById("cast")
    var p = document.createElement("p")
    // console.log(cast)
    cast.appendChild(p)
    p.textContent = actors

}
function createDetails(sumarry) {
    var details = document.querySelector(".details")
    var p = document.createElement("p")
    details.appendChild(p)
    p.innerHTML = sumarry
}





