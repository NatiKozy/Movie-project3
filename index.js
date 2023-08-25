 import { FILMS_URL_MOVIES, API_KEY_MOVIES, movieslist, seriesList, cartoonList } from "./app";
//АНЯ НАЧАЛО секция MOVIES
async function getFilms() {
    try {
        const response = await fetch(FILMS_URL_MOVIES, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY_MOVIES,
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        const films = await data.docs;
        checmoviekType(films)
    } catch (err) {
        console.error(err)
    }
};


function createMovieCard(parent, image, alt, year, country, genres, text) {
    const item = document.createElement('li');
    item.classList.add('movies-list__item');
    item.addEventListener('click', (event) => {
        event.preventDefault;
        showMovieModalWindow(image, alt, year, country, genres, text);
    })
    item.innerHTML = `<img class="movies-list__img" src="${image}" alt="${alt}">`

    parent.append(item);

}

function showMoviesCards(parent, array) {
    for (let item of array) {
        createMovieCard(parent, item.poster.previewUrl, item.name, item.year, getArrayItemsList(item.countries), getArrayItemsList(item.genres), item.description)
    }
}

function checmoviekType(array) {
    for (let item of array) {
        switch (item.type) {
            case "movie": {
                const movies = [];
                movies.push(item);
                showMoviesCards(movieslist, movies)
                break;
            }
            case "tv-series": {
                const series = [];
                series.push(item);
                showMoviesCards(seriesList, series)
                break;
            }
            case "cartoon": {
                const cartoons = [];
                cartoons.push(item);
                showMoviesCards(cartoonList, cartoons)
                break;
            }
        }
    }
}

//галерея ()
import { moviesBtnLeft, moviesBtnRight, moviesWrapper, seriesBtnLeft, seriesBtnRight, seriesWrapper, cartoonBtnLeft, cartoonBtnRight, cartoonWrapper  } from "./app";

document.addEventListener(
    "DOMContentLoaded",
    function () {
        moviesBtnRight.addEventListener('click', function () {
            moviesWrapper.scrollLeft += 200;
        })
        moviesBtnLeft.addEventListener('click', function () {
            moviesWrapper.scrollLeft -= 200;
        })
        seriesBtnRight.addEventListener('click', function () {
            seriesWrapper.scrollLeft += 200;
        })
        seriesBtnLeft.addEventListener('click', function () {
            seriesWrapper.scrollLeft -= 200;
        })
        cartoonBtnRight.addEventListener('click', function () {
            cartoonWrapper.scrollLeft += 200;
        })
        cartoonBtnLeft.addEventListener('click', function () {
            cartoonWrapper.scrollLeft -= 200;
        })
    },
    false,
);


import { modalWindowSection, modalWindowTitle, modalWindowImage, modalWindowYear, modalWindowCountry, modalWindowGenres, modalWindowText, modalWindowBtn  } from "./app";

function showMovieModalWindow(image, alt, year, country, genres, text) {
    modalWindowSection.classList.add('modal-window--active');
    modalWindowImage.src = image;
    modalWindowTitle.textContent = alt;
    modalWindowYear.textContent = `Год: ${year}`;
    modalWindowCountry.textContent = `Страна: ${country}`;
    modalWindowGenres.textContent = `Жанр: ${genres}`;
    modalWindowText.textContent = text;
}

function getArrayItemsList(array) {
    const itemsList = [];
    for (let item of array) {
        itemsList.push(item.name)
    }
    return itemsList.join(', ')
}

modalWindowBtn.addEventListener('click', (event) => {
    event.preventDefault();
    modalWindowSection.classList.remove('modal-window--active');
})

getFilms();

//АНЯ КОНЕЦ

//НАТАША НАЧАЛО

//slider realization//
import { PREMIERS_URL, PREMIERS_API_KEY } from "./app";

async function getPremiers() {
    try {
        const response = await fetch(PREMIERS_URL,

            {
                method: 'GET',
                headers: {
                    'X-API-KEY': PREMIERS_API_KEY,
                    'Content-Type': 'application/json',
                },
            })
        const data = await response.json();
        const premiers = await data.items;
        showPremiers(premiers);
    } catch (err) {
        console.error(err)
    }
}

import { premiereSlider } from "./app";

function showPremiers(array) {
    for (let item of array) {
        const div = document.createElement('swiper-slide');
        const imgSrc = item.posterUrl;
        const country = item.countries.map((country) => country.country);
        const genre = item.genres.map((genre) => genre.genre);
        div.addEventListener('click', (event) => {
            event.preventDefault;
            showMovieModalWindow(item.posterUrlPreview, item.nameRu, item.year, country, genre, `Описание отсутствует`);
        })
        div.innerHTML =
            `
         <img src="${imgSrc}">
         `
        premiereSlider.append(div);
    }
}

getPremiers();


//НАТАША КОНЕЦ

//ЛЕНА НАЧАЛО
import { FILMSS_URL, API_KEY_POPULAR, API_URL_POPULAR, API_URL_SEARCH, moviesElem, searchResultsEl, form} from "./app";

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchInput = document.querySelector(".header__search");
    const searchValue = searchInput.value.trim();

    if (searchValue) {
        const apiSearchUrl = `${API_URL_SEARCH}${searchValue}`;
        displaySearchResults(apiSearchUrl);
        searchInput.value = "";
    }
});

