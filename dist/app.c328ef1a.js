// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seriesWrapper = exports.seriesList = exports.seriesBtnRight = exports.seriesBtnLeft = exports.searchResultsEl = exports.search = exports.randomForm = exports.premiereSlider = exports.movieslist = exports.moviesWrapper = exports.moviesRandomEl = exports.moviesElem = exports.moviesBtnRight = exports.moviesBtnLeft = exports.modalWindowYear = exports.modalWindowTitle = exports.modalWindowText = exports.modalWindowSection = exports.modalWindowImage = exports.modalWindowGenres = exports.modalWindowCountry = exports.modalWindowBtn = exports.modalPrevBtn = exports.modalOverlay = exports.modalNextBtn = exports.modalCloseBtn = exports.loadingDiv = exports.form = exports.cartoonWrapper = exports.cartoonList = exports.cartoonBtnRight = exports.cartoonBtnLeft = exports.boxes = exports.TRILLERS_URL = exports.TOP_FILMS_URL = exports.TOP_FILMS_PAGE_URL = exports.RANDOM_API_KEY = exports.PREMIERS_URL = exports.PREMIERS_API_KEY = exports.HORRIRS_URL = exports.FILMS_URL_MOVIES = exports.FILMSS_URL = exports.FANTASY_URL = exports.DRAMAS_URL = exports.COMEDIES_URL = exports.API_URL_SEARCH = exports.API_URL_POPULAR = exports.API_KEY_POPULAR = exports.API_KEY_MOVIES = void 0;
var FILMS_URL_MOVIES = "https://api.kinopoisk.dev/v1.3/movie?page=1&limit=100";
exports.FILMS_URL_MOVIES = FILMS_URL_MOVIES;
var API_KEY_MOVIES = "1CZFK25-MDA4Q4W-MJVMYF9-Q7QZBH1";
exports.API_KEY_MOVIES = API_KEY_MOVIES;
var movieslist = document.querySelector('.movies-list');
exports.movieslist = movieslist;
var seriesList = document.querySelector('.series-list');
exports.seriesList = seriesList;
var cartoonList = document.querySelector('.cartoon-list');
exports.cartoonList = cartoonList;
var moviesBtnLeft = document.getElementById('movie-btn--left');
exports.moviesBtnLeft = moviesBtnLeft;
var moviesBtnRight = document.getElementById('movie-btn--right');
exports.moviesBtnRight = moviesBtnRight;
var moviesWrapper = document.getElementById('movies-wrapper');
exports.moviesWrapper = moviesWrapper;
var seriesBtnLeft = document.getElementById('series-btn--left');
exports.seriesBtnLeft = seriesBtnLeft;
var seriesBtnRight = document.getElementById('series-btn--right');
exports.seriesBtnRight = seriesBtnRight;
var seriesWrapper = document.getElementById('series-wrapper');
exports.seriesWrapper = seriesWrapper;
var cartoonBtnLeft = document.getElementById('cartoon-btn--left');
exports.cartoonBtnLeft = cartoonBtnLeft;
var cartoonBtnRight = document.getElementById('cartoon-btn--right');
exports.cartoonBtnRight = cartoonBtnRight;
var cartoonWrapper = document.getElementById('cartoon-wrapper');
exports.cartoonWrapper = cartoonWrapper;
var modalWindowSection = document.querySelector('.modal-window');
exports.modalWindowSection = modalWindowSection;
var modalWindowTitle = document.querySelector('.modal-window__title');
exports.modalWindowTitle = modalWindowTitle;
var modalWindowImage = document.querySelector('.modal-window__img');
exports.modalWindowImage = modalWindowImage;
var modalWindowYear = document.querySelector('.modal-window__year');
exports.modalWindowYear = modalWindowYear;
var modalWindowCountry = document.querySelector('.modal-window__country');
exports.modalWindowCountry = modalWindowCountry;
var modalWindowGenres = document.querySelector('.modal-window__genres');
exports.modalWindowGenres = modalWindowGenres;
var modalWindowText = document.querySelector('.modal-window__text');
exports.modalWindowText = modalWindowText;
var modalWindowBtn = document.querySelector('.modal-window__btn');
exports.modalWindowBtn = modalWindowBtn;
var PREMIERS_API_KEY = "3b609fe2-8b25-48b7-b53e-bf8800018895";
exports.PREMIERS_API_KEY = PREMIERS_API_KEY;
var PREMIERS_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=AUGUST";
exports.PREMIERS_URL = PREMIERS_URL;
var premiereSlider = document.querySelector('.mySwiper');
exports.premiereSlider = premiereSlider;
var FILMSS_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films";
exports.FILMSS_URL = FILMSS_URL;
var API_KEY_POPULAR = "3b609fe2-8b25-48b7-b53e-bf8800018895";
exports.API_KEY_POPULAR = API_KEY_POPULAR;
var API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
exports.API_URL_POPULAR = API_URL_POPULAR;
var API_URL_SEARCH = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';
exports.API_URL_SEARCH = API_URL_SEARCH;
var moviesElem = document.querySelector(".popular-movies");
exports.moviesElem = moviesElem;
var searchResultsEl = document.querySelector(".search-movies");
exports.searchResultsEl = searchResultsEl;
var form = document.querySelector("form");
exports.form = form;
var search = document.querySelector(".header__search");
exports.search = search;
var modalOverlay = document.getElementById("modalOverlay");
exports.modalOverlay = modalOverlay;
var modalCloseBtn = document.getElementById("modalCloseBtn");
exports.modalCloseBtn = modalCloseBtn;
var modalPrevBtn = document.getElementById("modalPrevBtn");
exports.modalPrevBtn = modalPrevBtn;
var modalNextBtn = document.getElementById("modalNextBtn");
exports.modalNextBtn = modalNextBtn;
var TOP_FILMS_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=";
exports.TOP_FILMS_URL = TOP_FILMS_URL;
var TOP_FILMS_PAGE_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=";
exports.TOP_FILMS_PAGE_URL = TOP_FILMS_PAGE_URL;
var TRILLERS_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=1&type=FILM";
exports.TRILLERS_URL = TRILLERS_URL;
var DRAMAS_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=2&type=FILM";
exports.DRAMAS_URL = DRAMAS_URL;
var FANTASY_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=6&type=FILM";
exports.FANTASY_URL = FANTASY_URL;
var COMEDIES_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=13&type=FILM";
exports.COMEDIES_URL = COMEDIES_URL;
var HORRIRS_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=17&type=FILM";
exports.HORRIRS_URL = HORRIRS_URL;
var RANDOM_API_KEY = "23fa5bf8-77b1-4e9d-8fe5-5040e6c7d436";
exports.RANDOM_API_KEY = RANDOM_API_KEY;
var moviesRandomEl = document.querySelector(".random-movies");
exports.moviesRandomEl = moviesRandomEl;
var randomForm = document.querySelector('.random-form');
exports.randomForm = randomForm;
var boxes = document.querySelector('.top-250-films__boxes');
exports.boxes = boxes;
var loadingDiv = document.querySelector('.loader');
exports.loadingDiv = loadingDiv;
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50808" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map