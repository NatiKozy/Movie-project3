export const FILMS_URL_MOVIES = `https://api.kinopoisk.dev/v1.3/movie?page=1&limit=100`;
export const API_KEY_MOVIES = `1CZFK25-MDA4Q4W-MJVMYF9-Q7QZBH1`;
export const movieslist = document.querySelector('.movies-list');
export const seriesList = document.querySelector('.series-list');
export const cartoonList = document.querySelector('.cartoon-list');

export const moviesBtnLeft = document.getElementById('movie-btn--left');
export const moviesBtnRight = document.getElementById('movie-btn--right');
export const moviesWrapper = document.getElementById('movies-wrapper');

export const seriesBtnLeft = document.getElementById('series-btn--left');
export const seriesBtnRight = document.getElementById('series-btn--right');
export const seriesWrapper = document.getElementById('series-wrapper');

export const cartoonBtnLeft = document.getElementById('cartoon-btn--left');
export const cartoonBtnRight = document.getElementById('cartoon-btn--right');
export const cartoonWrapper = document.getElementById('cartoon-wrapper');

export const modalWindowSection = document.querySelector('.modal-window');
export const modalWindowTitle = document.querySelector('.modal-window__title');
export const modalWindowImage = document.querySelector('.modal-window__img');
export const modalWindowYear = document.querySelector('.modal-window__year');
export const modalWindowCountry = document.querySelector('.modal-window__country');
export const modalWindowGenres = document.querySelector('.modal-window__genres');
export const modalWindowText = document.querySelector('.modal-window__text');
export const modalWindowBtn = document.querySelector('.modal-window__btn');

export const PREMIERS_API_KEY = `3b609fe2-8b25-48b7-b53e-bf8800018895`;
export const PREMIERS_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=AUGUST`;
export const premiereSlider = document.querySelector('.mySwiper');


export const API_KEY_POPULAR = `3b609fe2-8b25-48b7-b53e-bf8800018895`;
export const API_URL_POPULAR = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1`;
export const API_URL_SEARCH = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';

export const moviesElem = document.querySelector(".popular-movies");

export const form = document.querySelector("form");

export const search = document.querySelector(".header__search");

export const modalOverlay = document.getElementById("modalOverlay");
export const modalCloseBtn = document.getElementById("modalCloseBtn");
export const modalPrevBtn = document.getElementById("modalPrevBtn");
export const modalNextBtn = document.getElementById("modalNextBtn");

export const TOP_FILMS_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=`
export const TOP_FILMS_PAGE_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=`
export const TRILLERS_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=1&type=FILM`;
export const DRAMAS_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=2&type=FILM`;
export const FANTASY_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=6&type=FILM`;
export const COMEDIES_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=13&type=FILM`
export const HORRIRS_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=17&type=FILM`
export const RANDOM_API_KEY = `23fa5bf8-77b1-4e9d-8fe5-5040e6c7d436`;

export const moviesRandomEl = document.querySelector(".random-movies");
export const randomForm = document.querySelector('.random-form');
export const boxes = document.querySelector('.top-250-films__boxes');
export const loadingDiv = document.querySelector('.loader')