import { search } from "./app";

async function getMovies(url) {
    try {
        const resp = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY_POPULAR,
            },
        });
        const respData = await resp.json();
        return respData;
    } catch (err) {
        console.error(err);
    }
}

function getClassOfRate(voting) {
    if (voting >= 7) {
        return "green";
    } else if (voting > 5) {
        return "orange";
    } else {
        return "red";
    }
}

function displayMovies(data, container) {
    container.innerHTML = "";

    if (data.films && data.films.length > 0) {
        data.films.forEach((movie) => {
            const movieEl = document.createElement("div");
            movieEl.classList.add("popular-movie");
            movieEl.innerHTML = `
                <div class="popular-movie__cover-inner">
                    <img src="${movie.posterUrlPreview}" class="popular-movie__cover" alt="${movie.nameRu}" />
                    <div class="popular-movie__cover--darkened"></div>
                </div>
                <div class="popular-movie__info">
                    <div class="popular-movie__title">${movie.nameRu}</div>
                    <div class="popular-movie__category">${movie.genres.map(genre => ` ${genre.genre}`)}</div>
                    <div class="popular-movie__average popular-movie__average--${getClassOfRate(movie.rating)}">${movie.rating}</div>
                </div>`;
            container.appendChild(movieEl);
        });
    } else {
        const noResultsEl = document.createElement("div");
        noResultsEl.classList.add("no-results");
        noResultsEl.textContent = "No movies found.";
        container.appendChild(noResultsEl);
    }
}

import { modalOverlay, modalCloseBtn, modalPrevBtn, modalNextBtn} from "./app";

let currentModalPage = 1;
let moviesPerPage = 10;
let modalMoviesData = [];

function openModal() {
    modalOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modalOverlay.style.display = "none";
    document.body.style.overflow = "auto";
}

modalCloseBtn.addEventListener("click", closeModal);

modalPrevBtn.addEventListener("click", () => {
    if (currentModalPage > 1) {
        currentModalPage--;
        displayMoviesInModal();
    }
});

modalNextBtn.addEventListener("click", () => {
    if ((currentModalPage * moviesPerPage) < modalMoviesData.length) {
        currentModalPage++;
        displayMoviesInModal();
    }
});

async function displaySearchResults(url) {
    const searchData = await getMovies(url);
    modalMoviesData = searchData.films;
    currentModalPage = 1;
    displayMoviesInModal();
    openModal();
}

async function displayMoviesInModal() {
    const startIdx = (currentModalPage - 1) * moviesPerPage;
    const endIdx = startIdx + moviesPerPage;
    const moviesToDisplay = modalMoviesData.slice(startIdx, endIdx);

    const modalMoviesContainer = document.querySelector(".search-movies");
    modalMoviesContainer.innerHTML = "";

    moviesToDisplay.forEach(movieData => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("search-movie");
        movieEl.innerHTML = `
              <div class="search-movie__cover-inner">
                <img src="${movieData.posterUrlPreview}" class="search-movie_cover" alt="${movieData.nameRu}" />
              </div>
              <div class="search-movie__info">
                <div class="search-movie__title">${movieData.nameRu}</div>
                <div class="search-movie__category">${movieData.genres.map(genre => ` ${genre.genre}`)}</div>
              </div>`;
        modalMoviesContainer.appendChild(movieEl);
    });
}

async function main() {
    const popularData = await getMovies(API_URL_POPULAR);
    displayMovies(popularData, moviesElem);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (search.value) {
            const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
            displaySearchResults(apiSearchUrl);
            search.value = "";
        }
    });
}

main();

//ЛЕНА КОНЕЦ

//ЮЛЯ НАЧАЛО
import { TOP_FILMS_URL, TOP_FILMS_PAGE_URL, TRILLERS_URL, DRAMAS_URL, FANTASY_URL, COMEDIES_URL, HORRIRS_URL, RANDOM_API_KEY } from "./app";

function arrayRandElement(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand]
}


async function getRandomMovie(url) {
    try {
        loader()
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': RANDOM_API_KEY,
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        const res = arrayRandElement(data.items)
        showRandomMovie(res)
        hiddenLoader()
    } catch (error) {
        console.error(error)
    }
};


import { moviesRandomEl } from "./app";

