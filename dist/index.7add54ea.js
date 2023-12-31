// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hW6xH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ed3348f67add54ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"lgA25":[function(require,module,exports) {
var _appJs = require("./app.js");
async function getFilms() {
    try {
        const response = await fetch((0, _appJs.FILMS_URL_MOVIES), {
            method: "GET",
            headers: {
                "X-API-KEY": (0, _appJs.API_KEY_MOVIES),
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        const films = await data.docs;
        checmoviekType(films);
    } catch (err) {
        console.error(err);
    }
}
function createMovieCard(parent, image, alt, year, country, genres, text) {
    const item = document.createElement("li");
    item.classList.add("movies-list__item");
    item.addEventListener("click", (event)=>{
        event.preventDefault;
        showMovieModalWindow(image, alt, year, country, genres, text);
    });
    item.insertAdjacentHTML(`afterbegin`, `<img class="movies-list__img" src="${image}" alt="${alt}">`);
    parent.append(item);
}
function showMoviesCards(parent, array) {
    for (let item of array)createMovieCard(parent, item.poster.previewUrl, item.name, item.year, getArrayItemsList(item.countries), getArrayItemsList(item.genres), item.description);
}
function checmoviekType(array) {
    for (let item of array)switch(item.type){
        case "movie":
            {
                const movies = [];
                movies.push(item);
                showMoviesCards((0, _appJs.movieslist), movies);
                break;
            }
        case "tv-series":
            {
                const series = [];
                series.push(item);
                showMoviesCards((0, _appJs.seriesList), series);
                break;
            }
        case "cartoon":
            {
                const cartoons = [];
                cartoons.push(item);
                showMoviesCards((0, _appJs.cartoonList), cartoons);
                break;
            }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    (0, _appJs.moviesBtnRight).addEventListener("click", function() {
        (0, _appJs.moviesWrapper).scrollLeft += 200;
    });
    (0, _appJs.moviesBtnLeft).addEventListener("click", function() {
        (0, _appJs.moviesWrapper).scrollLeft -= 200;
    });
    (0, _appJs.seriesBtnRight).addEventListener("click", function() {
        (0, _appJs.seriesWrapper).scrollLeft += 200;
    });
    (0, _appJs.seriesBtnLeft).addEventListener("click", function() {
        (0, _appJs.seriesWrapper).scrollLeft -= 200;
    });
    (0, _appJs.cartoonBtnRight).addEventListener("click", function() {
        (0, _appJs.cartoonWrapper).scrollLeft += 200;
    });
    (0, _appJs.cartoonBtnLeft).addEventListener("click", function() {
        (0, _appJs.cartoonWrapper).scrollLeft -= 200;
    });
}, false);
function showMovieModalWindow(image, alt, year, country, genres, text) {
    (0, _appJs.modalWindowSection).classList.add("modal-window--active");
    (0, _appJs.modalWindowImage).src = image;
    (0, _appJs.modalWindowTitle).textContent = alt;
    (0, _appJs.modalWindowYear).textContent = `Год: ${year}`;
    (0, _appJs.modalWindowCountry).textContent = `Страна: ${country}`;
    (0, _appJs.modalWindowGenres).textContent = `Жанр: ${genres}`;
    (0, _appJs.modalWindowText).textContent = text;
}
function getArrayItemsList(array) {
    const itemsList = [];
    for (let item of array)itemsList.push(item.name);
    return itemsList.join(", ");
}
(0, _appJs.modalWindowBtn).addEventListener("click", (event)=>{
    event.preventDefault();
    (0, _appJs.modalWindowSection).classList.remove("modal-window--active");
});
getFilms();
//НАТАША НАЧАЛО
//slider realization//
async function getPremiers() {
    try {
        const response = await fetch((0, _appJs.PREMIERS_URL), {
            method: "GET",
            headers: {
                "X-API-KEY": (0, _appJs.PREMIERS_API_KEY),
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        const premiers = await data.items;
        showPremiers(premiers);
    } catch (err) {
        console.error(err);
    }
}
function showPremiers(array) {
    for (let item of array){
        const div = document.createElement("swiper-slide");
        const imgSrc = item.posterUrl;
        const country = item.countries.map((country)=>country.country);
        const genre = item.genres.map((genre)=>genre.genre);
        div.addEventListener("click", (event)=>{
            event.preventDefault;
            showMovieModalWindow(item.posterUrlPreview, item.nameRu, item.year, country, genre, `Описание отсутствует`);
        });
        div.innerHTML = `
         <img src="${imgSrc}">
         `;
        (0, _appJs.premiereSlider).append(div);
    }
}
getPremiers();
//НАТАША КОНЕЦ
//ЛЕНА НАЧАЛО
(0, _appJs.form).addEventListener("submit", async (e)=>{
    e.preventDefault();
    const searchInput = document.querySelector(".header__search");
    const searchValue = searchInput.value.trim();
    if (searchValue) {
        const apiSearchUrl = `${(0, _appJs.API_URL_SEARCH)}${searchValue}`;
        displaySearchResults(apiSearchUrl);
        searchInput.value = "";
    }
});
async function getMovies(url) {
    try {
        const resp = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": (0, _appJs.API_KEY_POPULAR)
            }
        });
        const respData = await resp.json();
        return respData;
    } catch (err) {
        console.error(err);
    }
}
function getClassOfRate(voting) {
    if (voting >= 7) return "green";
    else if (voting > 5) return "orange";
    else return "red";
}
function displayMovies(data, container) {
    container.innerHTML = "";
    if (data.films && data.films.length > 0) data.films.forEach((movie)=>{
        const movieEl = document.createElement("div");
        movieEl.classList.add("popular-movie");
        movieEl.innerHTML = `
               <div class="popular-movie__cover-inner">
                   <img src="${movie.posterUrlPreview}" class="popular-movie__cover" alt="${movie.nameRu}" />
                   <div class="popular-movie__cover--darkened"></div>
               </div>
               <div class="popular-movie__info">
                   <div class="popular-movie__title">${movie.nameRu}</div>
                   <div class="popular-movie__category">${movie.genres.map((genre)=>` ${genre.genre}`)}</div>
                   <div class="popular-movie__average popular-movie__average--${getClassOfRate(movie.rating)}">${movie.rating}</div>
               </div>`;
        movieEl.addEventListener("click", ()=>{
            showMovieModalWindow(movie.posterUrlPreview, movie.nameRu, movie.year, movie.countries.map((country)=>country.country), movie.genres.map((genre)=>genre.genre), "Описание отсутствует");
        });
        container.appendChild(movieEl);
    });
    else {
        const noResultsEl = document.createElement("div");
        noResultsEl.classList.add("no-results");
        noResultsEl.textContent = "No movies found.";
        container.appendChild(noResultsEl);
    }
}
let currentModalPage = 1;
let moviesPerPage = 10;
let modalMoviesData = [];
function openModal() {
    (0, _appJs.modalOverlay).style.display = "flex";
    document.body.style.overflow = "hidden";
}
function closeModal() {
    (0, _appJs.modalOverlay).style.display = "none";
    document.body.style.overflow = "auto";
}
(0, _appJs.modalCloseBtn).addEventListener("click", closeModal);
(0, _appJs.modalPrevBtn).addEventListener("click", ()=>{
    if (currentModalPage > 1) {
        currentModalPage--;
        displayMoviesInModal();
    }
});
(0, _appJs.modalNextBtn).addEventListener("click", ()=>{
    if (currentModalPage * moviesPerPage < modalMoviesData.length) {
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
    moviesToDisplay.forEach((movieData)=>{
        const movieEl = document.createElement("div");
        movieEl.classList.add("search-movie");
        movieEl.innerHTML = `
             <div class="search-movie__cover-inner">
               <img src="${movieData.posterUrlPreview}" class="search-movie_cover" alt="${movieData.nameRu}" />
             </div>
             <div class="search-movie__info">
               <div class="search-movie__title">${movieData.nameRu}</div>
               <div class="search-movie__category">${movieData.genres.map((genre)=>` ${genre.genre}`)}</div>
             </div>`;
        modalMoviesContainer.appendChild(movieEl);
    });
}
async function main() {
    const popularData = await getMovies((0, _appJs.API_URL_POPULAR));
    displayMovies(popularData, (0, _appJs.moviesElem));
    (0, _appJs.form).addEventListener("submit", async (e)=>{
        e.preventDefault();
        if ((0, _appJs.search).value) {
            const apiSearchUrl = `${(0, _appJs.API_URL_SEARCH)}${(0, _appJs.search).value}`;
            displaySearchResults(apiSearchUrl);
            (0, _appJs.search).value = "";
        }
    });
}
main();
//ЛЕНА КОНЕЦ
//ЮЛЯ НАЧАЛО
function arrayRandElement(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
async function getRandomMovie(url) {
    try {
        loader();
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-API-KEY": (0, _appJs.RANDOM_API_KEY),
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        const res = arrayRandElement(data.items);
        showRandomMovie(res);
        hiddenLoader();
    } catch (error) {
        console.error(error);
    }
}
function showRandomMovie(movie) {
    const country = movie.countries.map((country)=>country.country);
    const genre = movie.genres.map((genre)=>genre.genre);
    const movieEl = document.createElement("div");
    movieEl.classList.add("random__movie");
    movieEl.addEventListener("click", (event)=>{
        event.preventDefault;
        showMovieModalWindow(movie.posterUrlPreview, movie.nameRu, movie.year, country, genre, `Описание отсутствует`);
    });
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
        <div class="movie__category">${movie.genres.map((genre)=>` ${genre.genre}`)}</div>
        ${movie.ratingKinopoisk && `<div class="movie__average movie__average--${getClassOfRate(movie.ratingKinopoisk)}">${movie.ratingKinopoisk}</div>`}
        </div>
        `;
    (0, _appJs.moviesRandomEl).append(movieEl);
}
function checkSelect() {
    const selectedValue = document.getElementById("select-list").value;
    switch(selectedValue){
        case "Драма":
            getRandomMovie((0, _appJs.DRAMAS_URL));
            break;
        case "Комедия":
            getRandomMovie((0, _appJs.COMEDIES_URL));
            break;
        case "Ужасы":
            getRandomMovie((0, _appJs.HORRIRS_URL));
            break;
        case "Триллер":
            getRandomMovie((0, _appJs.TRILLERS_URL));
            break;
        case "Фантастика":
            getRandomMovie((0, _appJs.FANTASY_URL));
            break;
    }
}
(0, _appJs.randomForm).addEventListener("change", (e)=>{
    e.preventDefault();
    checkSelect();
    (0, _appJs.moviesRandomEl).innerHTML = "";
});
async function getTopFilms(num) {
    try {
        const response = await fetch(`${(0, _appJs.TOP_FILMS_URL)}${num}`, {
            method: "GET",
            headers: {
                "X-API-KEY": (0, _appJs.RANDOM_API_KEY),
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        showTopMovies(data, ".top-250-films__box");
    } catch (error) {
        console.error(error);
    }
}
getTopFilms("1");
async function getTopFilmsTwo(num) {
    try {
        const response = await fetch(`${(0, _appJs.TOP_FILMS_URL)}${num}`, {
            method: "GET",
            headers: {
                "X-API-KEY": (0, _appJs.RANDOM_API_KEY),
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        showTopMovies(data, ".top-250-films__box-two");
    } catch (error) {
        console.error(error);
    }
}
function showTopMovies(data, conatainer) {
    const topMoviesBox = document.querySelector(conatainer);
    data.films.forEach((movie)=>{
        const country = movie.countries.map((country)=>country.country);
        const genre = movie.genres.map((genre)=>genre.genre);
        const topMovie = document.createElement("div");
        topMovie.addEventListener("click", (event)=>{
            event.preventDefault;
            showMovieModalWindow(movie.posterUrlPreview, movie.nameRu, movie.year, country, genre, `Описание отсутствует`);
        });
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
        <div class="top-movie__category">${movie.genres.map((genre)=>` ${genre.genre}`)}</div>
        ${movie.rating && `
        <div class="top-movie__average top-movie__average--${getClassOfRate(movie.rating)}">${movie.rating}</div>
        `}
        </div>
        `;
        topMoviesBox.append(topMovie);
        (0, _appJs.boxes).append(topMoviesBox);
    });
}
function disableBtn(btn) {
    document.querySelector(btn).disabled = true;
}
function unlockBtn(btn) {
    document.querySelector(btn).disabled = false;
}
const btnTop = document.querySelector(".top-250-films__button");
const hideBtn = document.querySelector(".top-250-films__button-hide");
let numPage = 2;
function countPage() {
    console.log(numPage);
    numPage += 1;
}
btnTop.addEventListener("click", (event)=>{
    event.preventDefault();
    getTopFilmsTwo(numPage);
    hideBtn.display = "block";
    countPage();
    unlockBtn(".top-250-films__button-hide");
    showBtn();
});
const showBtn = ()=>{
    hideBtn.style.display = "block";
};
const hideButton = ()=>{
    hideBtn.style.display = "none";
};
hideBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    document.querySelector(".top-250-films__box-two").innerHTML = "";
    disableBtn(".top-250-films__button-hide");
    unlockBtn(".top-250-films__button");
    numPage = 2;
    hideButton();
});
const loader = ()=>{
    (0, _appJs.loadingDiv).style.display = "block";
};
const hiddenLoader = ()=>{
    (0, _appJs.loadingDiv).style.display = "none";
};
window.onload = function() {
    window.setTimeout(function() {
        document.body.classList.add("loaded");
        document.body.classList.remove("loaded_hiding");
    }, 2500);
} //ЮЛЯ КОНЕЦ
;

},{"./app.js":"4EY4w"}]},["hW6xH","lgA25"], "lgA25", "parcelRequire0a4d")

//# sourceMappingURL=index.7add54ea.js.map
