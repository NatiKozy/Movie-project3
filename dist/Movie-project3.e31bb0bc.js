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
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _app = require("./app");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function getFilms() {
  return _getFilms.apply(this, arguments);
}
function _getFilms() {
  _getFilms = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var response, data, films;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch(_app.FILMS_URL_MOVIES, {
            method: 'GET',
            headers: {
              'X-API-KEY': _app.API_KEY_MOVIES,
              'Content-Type': 'application/json'
            }
          });
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          data = _context2.sent;
          _context2.next = 9;
          return data.docs;
        case 9:
          films = _context2.sent;
          checmoviekType(films);
          _context2.next = 16;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return _getFilms.apply(this, arguments);
}
;
function createMovieCard(parent, image, alt, year, country, genres, text) {
  var item = document.createElement('li');
  item.classList.add('movies-list__item');
  item.addEventListener('click', function (event) {
    event.preventDefault;
    showMovieModalWindow(image, alt, year, country, genres, text);
  });
  item.insertAdjacentHTML("afterbegin", "<img class=\"movies-list__img\" src=\"".concat(image, "\" alt=\"").concat(alt, "\">"));
  parent.append(item);
}
function showMoviesCards(parent, array) {
  var _iterator = _createForOfIteratorHelper(array),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      createMovieCard(parent, item.poster.previewUrl, item.name, item.year, getArrayItemsList(item.countries), getArrayItemsList(item.genres), item.description);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function checmoviekType(array) {
  var _iterator2 = _createForOfIteratorHelper(array),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      switch (item.type) {
        case "movie":
          {
            var movies = [];
            movies.push(item);
            showMoviesCards(_app.movieslist, movies);
            break;
          }
        case "tv-series":
          {
            var series = [];
            series.push(item);
            showMoviesCards(_app.seriesList, series);
            break;
          }
        case "cartoon":
          {
            var cartoons = [];
            cartoons.push(item);
            showMoviesCards(_app.cartoonList, cartoons);
            break;
          }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
document.addEventListener("DOMContentLoaded", function () {
  _app.moviesBtnRight.addEventListener('click', function () {
    _app.moviesWrapper.scrollLeft += 200;
  });
  _app.moviesBtnLeft.addEventListener('click', function () {
    _app.moviesWrapper.scrollLeft -= 200;
  });
  _app.seriesBtnRight.addEventListener('click', function () {
    _app.seriesWrapper.scrollLeft += 200;
  });
  _app.seriesBtnLeft.addEventListener('click', function () {
    _app.seriesWrapper.scrollLeft -= 200;
  });
  _app.cartoonBtnRight.addEventListener('click', function () {
    _app.cartoonWrapper.scrollLeft += 200;
  });
  _app.cartoonBtnLeft.addEventListener('click', function () {
    _app.cartoonWrapper.scrollLeft -= 200;
  });
}, false);
function showMovieModalWindow(image, alt, year, country, genres, text) {
  _app.modalWindowSection.classList.add('modal-window--active');
  _app.modalWindowImage.src = image;
  _app.modalWindowTitle.textContent = alt;
  _app.modalWindowYear.textContent = "\u0413\u043E\u0434: ".concat(year);
  _app.modalWindowCountry.textContent = "\u0421\u0442\u0440\u0430\u043D\u0430: ".concat(country);
  _app.modalWindowGenres.textContent = "\u0416\u0430\u043D\u0440: ".concat(genres);
  _app.modalWindowText.textContent = text;
}
function getArrayItemsList(array) {
  var itemsList = [];
  var _iterator3 = _createForOfIteratorHelper(array),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;
      itemsList.push(item.name);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return itemsList.join(', ');
}
_app.modalWindowBtn.addEventListener('click', function (event) {
  event.preventDefault();
  _app.modalWindowSection.classList.remove('modal-window--active');
});
getFilms();

//НАТАША НАЧАЛО

//slider realization//
function getPremiers() {
  return _getPremiers.apply(this, arguments);
}
function _getPremiers() {
  _getPremiers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var response, data, premiers;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return fetch(_app.PREMIERS_URL, {
            method: 'GET',
            headers: {
              'X-API-KEY': _app.PREMIERS_API_KEY,
              'Content-Type': 'application/json'
            }
          });
        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return response.json();
        case 6:
          data = _context3.sent;
          _context3.next = 9;
          return data.items;
        case 9:
          premiers = _context3.sent;
          showPremiers(premiers);
          _context3.next = 16;
          break;
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return _getPremiers.apply(this, arguments);
}
function showPremiers(array) {
  var _iterator4 = _createForOfIteratorHelper(array),
    _step4;
  try {
    var _loop = function _loop() {
      var item = _step4.value;
      var div = document.createElement('swiper-slide');
      var imgSrc = item.posterUrl;
      var country = item.countries.map(function (country) {
        return country.country;
      });
      var genre = item.genres.map(function (genre) {
        return genre.genre;
      });
      div.addEventListener('click', function (event) {
        event.preventDefault;
        showMovieModalWindow(item.posterUrlPreview, item.nameRu, item.year, country, genre, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442");
      });
      div.innerHTML = "\n         <img src=\"".concat(imgSrc, "\">\n         ");
      _app.premiereSlider.append(div);
    };
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}
getPremiers();

//НАТАША КОНЕЦ

//ЛЕНА НАЧАЛО
_app.form.addEventListener("submit", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var searchInput, searchValue, apiSearchUrl;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          searchInput = document.querySelector(".header__search");
          searchValue = searchInput.value.trim();
          if (searchValue) {
            apiSearchUrl = "".concat(_app.API_URL_SEARCH).concat(searchValue);
            displaySearchResults(apiSearchUrl);
            searchInput.value = "";
          }
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
function getMovies(_x2) {
  return _getMovies.apply(this, arguments);
}
function _getMovies() {
  _getMovies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(url) {
    var resp, respData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return fetch(url, {
            headers: {
              "Content-Type": "application/json",
              "X-API-KEY": _app.API_KEY_POPULAR
            }
          });
        case 3:
          resp = _context4.sent;
          _context4.next = 6;
          return resp.json();
        case 6:
          respData = _context4.sent;
          return _context4.abrupt("return", respData);
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _getMovies.apply(this, arguments);
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
    data.films.forEach(function (movie) {
      var movieEl = document.createElement("div");
      movieEl.classList.add("popular-movie");
      movieEl.innerHTML = "\n                <div class=\"popular-movie__cover-inner\">\n                    <img src=\"".concat(movie.posterUrlPreview, "\" class=\"popular-movie__cover\" alt=\"").concat(movie.nameRu, "\" />\n                    <div class=\"popular-movie__cover--darkened\"></div>\n                </div>\n                <div class=\"popular-movie__info\">\n                    <div class=\"popular-movie__title\">").concat(movie.nameRu, "</div>\n                    <div class=\"popular-movie__category\">").concat(movie.genres.map(function (genre) {
        return " ".concat(genre.genre);
      }), "</div>\n                    <div class=\"popular-movie__average popular-movie__average--").concat(getClassOfRate(movie.rating), "\">").concat(movie.rating, "</div>\n                </div>");
      container.appendChild(movieEl);
    });
  } else {
    var noResultsEl = document.createElement("div");
    noResultsEl.classList.add("no-results");
    noResultsEl.textContent = "No movies found.";
    container.appendChild(noResultsEl);
  }
}
var currentModalPage = 1;
var moviesPerPage = 10;
var modalMoviesData = [];
function openModal() {
  _app.modalOverlay.style.display = "flex";
  document.body.style.overflow = "hidden";
}
function closeModal() {
  _app.modalOverlay.style.display = "none";
  document.body.style.overflow = "auto";
}
_app.modalCloseBtn.addEventListener("click", closeModal);
_app.modalPrevBtn.addEventListener("click", function () {
  if (currentModalPage > 1) {
    currentModalPage--;
    displayMoviesInModal();
  }
});
_app.modalNextBtn.addEventListener("click", function () {
  if (currentModalPage * moviesPerPage < modalMoviesData.length) {
    currentModalPage++;
    displayMoviesInModal();
  }
});
function displaySearchResults(_x3) {
  return _displaySearchResults.apply(this, arguments);
}
function _displaySearchResults() {
  _displaySearchResults = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(url) {
    var searchData;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return getMovies(url);
        case 2:
          searchData = _context5.sent;
          modalMoviesData = searchData.films;
          currentModalPage = 1;
          displayMoviesInModal();
          openModal();
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _displaySearchResults.apply(this, arguments);
}
function displayMoviesInModal() {
  return _displayMoviesInModal.apply(this, arguments);
}
function _displayMoviesInModal() {
  _displayMoviesInModal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var startIdx, endIdx, moviesToDisplay, modalMoviesContainer;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          startIdx = (currentModalPage - 1) * moviesPerPage;
          endIdx = startIdx + moviesPerPage;
          moviesToDisplay = modalMoviesData.slice(startIdx, endIdx);
          modalMoviesContainer = document.querySelector(".search-movies");
          modalMoviesContainer.innerHTML = "";
          moviesToDisplay.forEach(function (movieData) {
            var movieEl = document.createElement("div");
            movieEl.classList.add("search-movie");
            movieEl.innerHTML = "\n              <div class=\"search-movie__cover-inner\">\n                <img src=\"".concat(movieData.posterUrlPreview, "\" class=\"search-movie_cover\" alt=\"").concat(movieData.nameRu, "\" />\n              </div>\n              <div class=\"search-movie__info\">\n                <div class=\"search-movie__title\">").concat(movieData.nameRu, "</div>\n                <div class=\"search-movie__category\">").concat(movieData.genres.map(function (genre) {
              return " ".concat(genre.genre);
            }), "</div>\n              </div>");
            modalMoviesContainer.appendChild(movieEl);
          });
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _displayMoviesInModal.apply(this, arguments);
}
function main() {
  return _main.apply(this, arguments);
}
function _main() {
  _main = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var popularData;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return getMovies(_app.API_URL_POPULAR);
        case 2:
          popularData = _context8.sent;
          displayMovies(popularData, _app.moviesElem);
          _app.form.addEventListener("submit", /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e) {
              var apiSearchUrl;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    e.preventDefault();
                    if (_app.search.value) {
                      apiSearchUrl = "".concat(_app.API_URL_SEARCH).concat(_app.search.value);
                      displaySearchResults(apiSearchUrl);
                      _app.search.value = "";
                    }
                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return function (_x7) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _main.apply(this, arguments);
}
main();

//ЛЕНА КОНЕЦ

//ЮЛЯ НАЧАЛО
function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
function getRandomMovie(_x4) {
  return _getRandomMovie.apply(this, arguments);
}
function _getRandomMovie() {
  _getRandomMovie = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(url) {
    var response, data, res;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          loader();
          _context9.next = 4;
          return fetch(url, {
            method: 'GET',
            headers: {
              'X-API-KEY': _app.RANDOM_API_KEY,
              'Content-Type': 'application/json'
            }
          });
        case 4:
          response = _context9.sent;
          _context9.next = 7;
          return response.json();
        case 7:
          data = _context9.sent;
          res = arrayRandElement(data.items);
          showRandomMovie(res);
          hiddenLoader();
          _context9.next = 16;
          break;
        case 13:
          _context9.prev = 13;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
        case 16:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 13]]);
  }));
  return _getRandomMovie.apply(this, arguments);
}
;
function showRandomMovie(movie) {
  var country = movie.countries.map(function (country) {
    return country.country;
  });
  var genre = movie.genres.map(function (genre) {
    return genre.genre;
  });
  var movieEl = document.createElement("div");
  movieEl.classList.add("random__movie");
  movieEl.addEventListener('click', function (event) {
    event.preventDefault;
    showMovieModalWindow(movie.posterUrlPreview, movie.nameRu, movie.year, country, genre, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442");
  });
  movieEl.classList.add("random__movie");
  movieEl.innerHTML = "\n        <div class=\"movie__cover-inner\">\n        <img\n            src=\"".concat(movie.posterUrlPreview, "\"\n            class=\"movie__cover\"\n            alt=\"").concat(movie.nameRu, "\"/>\n        <div class=\"movie__cover--darkened\"></div>\n        </div>\n        <div class=\"movie__info\">\n        <div class=\"movie__title\">").concat(movie.nameRu, "</div>\n        <div class=\"movie__category\">").concat(movie.genres.map(function (genre) {
    return " ".concat(genre.genre);
  }), "</div>\n        ").concat(movie.ratingKinopoisk && "<div class=\"movie__average movie__average--".concat(getClassOfRate(movie.ratingKinopoisk), "\">").concat(movie.ratingKinopoisk, "</div>"), "\n        </div>\n        ");
  _app.moviesRandomEl.append(movieEl);
}
function checkSelect() {
  var selectedValue = document.getElementById("select-list").value;
  switch (selectedValue) {
    case "Драма":
      getRandomMovie(_app.DRAMAS_URL);
      break;
    case "Комедия":
      getRandomMovie(_app.COMEDIES_URL);
      break;
    case "Ужасы":
      getRandomMovie(_app.HORRIRS_URL);
      break;
    case "Триллер":
      getRandomMovie(_app.TRILLERS_URL);
      break;
    case "Фантастика":
      getRandomMovie(_app.FANTASY_URL);
      break;
  }
}
_app.randomForm.addEventListener('change', function (e) {
  e.preventDefault();
  checkSelect();
  _app.moviesRandomEl.innerHTML = '';
});
function getTopFilms(_x5) {
  return _getTopFilms.apply(this, arguments);
}
function _getTopFilms() {
  _getTopFilms = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(num) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return fetch("".concat(_app.TOP_FILMS_URL).concat(num), {
            method: 'GET',
            headers: {
              'X-API-KEY': _app.RANDOM_API_KEY,
              'Content-Type': 'application/json'
            }
          });
        case 3:
          response = _context10.sent;
          _context10.next = 6;
          return response.json();
        case 6:
          data = _context10.sent;
          showTopMovies(data, '.top-250-films__box');
          _context10.next = 13;
          break;
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          console.error(_context10.t0);
        case 13:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 10]]);
  }));
  return _getTopFilms.apply(this, arguments);
}
;
getTopFilms('1');
function getTopFilmsTwo(_x6) {
  return _getTopFilmsTwo.apply(this, arguments);
}
function _getTopFilmsTwo() {
  _getTopFilmsTwo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(num) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return fetch("".concat(_app.TOP_FILMS_URL).concat(num), {
            method: 'GET',
            headers: {
              'X-API-KEY': _app.RANDOM_API_KEY,
              'Content-Type': 'application/json'
            }
          });
        case 3:
          response = _context11.sent;
          _context11.next = 6;
          return response.json();
        case 6:
          data = _context11.sent;
          showTopMovies(data, '.top-250-films__box-two');
          _context11.next = 13;
          break;
        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
        case 13:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 10]]);
  }));
  return _getTopFilmsTwo.apply(this, arguments);
}
;
function showTopMovies(data, conatainer) {
  var topMoviesBox = document.querySelector(conatainer);
  data.films.forEach(function (movie) {
    var country = movie.countries.map(function (country) {
      return country.country;
    });
    var genre = movie.genres.map(function (genre) {
      return genre.genre;
    });
    var topMovie = document.createElement("div");
    topMovie.addEventListener('click', function (event) {
      event.preventDefault;
      showMovieModalWindow(movie.posterUrlPreview, movie.nameRu, movie.year, country, genre, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442");
    });
    topMovie.classList.add("top-movie");
    topMovie.innerHTML = "\n        <div class=\"top-movie__cover-inner\">\n        <img\n            src=\"".concat(movie.posterUrlPreview, "\"\n            class=\"top-movie__cover\"\n            alt=\"").concat(movie.nameRu, "\"/>\n        <div class=\"top-movie__cover--darkened\"></div>\n        </div>\n        <div class=\"top-movie__info\">\n        <div class=\"top-movie__title\">").concat(movie.nameRu, "</div>\n        <div class=\"top-movie__category\">").concat(movie.genres.map(function (genre) {
      return " ".concat(genre.genre);
    }), "</div>\n        ").concat(movie.rating && "\n        <div class=\"top-movie__average top-movie__average--".concat(getClassOfRate(movie.rating), "\">").concat(movie.rating, "</div>\n        "), "\n        </div>\n        ");
    topMoviesBox.append(topMovie);
    _app.boxes.append(topMoviesBox);
  });
}
function disableBtn(btn) {
  document.querySelector(btn).disabled = true;
}
function unlockBtn(btn) {
  document.querySelector(btn).disabled = false;
}
var btnTop = document.querySelector('.top-250-films__button');
var hideBtn = document.querySelector('.top-250-films__button-hide');
var numPage = 2;
function countPage() {
  console.log(numPage);
  numPage += 1;
}
btnTop.addEventListener('click', function (event) {
  event.preventDefault();
  getTopFilmsTwo(numPage);
  hideBtn.display = 'block';
  countPage();
  unlockBtn('.top-250-films__button-hide');
  showBtn();
});
var showBtn = function showBtn() {
  hideBtn.style.display = "block";
};
var hideButton = function hideButton() {
  hideBtn.style.display = "none";
};
hideBtn.addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.top-250-films__box-two').innerHTML = '';
  disableBtn('.top-250-films__button-hide');
  unlockBtn('.top-250-films__button');
  numPage = 2;
  hideButton();
});
var loader = function loader() {
  _app.loadingDiv.style.display = 'block';
};
var hiddenLoader = function hiddenLoader() {
  _app.loadingDiv.style.display = 'none';
};
window.onload = function () {
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 2500);
};
//ЮЛЯ КОНЕЦ
},{"./app":"app.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56563" + '/');
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
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Movie-project3.e31bb0bc.js.map