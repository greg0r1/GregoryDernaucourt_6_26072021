// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2k6uF":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "a7f64c830d7be9e2";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5MHlR":[function(require,module,exports) {
var _mainPhotographers = require("./main-photographers");
var _mainPhotographer = require("./main-photographer");
_mainPhotographers.mainPhotographers(); // mainPhotographer();

},{"./main-photographers":"5Yi1M","./main-photographer":"4UoAk"}],"5Yi1M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mainPhotographers", ()=>mainPhotographers
);
// Model
var _dataService = require("./DataService");
var _dataServiceDefault = parcelHelpers.interopDefault(_dataService);
var _eventService = require("./EventService");
var _eventServiceDefault = parcelHelpers.interopDefault(_eventService);
var _photographerHtml = require("../../photographer.html");
var _photographerHtmlDefault = parcelHelpers.interopDefault(_photographerHtml);
const data = new _dataServiceDefault.default;
// View
const displayNavTags = (tags)=>{
    // On affiche la nav avec les tags
    document.querySelector('header').innerHTML += `\n        <nav class="nav">\n            <ul class="tags">\n            ${tags.map((tag)=>`\n                <li class="tag" name="${tag}">#${tag.charAt(0).toUpperCase()}${tag.slice(1)}</li>\n                `
    ).join("")}\n            </ul></nav>`;
};
const displayPhotographers = (photographers = [])=>{
    const section = document.getElementById('section');
    section.classList = "photographers";
    section.innerHTML = `\n\n    <header>\n        <h1>Nos photographes</h1>\n    </header>\n        <div class="container">\n\n        ${photographers.map(({ portrait , name , city , country , tagline , price , tags  })=>`\n        <article class="article">\n            <a class="link-to-photographer" href="#" alt="" aria-label="Lien vers le photographe" focusable="true">\n                <div class="article__img" aria-label="Image">\n                    <img src="./assets/images/Sample Photos/Photographers ID Photos/${portrait}" alt="">\n                </div>\n                <h2 class="article__title title">${name}</h2>\n            </a>\n            <div class="details" aria-label="Détails concernant le photographe">\n                <p class="localisation" aria-label="Ville d'origine">${city}, ${country}</p>\n                <p class="description" aria-label="Description">${tagline}</p>\n                <p class="price" aria-label="Prix">${price}€/jour</p>\n            </div>\n            <div class="tags" aria-label="Liste de tags concernant le photographe">\n                <ul>\n                ${tags.map((tag)=>`<li class="tag" name="${tag}">#${tag}</li>`
        ).join("")}\n                </ul></div></article>\n        `
    ).join("")}\n        </div>\n        `;
};
// Scripts
/**
 * Fonction pour gérer l'événement clique des tags
 *
 * @param {*} dataService
 */ function putEventCickOnTags(dataService, tag) {
    // On ajoute l'événement "click" à l'élément "tag"
    _eventServiceDefault.default.handleTagClick((element)=>{
        const nameAttributeOfTag = element.getAttribute('name');
        const photographersByTags = dataService.getPhotographersByTags(nameAttributeOfTag);
        displayPhotographers(photographersByTags);
        putEventCickOnTags(dataService);
        putEventCickOnPhotographerProfile(dataService);
        // On ajoute le tag au titre
        document.title = `Fisheye | ${nameAttributeOfTag.charAt(0).toUpperCase()}${nameAttributeOfTag.slice(1)}`;
    });
}
/**
 * Fonction pour gérer l'événement clique de chaque fiche
 * de photographess
 *
 * @param {*} dataService
 */ function putEventCickOnPhotographerProfile(dataService) {
    // On ajoute l'événement "click" à chaque fiche de photographes
    _eventServiceDefault.default.handlePhotographerSelection((element)=>{
        const nameOfPhotographer = element.textContent.trim();
        const firstNameOfPhotographer = nameOfPhotographer.slice(0, nameOfPhotographer.indexOf(' '));
        const id = dataService.getPhotographerByName(nameOfPhotographer).id;
        const url = new URL(`${_photographerHtmlDefault.default}?id=${id.toString()}&firstName=${firstNameOfPhotographer}`, location);
        element.setAttribute('href', url);
    });
}
/**
 * Fonction qui affiche le bouton scroll to top
 * si on scroll vers le bas
 *
 */ function putEventClickToButtonIfScrolled() {
    const scrollToMainButtonElt = document.querySelector('.scrollToMainButton');
    if (window.scrollY) {
        scrollToMainButtonElt.classList.add('display');
        scrollToMainButtonElt.addEventListener('click', ()=>window.scrollTo(0, 0)
        );
    } else if (window.screenY === 0) scrollToMainButtonElt.classList.remove('display');
}
const mainPhotographers = async ()=>{
    try {
        const dataService = new _dataServiceDefault.default();
        // On récupère l'ensemble des photographes du Json
        dataService.loadPhotographers();
        // On récupère l'ensemble des médias des photographes du Json
        dataService.loadMedias();
        // On affiche la nav en récupérant tous les tags utilisés (getTags())
        displayNavTags(dataService.getTags());
        // On affiche les photographes en commençant par récupérer un paramètre dans l'url:
        // s'il y a un tag dans l'url, alors on affiche une séléction par le tag transmis,
        // sinon tous les photographes sont affichés
        const params = new URLSearchParams(document.location.search.substring(1));
        const tag = params.get("tag");
        displayPhotographers(dataService.getPhotographersByTags(tag));
        // On ajoute un événement au scroll de window pour afficher un bouton scroll to top
        window.addEventListener('scroll', putEventClickToButtonIfScrolled);
        // On ajoute l'événement "click" à l'élément "tag"
        putEventCickOnTags(dataService);
        // On ajoute l'événement "click" à chaque fiche de photographes
        putEventCickOnPhotographerProfile(dataService);
    } catch (error) {
        console.error('Unable to load data :', error);
    }
};

},{"./DataService":"8pbgj","./EventService":"eSIhL","../../photographer.html":"eXNVg","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8pbgj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _photographsDBJson = require("../json/photographs-DB.json");
var _photographsDBJsonDefault = parcelHelpers.interopDefault(_photographsDBJson);
class DataService {
    constructor(){
        this.photographers = [];
        this.medias = [];
        this.totalLikesByPhotographer;
    }
    loadPhotographers() {
        const dataResponse = _photographsDBJsonDefault.default;
        this.photographers = dataResponse.photographers;
    }
    loadMedias() {
        const dataResponse = _photographsDBJsonDefault.default;
        this.medias = dataResponse.media;
    }
    getPhotographersByTags(tag = "") {
        if (!tag) return this.photographers;
        return this.photographers.filter(({ tags  })=>tags.includes(tag)
        );
    }
    getPhotographerByName(namePhotographer) {
        return this.photographers.find((obj)=>{
            return obj.name === namePhotographer;
        });
    }
    getPhotographerById(idPhotographer) {
        return this.photographers.find((obj)=>{
            return obj.id === idPhotographer;
        });
    }
    getTotalOfLikes(idPhotographer) {
        const photographerMedias = this.medias.filter((obj)=>obj.photographerId === idPhotographer
        );
        var arrayOfLikes = [];
        for (const element of photographerMedias)arrayOfLikes.push(element.likes);
        return arrayOfLikes.reduce((accumulator, currentValue)=>accumulator + currentValue
        );
    }
    getMediasByPhotographerId(idPhotographer) {
        return this.medias.filter((obj)=>obj.photographerId === idPhotographer
        );
    }
    getMediasPhotographerByPopularity(idPhotographer) {
        const photographerMedias = this.medias.filter((obj)=>obj.photographerId === idPhotographer
        );
        return photographerMedias.sort((a, b)=>{
            return a.likes - b.likes;
        });
    }
    getMediasPhotographerByDate(idPhotographer) {
        const photographerMedias = this.medias.filter((obj)=>obj.photographerId === idPhotographer
        );
        return photographerMedias.sort((a, b)=>{
            let date1 = new Date(a.date);
            let date2 = new Date(b.date);
            date1.getTime(), date2.getTime();
        });
    }
    getMediasPhotographerByTitle(idPhotographer) {
        const photographerMedias = this.medias.filter((obj)=>obj.photographerId === idPhotographer
        );
        return photographerMedias.sort((a, b)=>a.title.localeCompare(b.title)
        );
    }
    getTags() {
        const allTags = this.photographers.reduce((allTags1, { tags  })=>[
                ...allTags1,
                ...tags
            ]
        , []);
        return Array.from(new Set(allTags));
    }
}
exports.default = DataService;

},{"../json/photographs-DB.json":"w7Zwh","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"w7Zwh":[function(require,module,exports) {
module.exports = JSON.parse("{\"photographers\":[{\"name\":\"Mimi Keel\",\"id\":243,\"city\":\"London\",\"country\":\"UK\",\"tags\":[\"portrait\",\"events\",\"travel\",\"animals\"],\"tagline\":\"Voir le beau dans le quotidien\",\"price\":400,\"portrait\":\"MimiKeel.jpg\"},{\"name\":\"Ellie-Rose Wilkens\",\"id\":930,\"city\":\"Paris\",\"country\":\"France\",\"tags\":[\"sports\",\"architecture\"],\"tagline\":\"Capturer des compositions complexes\",\"price\":250,\"portrait\":\"EllieRoseWilkens.jpg\"},{\"name\":\"Tracy Galindo\",\"id\":82,\"city\":\"Montreal\",\"country\":\"Canada\",\"tags\":[\"art\",\"fashion\",\"events\"],\"tagline\":\"Photographe freelance\",\"price\":500,\"portrait\":\"TracyGalindo.jpg\"},{\"name\":\"Nabeel Bradford\",\"id\":527,\"city\":\"Mexico City\",\"country\":\"Mexico\",\"tags\":[\"travel\",\"portrait\"],\"tagline\":\"Toujours aller de l'avant\",\"price\":350,\"portrait\":\"NabeelBradford.jpg\"},{\"name\":\"Rhode Dubois\",\"id\":925,\"city\":\"Barcelona\",\"country\":\"Spain\",\"tags\":[\"sport\",\"fashion\",\"events\",\"animals\"],\"tagline\":\"Je crée des souvenirs\",\"price\":275,\"portrait\":\"RhodeDubois.jpg\"},{\"name\":\"Marcel Nikolic\",\"id\":195,\"city\":\"Berlin\",\"country\":\"Germany\",\"tags\":[\"travel\",\"architecture\"],\"tagline\":\"Toujours à la recherche de LA photo\",\"price\":300,\"portrait\":\"MarcelNikolic.jpg\"}],\"media\":[{\"id\":342550,\"photographerId\":82,\"title\":\"Fashion Yellow Beach\",\"image\":\"Fashion_Yellow_Beach.jpg\",\"tags\":[\"fashion\"],\"likes\":62,\"date\":\"2011-12-08\",\"price\":55},{\"id\":8520927,\"photographerId\":82,\"title\":\"Fashion Urban Jungle\",\"image\":\"Fashion_Urban_Jungle.jpg\",\"tags\":[\"fashion\"],\"likes\":11,\"date\":\"2011-11-06\",\"price\":55},{\"id\":9025895,\"photographerId\":82,\"title\":\"Fashion Pattern on a Pattern\",\"image\":\"Fashion_Pattern_on_Pattern.jpg\",\"tags\":[\"fashion\"],\"likes\":72,\"date\":\"2013-08-12\",\"price\":55},{\"id\":9275938,\"photographerId\":82,\"title\":\"Wedding Gazebo\",\"image\":\"Event-_WeddingGazebo.jpg\",\"tags\":[\"events\"],\"likes\":69,\"date\":\"2018-02-22\",\"price\":55},{\"id\":2053494,\"photographerId\":82,\"title\":\"Sparkles\",\"image\":\"Event_Sparklers.jpg\",\"tags\":[\"events\"],\"likes\":2,\"date\":\"2020-05-25\",\"price\":55},{\"id\":7324238,\"photographerId\":82,\"title\":\"18th Anniversary\",\"image\":\"Event_18thAnniversary.jpg\",\"tags\":[\"events\"],\"likes\":33,\"date\":\"2019-06-12\",\"price\":55},{\"id\":8328953,\"photographerId\":82,\"title\":\"Wooden Horse Sculpture\",\"video\":\"Art_Wooden_Horse_Sculpture.mp4\",\"tags\":[\"art\"],\"likes\":24,\"date\":\"2011-12-08\",\"price\":100},{\"id\":7502053,\"photographerId\":82,\"title\":\"Triangle Man\",\"image\":\"Art_Triangle_Man.jpg\",\"tags\":[\"art\"],\"likes\":88,\"date\":\"2007-05-07\",\"price\":55},{\"id\":8523492,\"photographerId\":82,\"title\":\"Purple Tunnel\",\"image\":\"Art_Purple_light.jpg\",\"tags\":[\"art\"],\"likes\":24,\"date\":\"2018-05-05\",\"price\":55},{\"id\":75902334,\"photographerId\":82,\"title\":\"Art Mine\",\"image\":\"Art_Mine.jpg\",\"tags\":[\"art\"],\"likes\":75,\"date\":\"2019-11-25\",\"price\":55},{\"id\":73852953,\"photographerId\":925,\"title\":\"8 Rows\",\"image\":\"Sport_2000_with_8.jpg\",\"tags\":[\"sport\"],\"likes\":52,\"date\":\"2013-02-30\",\"price\":70},{\"id\":92758372,\"photographerId\":925,\"title\":\"Fashion Wings\",\"image\":\"Fashion_Wings.jpg\",\"tags\":[\"fashion\"],\"likes\":58,\"date\":\"2018-07-17\",\"price\":70},{\"id\":32958383,\"photographerId\":925,\"title\":\"Melody Red on Stripes\",\"image\":\"Fashion_Melody_Red_on_Stripes.jpg\",\"tags\":[\"fashion\"],\"likes\":11,\"date\":\"2019-08-12\",\"price\":70},{\"id\":928587383,\"photographerId\":925,\"title\":\"Venture Conference\",\"image\":\"Event_VentureConference.jpg\",\"tags\":[\"events\"],\"likes\":2,\"date\":\"2019-01-02\",\"price\":70},{\"id\":725639493,\"photographerId\":925,\"title\":\"Product Pitch\",\"image\":\"Event_ProductPitch.jpg\",\"tags\":[\"events\"],\"likes\":3,\"date\":\"2019-05-20\",\"price\":70},{\"id\":23394384,\"photographerId\":925,\"title\":\"Musical Festival Keyboard\",\"image\":\"Event_KeyboardCheck.jpg\",\"tags\":[\"events\"],\"likes\":52,\"date\":\"2019-07-18\",\"price\":70},{\"id\":87367293,\"photographerId\":925,\"title\":\"Musical Festival Singer\",\"image\":\"Event_Emcee.jpg\",\"tags\":[\"events\"],\"likes\":23,\"date\":\"2018-02-22\",\"price\":70},{\"id\":593834784,\"photographerId\":925,\"title\":\"Animal Majesty\",\"image\":\"Animals_Majesty.jpg\",\"tags\":[\"animals\"],\"likes\":52,\"date\":\"2017-03-13\",\"price\":70},{\"id\":83958935,\"photographerId\":925,\"title\":\"Cute Puppy on Sunset\",\"video\":\"Animals_Puppiness.mp4\",\"tags\":[\"animals\"],\"likes\":52,\"date\":\"2016-06-12\",\"price\":70},{\"id\":394583434,\"photographerId\":527,\"title\":\"Rock Mountains\",\"video\":\"Travel_Rock_Mountains.mp4\",\"tags\":[\"travel\"],\"likes\":23,\"date\":\"2017-03-18\",\"price\":45},{\"id\":343423425,\"photographerId\":527,\"title\":\"Outdoor Baths\",\"image\":\"Travel_Outdoor_Baths.jpg\",\"tags\":[\"travel\"],\"likes\":101,\"date\":\"2017-04-03\",\"price\":45},{\"id\":73434243,\"photographerId\":527,\"title\":\"Road into the Hill\",\"image\":\"Travel_Road_into_Hill.jpg\",\"tags\":[\"travel\"],\"likes\":99,\"date\":\"2018-04-30\",\"price\":45},{\"id\":23425523,\"photographerId\":527,\"title\":\"Bridge into the Forest\",\"image\":\"Travel_Bridge_into_Forest.jpg\",\"tags\":[\"travel\"],\"likes\":34,\"date\":\"2016-04-05\",\"price\":45},{\"id\":23134513,\"photographerId\":527,\"title\":\"Boat Wonderer\",\"image\":\"Travel_Boat_Wanderer.jpg\",\"tags\":[\"travel\"],\"likes\":23,\"date\":\"2017-03-18\",\"price\":45},{\"id\":92352352,\"photographerId\":527,\"title\":\"Portrait Sunkiss\",\"image\":\"Portrait_Sunkissed.jpg\",\"tags\":[\"portrait\"],\"likes\":66,\"date\":\"2018-05-24\",\"price\":45},{\"id\":34513453,\"photographerId\":527,\"title\":\"Shaw Potrait\",\"image\":\"Portrait_Shaw.jpg\",\"tags\":[\"portait\"],\"likes\":52,\"date\":\"2017-04-21\",\"price\":45},{\"id\":23523533,\"photographerId\":527,\"title\":\"Alexandra\",\"image\":\"Portrait_Alexandra.jpg\",\"tags\":[\"portait\"],\"likes\":95,\"date\":\"2018-11-02\",\"price\":45},{\"id\":525834234,\"photographerId\":527,\"title\":\"Afternoon Break\",\"image\":\"Portrait_AfternoonBreak.jpg\",\"tags\":[\"portait\"],\"likes\":25,\"date\":\"2019-01-02\",\"price\":45},{\"id\":623534343,\"photographerId\":243,\"title\":\"Lonesome\",\"image\":\"Travel_Lonesome.jpg\",\"tags\":[\"travel\"],\"likes\":88,\"date\":\"2019-02-03\",\"price\":45},{\"id\":625025343,\"photographerId\":243,\"title\":\"Hillside Color\",\"image\":\"Travel_HillsideColor.jpg\",\"tags\":[\"travel\"],\"likes\":85,\"date\":\"2019-04-03\",\"price\":45},{\"id\":2525345343,\"photographerId\":243,\"title\":\"Wednesday Potrait\",\"image\":\"Portrait_Wednesday.jpg\",\"tags\":[\"portait\"],\"likes\":34,\"date\":\"2019-04-07\",\"price\":45},{\"id\":2523434634,\"photographerId\":243,\"title\":\"Nora Portrait\",\"image\":\"Portrait_Nora.jpg\",\"tags\":[\"portait\"],\"likes\":63,\"date\":\"2019-04-07\",\"price\":45},{\"id\":398847109,\"photographerId\":243,\"title\":\"Raw Black Portrait\",\"image\":\"Portrait_Background.jpg\",\"tags\":[\"portait\"],\"likes\":55,\"date\":\"2019-06-20\",\"price\":45},{\"id\":2534342,\"photographerId\":243,\"title\":\"Seaside Wedding\",\"image\":\"Event_SeasideWedding.jpg\",\"tags\":[\"events\"],\"likes\":25,\"date\":\"2019-06-21\",\"price\":45},{\"id\":65235234,\"photographerId\":243,\"title\":\"Boulder Wedding\",\"image\":\"Event_PintoWedding.jpg\",\"tags\":[\"events\"],\"likes\":52,\"date\":\"2019-06-25\",\"price\":45},{\"id\":23523434,\"photographerId\":243,\"title\":\"Benevides Wedding\",\"image\":\"Event_BenevidesWedding.jpg\",\"tags\":[\"events\"],\"likes\":77,\"date\":\"2019-06-28\",\"price\":45},{\"id\":5234343,\"photographerId\":243,\"title\":\"Wild Horses in the Mountains\",\"video\":\"Animals_Wild_Horses_in_the_mountains.mp4\",\"tags\":[\"animals\"],\"likes\":142,\"date\":\"2019-08-23\",\"price\":60},{\"id\":95234343,\"photographerId\":243,\"title\":\"Rainbow Bird\",\"image\":\"Animals_Rainbow.jpg\",\"tags\":[\"animals\"],\"likes\":59,\"date\":\"2019-07-02\",\"price\":60},{\"id\":52343416,\"photographerId\":195,\"title\":\"Japanese Tower, Kyoto\",\"image\":\"Travel_Tower.jpg\",\"tags\":[\"travel\"],\"likes\":25,\"date\":\"2019-04-03\",\"price\":60},{\"id\":2523434,\"photographerId\":195,\"title\":\"Senset on Canals, Venice\",\"image\":\"Travel_SunsetonCanals.jpg\",\"tags\":[\"travel\"],\"likes\":53,\"date\":\"2019-05-06\",\"price\":60},{\"id\":95293534,\"photographerId\":195,\"title\":\"Mountain and Lake\",\"image\":\"Travel_OpenMountain.jpg\",\"tags\":[\"travel\"],\"likes\":33,\"date\":\"2019-05-12\",\"price\":60},{\"id\":356234343,\"photographerId\":195,\"title\":\"City Bike and Stair, Paris\",\"image\":\"Travel_Bike_and_Stair.jpg\",\"tags\":[\"travel\"],\"likes\":53,\"date\":\"2019-06-20\",\"price\":60},{\"id\":235234343,\"photographerId\":195,\"title\":\"Adventure Door, India\",\"image\":\"Travel_Adventure_Door.jpg\",\"tags\":[\"travel\"],\"likes\":63,\"date\":\"2019-06-26\",\"price\":60},{\"id\":6234234343,\"photographerId\":195,\"title\":\"Contrast, St Petersburg\",\"image\":\"Architecture_Contrast.jpg\",\"tags\":[\"architecture\"],\"likes\":52,\"date\":\"2019-06-30\",\"price\":60},{\"id\":6525666253,\"photographerId\":195,\"title\":\"On a Hill, Tibet\",\"image\":\"Architecture_On_a_hill.jpg\",\"tags\":[\"architecture\"],\"likes\":63,\"date\":\"2019-07-20\",\"price\":60},{\"id\":98252523433,\"photographerId\":195,\"title\":\"Leaning Tower, Pisa\",\"image\":\"Architecture_Dome.jpg\",\"tags\":[\"architecture\"],\"likes\":88,\"date\":\"2020-01-05\",\"price\":60},{\"id\":9259398453,\"photographerId\":195,\"title\":\"Circle Highways, Buenos Aires\",\"video\":\"Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4\",\"tags\":[\"architecture\"],\"likes\":57,\"date\":\"2020-01-20\",\"price\":65},{\"id\":3523523534,\"photographerId\":195,\"title\":\"Corner Building and Blue Sky\",\"image\":\"Architecture_Corner_Room.jpg\",\"tags\":[\"architecture\"],\"likes\":54,\"date\":\"2020-05-05\",\"price\":60},{\"id\":952343423,\"photographerId\":930,\"title\":\"Tricks in the Air\",\"video\":\"Sport_Tricks_in_the_air.mp4\",\"tags\":[\"sport\"],\"likes\":150,\"date\":\"2018-02-30\",\"price\":70},{\"id\":235234343,\"photographerId\":930,\"title\":\"Climber\",\"image\":\"Sport_Next_Hold.jpg\",\"tags\":[\"sport\"],\"likes\":101,\"date\":\"2018-03-05\",\"price\":65},{\"id\":235343222,\"photographerId\":930,\"title\":\"Surfer\",\"image\":\"sport_water_tunnel.jpg\",\"tags\":[\"sport\"],\"likes\":103,\"date\":\"2018-03-10\",\"price\":70},{\"id\":7775342343,\"photographerId\":930,\"title\":\"Skier\",\"image\":\"Sport_Sky_Cross.jpg\",\"tags\":[\"sport\"],\"likes\":77,\"date\":\"2018-04-16\",\"price\":50},{\"id\":9253445784,\"photographerId\":930,\"title\":\"Race End\",\"image\":\"Sport_Race_End.jpg\",\"tags\":[\"sport\"],\"likes\":88,\"date\":\"2018-04-22\",\"price\":65},{\"id\":22299394,\"photographerId\":930,\"title\":\"Jump!\",\"image\":\"Sport_Jump.jpg\",\"tags\":[\"sport\"],\"likes\":95,\"date\":\"2018-04-27\",\"price\":70},{\"id\":3452342633,\"photographerId\":930,\"title\":\"White Light\",\"image\":\"Architecture_White_Light.jpg\",\"tags\":[\"architecture\"],\"likes\":52,\"date\":\"2018-05-03\",\"price\":75},{\"id\":939234243,\"photographerId\":930,\"title\":\"Water on Modern Building\",\"image\":\"Architecture_Water_on_Modern.jpg\",\"tags\":[\"architecture\"],\"likes\":55,\"date\":\"2018-05-10\",\"price\":72},{\"id\":222959233,\"photographerId\":930,\"title\":\"Horseshoe\",\"image\":\"Architecture_Horseshoe.jpg\",\"tags\":[\"architecture\"],\"likes\":85,\"date\":\"2018-05-15\",\"price\":71},{\"id\":965933434,\"photographerId\":930,\"title\":\"Cross Bar\",\"image\":\"Architecture_Cross_Bar.jpg\",\"tags\":[\"architecture\"],\"likes\":66,\"date\":\"2018-05-20\",\"price\":58},{\"id\":777723343,\"photographerId\":930,\"title\":\"Connected Curves\",\"image\":\"Architecture_Connected_Curves.jpg\",\"tags\":[\"architecture\"],\"likes\":79,\"date\":\"2018-05-21\",\"price\":80}]}");

},{}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eSIhL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class EventService {
    constructor(){
        document.addEventListener('keyup', this.onKeyUp);
    }
    static handleTagClick(call) {
        const array = Array.from(document.getElementsByClassName("tag")).forEach((element)=>{
            element.addEventListener("click", ()=>call(element)
            );
        });
    }
    static handlePhotographerSelection(call) {
        const array = Array.from(document.getElementsByClassName("link-to-photographer")).forEach((element)=>{
            element.addEventListener("click", ()=>call(element)
            );
        });
    }
    static toggleDropdownButton(element) {
        element.addEventListener("click", ()=>{
            let dropdownElement = document.querySelector(".dropdown");
            let chevronElement = document.querySelector(".fa-chevron-down");
            dropdownElement.classList.toggle("show");
            chevronElement.classList.toggle("fa-chevron-up");
        });
    }
    static handleMediasFilter(call) {
        const array = Array.from(document.querySelectorAll(".filter a, .dropdown-item")).forEach((element)=>{
            element.addEventListener("click", ()=>call(element)
            );
        });
    }
    static closeModal(selector, elementToRemove) {
        selector.addEventListener("click", ()=>document.getElementById('main').removeChild(elementToRemove)
        );
        document.removeEventListener('keyup', this.onKeyUp);
    }
    static handleImagesClick(call) {
        const array = Array.from(document.querySelectorAll(".medias .image")).forEach((element)=>{
            element.addEventListener("click", ()=>call(element)
            );
        });
    }
    static handleInputsFormClick(call) {
        const array = Array.from(document.getElementsByTagName("input")).forEach((element)=>{
            element.addEventListener("input", ()=>call(element)
            );
        });
    }
}
exports.default = EventService;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eXNVg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('eq3Cg') + "photographer.fa1cc18e.html";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"4UoAk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mainPhotographer", ()=>mainPhotographer
);
// Model
var _dataService = require("./DataService");
var _dataServiceDefault = parcelHelpers.interopDefault(_dataService);
var _eventService = require("./EventService");
var _eventServiceDefault = parcelHelpers.interopDefault(_eventService);
// View
const displayPhotographerInfos = (photographer, totalLikes)=>{
    const headerPhotographerInfosElement = document.querySelector('.photographerHeader');
    headerPhotographerInfosElement.innerHTML = `\n        <div class="details">\n            <h1 class="title">${photographer.name}</h1>\n            <p class="localisation">${photographer.country}, ${photographer.city}</p>\n            <p class="tagline">${photographer.tagline}</p>\n            <div class="tags" aria-label="Liste de tags concernant le photographe">\n                <ul>\n                    ${photographer.tags.map((tag)=>`\n                    <a class="tag" name="${tag}" href="#" focusable="true">\n                        <li>#${tag}</li>\n                    </a>\n                `
    ).join("")}\n                </ul>\n            </div>\n            <div class="info">\n                <div class="likes">\n                    <span>${totalLikes}</span><span class="fas fa-heart"></span>\n                </div>\n                <div class="price">\n                    <span>${photographer.price}€ / jour</span>\n                </div>\n            </div>\n        </div>\n        <div class="button">\n            <button class="btn">Contactez-moi</button>\n        </div>\n        <div class="img" aria-label="Image">\n            <img src="./public/images/Sample Photos/Photographers ID Photos/${photographer.portrait}" alt="">\n        </div>\n        `;
};
const displayFilterButton = ()=>{
    const filterButtonElement = document.querySelector('.filter');
    filterButtonElement.innerHTML = `        \n        <span>Trier par</span>\n        <div class="btn-group dropdown show">\n            <button class="btn dropdown-toggle"\n            id="dropdownMenuLink"\n            data-toggle="dropdown"\n            aria-haspopup="true"\n            aria-expanded="false">\n                <a>Popularité</a>\n                <span class="fas fa-chevron-down"></span>\n            </button>\n            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">\n                <div class="dropdown-divider"></div>\n                <button class="dropdown-item" href="">Date</button>\n                <button class="dropdown-item" href="">Titre</button>\n            </div>\n        </div>\n    `;
};
const displayPhotographerMedias = (medias, firstName)=>{
    const photographerMediasElement = document.querySelector('.medias');
    photographerMediasElement.innerHTML = `\n        <div class="container">\n            ${medias.map(({ image , video , title , likes , id  })=>`\n            <figure class="media">\n                <div class="image">\n                    <img id="${id}" src="./public/images/Sample Photos/${firstName}/${image}">\n                </div>\n            <figcaption>\n                <span>${title}</span>\n                <span>${likes} </span><span class="fas fa-heart"></span>\n            </figcaption>\n            </figure>\n        `
    ).join("")}\n        </div>\n    </section>\n    `;
};
const displayModalForm = (name)=>{
    const div = document.createElement('div');
    div.className = 'bground';
    div.innerHTML = `\n      <div class="modalContent">\n        <span class="close"></span>\n        <div class="modal-body">\n            <h1>Contactez-moi</br>\n            ${name}</h1>\n          <form id="validate" name="reserve" action="index.html" method="get">\n            <div class="formData">\n              <label for="first">Prénom</label><br>\n              <input class="text-control" type="text" id="first" name="first" /><br>\n              <span class="error"></span>\n            </div>\n            <div class="formData">\n              <label for="last">Nom</label><br>\n              <input class="text-control" type="text" id="last" name="last" /><br>\n              <span class="error"></span>\n            </div>\n            <div class="formData">\n              <label for="email">E-mail</label><br>\n              <input class="text-control" type="email" id="email" name="email" /><br>\n              <span class="error"></span>\n            </div>\n            <div class="formData">\n              <label for="message">Votre message</label><br>\n              <textarea class="text-control" type="date" id="message" name="birthdate">\n              </textarea>\n              <br>\n              <span class="error"></span>\n            </div>\n            <input class="btn-submit button" type="submit" value="Envoyer" />\n          </form>\n        </div>\n    </div>`;
    document.getElementById('main').appendChild(div);
};
const displayModalLightbox = (image, title, name, id)=>{
    const div = document.createElement('div');
    div.className = 'lightbox-bg';
    div.innerHTML = `\n        <div class="lightbox">\n            <button class="close"></button>\n            <button class="lightbox__next"></button>\n            <button class="lightbox__prev"></button>\n            <div class="lightbox__container">\n                <figure>\n                    <div class="img">\n                        <img id="${id}" src="./public/images/Sample Photos/${name}/${image}" alt="">\n                    </div>\n                    <figcaption>${title}</figcaption>\n                </figure>\n            </div>\n        </div>`;
    document.getElementById('main').appendChild(div);
};
// Scripts
/**
 *
 *
 * @param {*} data
 */ function eventOnTags() {
    // On ajoute l'événement "click" à chaque élément "tag"
    _eventServiceDefault.default.handleTagClick((element)=>{
        const nameAttributeOfTag = element.getAttribute('name');
        const url = new URL(`${indexPage}?tag=${nameAttributeOfTag}`, location);
        element.setAttribute('href', url.href);
    });
}
/**
 * Fonction qui change l'image et le titre dans la lightbox
 * à l'aide des boutons
 *
 * @param {*} getMedias // Tableau contenant les objets des médias du photographe
 * @param {*} firstNameOfPhotographer // le prénom du photographe pour l'url de l'image
 * @param {*} indexOfElementImage // l'index de l'image dans le tableau "getMedias"
 */ function nextImage(getMedias, firstNameOfPhotographer, indexOfElementImage) {
    console.log(indexOfElementImage);
    indexOfElementImage === getMedias.length - 1 && (indexOfElementImage = -1);
    let nextImage1 = getMedias[indexOfElementImage + 1].image;
    let nextTitle = getMedias[indexOfElementImage + 1].title;
    let nextId = getMedias[indexOfElementImage + 1].id;
    document.querySelector('.lightbox img').setAttribute('src', `./public/images/Sample Photos/${firstNameOfPhotographer}/${nextImage1}`);
    document.querySelector('.lightbox img').setAttribute('id', nextId);
    document.querySelector('.lightbox figcaption').textContent = nextTitle;
}
/**
 * Fonction qui change l'image et le titre dans la lightbox
 * à l'aide des boutons
 *
 * @param {*} getMedias // Tableau contenant les objets des médias du photographe
 * @param {*} firstNameOfPhotographer // le prénom du photographe pour l'url de l'image
 * @param {*} indexOfElementImage // l'index de l'image dans le tableau "getMedias"
 */ function prevImage(getMedias, firstNameOfPhotographer, indexOfElementImage) {
    indexOfElementImage === 0 && (indexOfElementImage = getMedias.length);
    let nextImage1 = getMedias[indexOfElementImage - 1].image;
    let nextTitle = getMedias[indexOfElementImage - 1].title;
    let nextId = getMedias[indexOfElementImage - 1].id;
    document.querySelector('.lightbox img').setAttribute('src', `./public/images/Sample Photos/${firstNameOfPhotographer}/${nextImage1}`);
    document.querySelector('.lightbox img').setAttribute('id', nextId);
    document.querySelector('.lightbox figcaption').textContent = nextTitle;
}
function filterMediasOnDropdownButton(element, dataService, idFromUrlParams, firstNameOfPhotographer) {
    if (element.textContent.trim() === "Popularité") displayPhotographerMedias(dataService.getMediasPhotographerByPopularity(idFromUrlParams), firstNameOfPhotographer);
    if (element.textContent.trim() === "Date") displayPhotographerMedias(dataService.getMediasPhotographerByDate(idFromUrlParams), firstNameOfPhotographer);
    if (element.textContent.trim() === "Titre") displayPhotographerMedias(dataService.getMediasPhotographerByTitle(idFromUrlParams), firstNameOfPhotographer);
}
/**
 * Affiche la lightbox
 *
 * @param {*} element // l'élément de l'event
 * @param {*} medias // tableau des medias
 * @param {*} firstNameOfPhotographer // nom du photographe
 */ function lightbox(element, medias, firstNameOfPhotographer) {
    // On affiche la lightbox avec l'image sur laquelle on acliqué
    let IdCurrentImage = Number(element.querySelector('img').getAttribute("id"));
    const getMedia = medias.find((obj)=>{
        return obj.id === IdCurrentImage;
    });
    displayModalLightbox(getMedia.image, getMedia.title, firstNameOfPhotographer, IdCurrentImage);
    // Events sur les boutons de la modal lightbox
    const getIdCurrentImage = ()=>Number(document.querySelector('.lightbox img').getAttribute("id"))
    ;
    const indexOfCurrentElementInArray = ()=>medias.findIndex((element1)=>element1.id === getIdCurrentImage()
        )
    ;
    document.querySelector('.lightbox__next').addEventListener('click', ()=>{
        nextImage(medias, firstNameOfPhotographer, indexOfCurrentElementInArray());
    });
    document.querySelector('.lightbox__prev').addEventListener('click', ()=>{
        prevImage(medias, firstNameOfPhotographer, indexOfCurrentElementInArray());
    });
    _eventServiceDefault.default.closeModal(document.querySelector('.lightbox .close'), document.querySelector('.lightbox-bg'));
}
/**
 * Fonction qui affiche le formulaire de contact
 *
 * @param {*} nameOfPhotographer
 */ function displayModalFormOnEvent(nameOfPhotographer) {
    document.querySelector('.bground') ? _eventServiceDefault.default.closeModal() : displayModalForm(nameOfPhotographer);
    _eventServiceDefault.default.closeModal(document.querySelector('.bground .close'), document.querySelector('.bground'));
    // On vérifie les champs des formulaires
    _eventServiceDefault.default.handleInputsFormClick((e)=>checkField(e)
    );
}
// Modal Form
/**
 * Vérification des champs input de la fenêtre modale
 * de contact
 *
 * @param {*} element
 */ function checkField(element) {
    const regExName = "[a-zA-Z-s\u00C0-\u024F\u1E00-\u1EFF]{3,}$"; // Regex qui vérifie si le champ a plus de 3 caractères, les accents, et espaces des noms composés
    if (element.id === "first") {
        element.pattern = regExName;
        if (!element.validity.valid) element.setAttribute("style", "border:2px solid red; outline:none");
        else element.removeAttribute("style");
    }
    if (element.id === "last") {
        element.pattern = regExName;
        if (!element.validity.valid) element.setAttribute("style", "border:2px solid red; outline:none");
        else element.removeAttribute("style");
    }
    if (element.id === "email") {
        element.pattern = "[a-z0-9-_]+[a-z0-9.-_]*@[a-z0-9-_]{2,}.[a-z.-_]+[a-z-_]+"; // Regex qui vérifie si le champ a un email valide
        if (!element.validity.valid) element.setAttribute("style", "border:2px solid red; outline:none");
        else element.removeAttribute("style");
    }
}
const mainPhotographer = async ()=>{
    const dataService = new _dataServiceDefault.default();
    try {
        // On récupère l'ensemble des photographes du Json
        dataService.loadPhotographers();
        // On récupère l'ensemble des médias des photographes du Json
        dataService.loadMedias();
        // On display le photographe avec ses infos grâce à son id récupéré dans l'url
        const paramsFromUrl = new URLSearchParams(document.location.search.substring(1));
        const idFromUrlParams = Number(paramsFromUrl.get("id"));
        const nameOfPhotographer = dataService.getPhotographerById(idFromUrlParams).name;
        const firstNameOfPhotographer = nameOfPhotographer.slice(0, nameOfPhotographer.indexOf(' '));
        displayPhotographerInfos(dataService.getPhotographerById(idFromUrlParams), dataService.getTotalOfLikes(idFromUrlParams));
        // On ajoute les events sur les tags qui renvoients sur la page index
        eventOnTags();
        // Event sur bouton contact
        document.querySelector('.photographerHeader .button').addEventListener('click', ()=>displayModalFormOnEvent(nameOfPhotographer)
        );
        //On affiche le bouton de filtre
        displayFilterButton();
        const chevronElement = document.querySelector(".dropdown-toggle .fas");
        _eventServiceDefault.default.toggleDropdownButton(chevronElement);
        // Filtres
        _eventServiceDefault.default.handleMediasFilter((element)=>filterMediasOnDropdownButton(element, dataService, idFromUrlParams, firstNameOfPhotographer)
        );
        //On affiche les médias du photographes
        const medias = dataService.getMediasByPhotographerId(idFromUrlParams);
        displayPhotographerMedias(medias, firstNameOfPhotographer);
        //On ajoute l'événement sur chaque image pour afficher la lightbox
        _eventServiceDefault.default.handleImagesClick((element)=>lightbox(element, medias, firstNameOfPhotographer)
        );
        // On ajoute le nom du photographe au titre
        document.title = `Fisheye | ${nameOfPhotographer}`;
    } catch (error) {
        console.error('Unable to load data :', error);
    }
};

},{"./DataService":"8pbgj","./EventService":"eSIhL","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["2k6uF","5MHlR"], "5MHlR", "parcelRequire8288")

//# sourceMappingURL=index.0d7be9e2.js.map
