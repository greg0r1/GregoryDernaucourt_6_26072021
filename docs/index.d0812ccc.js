!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequire8288;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var o={id:t,exports:{}};return e[t]=o,a.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){n[t]=e},t.parcelRequire8288=a),a.register("5zLFc",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0,a("8hHD0"),a("5zeJx"),a("5b597"),a("gCKyq"),a("6F8bd"),a("5zvMC"),a("ilGsu"),a("fjeSn");var n=r(a("1IXKx")),o=r(a("gMLik")),c=r(a("gsUaF"));function r(t){return t&&t.__esModule?t:{default:t}}new n.default;const i=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const e=document.getElementById("section");e.classList="photographers";const n=new URL("assets/images/Sample_Photos/Photographers_ID_Photos/",location);e.innerHTML='\n    <header>\n        <h1>Nos photographes</h1>\n    </header>\n        <div class="container">\n\n        '.concat(t.map((t=>{let{portrait:e,name:a,city:o,country:c,tagline:r,price:i,tags:s}=t;return'<article class="article" tabindex="0">\n            <a class="link-to-photographer">\n                <div class="article__img">\n                    <img src="data:image/jpeg, '.concat(require(n+e),'" alt="Portrait du photographe ').concat(a,'">\n                </div>\n                <h2 class="article__title title">').concat(a,'</h2>\n            </a>\n            <div class="details">\n                <p class="localisation">').concat(o,", ").concat(c,'</p>\n                <p class="description">').concat(r,'</p>\n                <p class="price">').concat(i,'€/jour</p>\n            </div>\n            <div class="tags">\n                <ul>\n                ').concat(s.map((t=>'\n                <a class="tag" title="'.concat(t,'" href="javascript:void(0);" tabindex="0">\n                <li>#').concat(t,"</li></a>"))).join(""),"\n                </ul></div></article>\n        ")})).join(""),"\n        </div>\n        ")};function s(t,e){o.default.handleTagClick((e=>{const n=e.getAttribute("title"),a=t.getPhotographersByTags(n);i(a),s(t),l(t),document.title="Fisheye | ".concat(n.charAt(0).toUpperCase()).concat(n.slice(1))}))}function l(t){o.default.handlePhotographerSelection((e=>{const n=e.textContent.trim(),a=n.slice(0,n.indexOf(" ")),o=t.getPhotographerByName(n).id,c=new URL("photographer.html?id=".concat(o.toString(),"&firstName=").concat(a),location);e.setAttribute("href",c)}))}var d=(async()=>{try{const e=new n.default;e.loadPhotographers(),e.loadMedias(),t=e.getTags(),document.querySelector("header").innerHTML+='\n        <nav class="nav">\n            <ul class="tags">\n            '.concat(t.map((t=>'\n                <a class="tag" title="'.concat(t,'" href="javascript:void(0);" tabindex="0">\n                    <li>#').concat(t.charAt(0).toUpperCase()).concat(t.slice(1),"</li>\n                </a>\n                "))).join(""),"\n            </ul></nav>");const a=new URLSearchParams(document.location.search.substring(1)).get("tag");i(e.getPhotographersByTags(a)),window.addEventListener("scroll",(()=>c.default.scrollToTop(document.querySelector(".scrollToMainButton")))),s(e),l(e)}catch(t){console.error(t)}var t})();t.exports.default=d}));var o;(o=a("5zLFc"))&&o.__esModule}();
//# sourceMappingURL=index.d0812ccc.js.map