function showRandomMovie(movie) {
    const country = movie.countries.map((country) => country.country);
    const genre = movie.genres.map((genre) => genre.genre);
    const movieEl = document.createElement("div");
    movieEl.classList.add("random__movie");
    movieEl.addEventListener('click', (event) => {
        event.preventDefault;
        showMovieModalWindow(movie.posterUrlPreview, movie.nameRu, movie.year, country, genre, `Описание отсутствует`);
    })
    movieEl.classList.add("random__movie");
    movieEl.innerHTML = `
        <div class="movie__cover-inner">
        <img
            src="${movie.posterUrlPreview}"
            class="movie__cover"
            alt="${movie.nameRu}"/>
        <div class="movie__cover--darkened"></div>
        </div>
        <div class="movie__info">
        <div class="movie__title">${movie.nameRu}</div>
        <div class="movie__category">${movie.genres.map(
        (genre) => ` ${genre.genre}`
    )}</div>
        ${movie.ratingKinopoisk &&
        `<div class="movie__average movie__average--${getClassOfRate(movie.ratingKinopoisk)}">${movie.ratingKinopoisk}</div>`
        }
        </div>
        `
    moviesRandomEl.append(movieEl)
}

function checkSelect() {
    const selectedValue = document.getElementById("select-list").value;

    if (selectedValue === "Драма") {
        getRandomMovie(DRAMAS_URL)
    } else if (selectedValue === "Комедия") {
        getRandomMovie(COMEDIES_URL)
    } else if (selectedValue === "Ужасы") {
        getRandomMovie(HORRIRS_URL)
    } else if (selectedValue === "Триллер") {
        getRandomMovie(TRILLERS_URL)
    } else if (selectedValue === "Фантастика") {
        getRandomMovie(FANTASY_URL)
    }
}
import {randomForm} from "./app";

randomForm.addEventListener('change', (e) => {
    e.preventDefault();

    checkSelect()
    moviesRandomEl.innerHTML = ''
});

async function getTopFilms(num) {
    try {
        const response = await fetch(`${TOP_FILMS_URL}${num}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': RANDOM_API_KEY,
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        showTopMovies(data, '.top-250-films__box')
    } catch (error) {
        console.error(error)
    }
};
getTopFilms('1')

async function getTopFilmsTwo(num) {
    try {
        const response = await fetch(`${TOP_FILMS_URL}${num}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': RANDOM_API_KEY,
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        showTopMovies(data, '.top-250-films__box-two')
    } catch (error) {
        console.error(error)
    }
};

import { boxes } from "./app";

function showTopMovies(data, conatainer) {
    const topMoviesBox = document.querySelector(conatainer);
    data.films.forEach((movie) => {
        const country = movie.countries.map((country) => country.country);
        const genre = movie.genres.map((genre) => genre.genre);
        const topMovie = document.createElement("div");
        topMovie.addEventListener('click', (event) => {
            event.preventDefault;
            showMovieModalWindow(movie.posterUrlPreview, movie.nameRu, movie.year, country, genre, `Описание отсутствует`);
        })
        topMovie.classList.add("top-movie");
        topMovie.innerHTML = `
        <div class="top-movie__cover-inner">
        <img
            src="${movie.posterUrlPreview}"
            class="top-movie__cover"
            alt="${movie.nameRu}"/>
        <div class="top-movie__cover--darkened"></div>
        </div>
        <div class="top-movie__info">
        <div class="top-movie__title">${movie.nameRu}</div>
        <div class="top-movie__category">${movie.genres.map(
            (genre) => ` ${genre.genre}`
        )}</div>
        ${movie.rating &&
            `
        <div class="top-movie__average top-movie__average--${getClassOfRate(
                movie.rating
            )}">${movie.rating}</div>
        `
            }
        </div>
        `;
        topMoviesBox.append(topMovie);
        boxes.append(topMoviesBox)
    });
}

function disableBtn(btn) {
    document.querySelector(btn).disabled = true;
}

function unlockBtn(btn) {
    document.querySelector(btn).disabled = false;
}
const btnTop = document.querySelector('.top-250-films__button')
const hideBtn = document.querySelector('.top-250-films__button-hide')

let numPage = 2

function countPage() {
    console.log(numPage)
    numPage += 1
}

btnTop.addEventListener('click', event => {
    event.preventDefault()
    getTopFilmsTwo(numPage)
    hideBtn.display = 'block'
    countPage()
    unlockBtn('.top-250-films__button-hide')
    showBtn()
})

const showBtn = () => {
    hideBtn.style.display = "block"
}
const hideButton = () => {
    hideBtn.style.display = "none"
}

hideBtn.addEventListener('click', event => {
    event.preventDefault()
    document.querySelector('.top-250-films__box-two').innerHTML = ''
    disableBtn('.top-250-films__button-hide')
    unlockBtn('.top-250-films__button')
    numPage = 2
    hideButton()
})


import { loadingDiv } from "./app";

const loader = () => {
    loadingDiv.style.display = 'block';
}

const hiddenLoader = () => {
    loadingDiv.style.display = 'none';
}

window.onload = function () {
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 2500);
}
//ЮЛЯ КОНЕЦ