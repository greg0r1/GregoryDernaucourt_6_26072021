!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire8288;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequire8288=a),a.register("5zLFc",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0,a("gCKyq"),a("8hHD0"),a("5zeJx"),a("5b597"),a("6F8bd"),a("5zvMC"),a("ilGsu"),a("fjeSn");var n=r(a("1IXKx")),o=r(a("gMLik")),c=r(a("gsUaF"));function r(e){return e&&e.__esModule?e:{default:e}}new n.default;const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=document.getElementById("section");t.classList="photographers",t.innerHTML='\n    <header aria-label="Section header">\n        <h1>Nos photographes</h1>\n    </header>\n        <div class="container">\n\n        '.concat(e.map((e=>{let{id:t,portrait:n,name:a,city:o,country:c,tagline:r,price:i,tags:s}=e;return l(t,n,a)||'<article class="article">\n            <a class="link-to-photographer" tabindex="0" aria-label="'.concat(a,'">\n                <div class="article__img">\n                    <img id="').concat(t,'" src="../../assets/images/loader.svg" style="\n                    width: 50px;\n                    height: 50px;\n                " alt="">\n                    </div>\n                <h2 class="article__title title">').concat(a,'</h2>\n            </a>\n            <div class="details">\n                <p class="localisation">').concat(o,", ").concat(c,'</p>\n                <p class="description">').concat(r,'</p>\n                <p class="price">').concat(i,'€/jour</p>\n            </div>\n            <div class="tags">\n                <ul>\n                ').concat(s.map((e=>'\n                    <li class="tag">\n                        <a title="'.concat(e,'" href="javascript:void(0);" tabindex="0">#').concat(e,"</a>\n                    </li>"))).join(""),"\n                </ul>\n            </div>\n        </article>\n        ")})).join(""),"\n        </div>\n        ")};function s(e){o.default.handleTagClick((t=>{const n=t.getAttribute("title"),a=e.getPhotographersByTags(n);i(a),s(e),d(e),document.title="Fisheye | ".concat(n.charAt(0).toUpperCase()).concat(n.slice(1))}))}function l(e,t,n){const a=new Image;a.onload=()=>{document.getElementById(e).src=a.src,document.getElementById(e).alt="Portrait du photographe "+n,document.getElementById(e).removeAttribute("style")},a.src="assets/images/Sample_Photos/Photographers_ID_Photos/"+t}function d(e){o.default.handlePhotographerSelection((t=>{const n=t.textContent.trim(),a=n.slice(0,n.indexOf(" ")),o=e.getPhotographerByName(n).id,c=new URL("photographer.html?id=".concat(o.toString(),"&firstName=").concat(a),location);t.setAttribute("href",c)}))}var u=(async()=>{try{const t=new n.default;t.loadPhotographers(),t.loadMedias(),e=t.getTags(),document.querySelector("header").innerHTML+='\n        <nav class="nav" aria-label="Photographer categories">\n            <ul class="tags">\n            '.concat(e.map((e=>'\n                <li class="tag">\n                    <a title="'.concat(e,'" href="javascript:void(0);" tabindex="0">#').concat(e.charAt(0).toUpperCase()).concat(e.slice(1),"</a>\n                </li>"))).join(""),"\n            </ul>\n        </nav>");const a=new URLSearchParams(document.location.search.substring(1)).get("tag");i(t.getPhotographersByTags(a)),window.addEventListener("scroll",(()=>c.default.scrollToTop(document.querySelector(".scrollToMainButton")))),s(t),d(t)}catch(e){console.error(e)}var e})();e.exports.default=u}));var o;(o=a("5zLFc"))&&o.__esModule}();
//# sourceMappingURL=index.ea02e651.js.map
