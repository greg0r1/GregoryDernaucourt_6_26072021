function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire8288;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire8288=o),o.register("hVBqp",(function(t,n){var r,o;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("hVBqp").register(JSON.parse('{"6omqG":"index.be8f1bbc.js","2QEp2":"loader.d3e83df8.svg","DJqO0":"index.ef0a273f.js"}')),o.register("lgiuV",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0,o("hwGdY"),o("7oA9R"),o("5Q7aK"),o("4DgOI"),o("2LF2s"),o("eHscC"),o("5rPvu"),o("hhk0T");var n=c(o("i0cii")),r=c(o("kN6NL")),a=c(o("ezELM"));function c(e){return e&&e.__esModule?e:{default:e}}const i=new URL(o("8PCD6")),s=(new n.default,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=document.getElementById("section");t.classList="photographers",t.innerHTML='\n    <header aria-label="Section header">\n        <h1>Nos photographes</h1>\n    </header>\n        <div class="container">\n\n        '.concat(e.map((e=>{let{id:t,portrait:n,name:r,city:o,country:a,tagline:c,price:s,tags:l}=e;return u(t,n,r)||'<article class="article">\n            <a class="link-to-photographer" tabindex="0" aria-label="'.concat(r,'">\n                <div class="article__img">\n                    <img id="').concat(t,'" src="').concat(i,'" style="\n                    width: 50px;\n                    height: 50px;\n                " alt="">\n                    </div>\n                <h2 class="article__title title">').concat(r,'</h2>\n            </a>\n            <div class="details">\n                <p class="localisation">').concat(o,", ").concat(a,'</p>\n                <p class="description">').concat(c,'</p>\n                <p class="price">').concat(s,'€/jour</p>\n            </div>\n            <div class="tags">\n                <ul>\n                ').concat(l.map((e=>'\n                    <li class="tag">\n                        <a title="'.concat(e,'" href="javascript:void(0);" tabindex="0">#').concat(e,"</a>\n                    </li>"))).join(""),"\n                </ul>\n            </div>\n        </article>\n        ")})).join(""),"\n        </div>\n        ")});function l(e){r.default.handleTagClick((t=>{const n=t.getAttribute("title"),r=e.getPhotographersByTags(n);s(r),l(e),d(e),document.title="Fisheye | ".concat(n.charAt(0).toUpperCase()).concat(n.slice(1))}))}function u(e,t,n){const r=new Image;r.onload=()=>{document.getElementById(e).src=r.src,document.getElementById(e).alt="Portrait du photographe "+n,document.getElementById(e).removeAttribute("style")},r.src="assets/images/Sample_Photos/Photographers_ID_Photos/"+t}function d(e){r.default.handlePhotographerSelection((t=>{const n=t.textContent.trim(),r=n.slice(0,n.indexOf(" ")),o=e.getPhotographerByName(n).id,a=new URL("photographer.html?id=".concat(o.toString(),"&firstName=").concat(r),location);t.setAttribute("href",a)}))}var p=(async()=>{try{const t=new n.default;t.loadPhotographers(),t.loadMedias(),e=t.getTags(),document.querySelector("header").innerHTML+='\n        <nav class="nav" aria-label="Photographer categories">\n            <ul class="tags">\n            '.concat(e.map((e=>'\n                <li class="tag">\n                    <a title="'.concat(e,'" href="javascript:void(0);" tabindex="0">#').concat(e.charAt(0).toUpperCase()).concat(e.slice(1),"</a>\n                </li>"))).join(""),"\n            </ul>\n        </nav>");const r=new URLSearchParams(document.location.search.substring(1)).get("tag");s(t.getPhotographersByTags(r)),window.addEventListener("scroll",(()=>a.default.scrollToTop(document.querySelector(".scrollToMainButton")))),l(t),d(t)}catch(e){console.error(e)}var e})();e.exports.default=p})),o.register("8PCD6",(function(e,t){e.exports=o("4fvwx").getBundleURL("6omqG")+o("hVBqp").resolve("2QEp2")})),o.register("4fvwx",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}}));var a;(a=o("lgiuV"))&&a.__esModule;
//# sourceMappingURL=index.be8f1bbc.js.map
