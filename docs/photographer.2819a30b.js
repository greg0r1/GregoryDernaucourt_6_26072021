var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire8288;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire8288=i),i("hwGdY"),i("7oA9R"),i("5Q7aK"),i("4DgOI"),i("2gD3v"),i("eHscC"),i("5rPvu"),i("hhk0T");var a=l(i("i0cii")),o=l(i("kN6NL"));i.register("dk0kB",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0,i("2LF2s");var n,a=(n=i("61xUa"))&&n.__esModule?n:{default:n};e.exports.default=class{render(){const e=document.createElement("div");return e.classList.add("container"),e.innerHTML=this.toString(),e}toString(){return"\n            ".concat(this.medias.map((e=>{let{image:t,video:n,title:i,likes:o,id:s}=e;return'\n            <figure class="content-media">\n                <div class="content-media__media">\n                    '.concat(new a.default({image:t,video:n,id:s,title:i},this.firstNameOfPhotographer).create().toString(),'\n                </div>\n                <figcaption class="content-media__figcaption">\n                    <span class="content-media__title">').concat(i,"</span>\n                    <span>").concat(o,' </span><span class="fas fa-heart"></span>\n                </figcaption>\n            </figure>\n        ')})).join(""),"\n    ")}constructor(e,t){this.medias=e,this.firstNameOfPhotographer=t}}})),i.register("61xUa",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n=o(i("242is")),a=o(i("hWFJt"));function o(e){return e&&e.__esModule?e:{default:e}}e.exports.default=class{create(){return this.media.video?new n.default({name:this.media.video,id:this.media.id,firstName:this.firstName,title:this.media.title}):new a.default({name:this.media.image,id:this.media.id,firstName:this.firstName,title:this.media.title})}constructor(e,t){this.media=e,this.firstName=t}}})),i.register("242is",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;e.exports.default=class{toString(){return'\n        <video tabindex="0" controls id="'.concat(this.id,'" class="video media"alt="video du photographe ').concat(this.firstName,", intitulée: ").concat(this.title,'">\n            <source src="./assets/images/Sample_Photos/').concat(this.firstName,"/").concat(this.name,'" type="video/mp4">\n            <p>Votre navigateur ne supporte pas la vidéo HTML5. Voici à la place <a href="./assets/images/Sample_Photos/').concat(this.firstName,"/").concat(this.name,'">le lien vers la vidéo</a>.</p>\n        </video>')}constructor(e){let{name:t,id:n,firstName:i,title:a}=e;this.id=n,this.name=t,this.firstName=i,this.title=a}}})),i.register("hWFJt",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n;(n=i("dk0kB"))&&n.__esModule;e.exports.default=class{toString(){return'\n        <img tabindex="0" id="'.concat(this.id,'" alt="image du photographe ').concat(this.firstName,", intitulée: ").concat(this.title,'" class="image media" src="./assets/images/Sample_Photos/').concat(this.firstName,"/").concat(this.name,'">')}constructor(e){let{name:t,id:n,firstName:i,title:a}=e;this.id=n,this.name=t,this.firstName=i,this.title=a}}}));var s=l(i("dk0kB"));i.register("50tn4",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0,i("2LF2s");var n,a=(n=i("61xUa"))&&n.__esModule?n:{default:n};e.exports.default=class{open(e){this.index=e,this.display()}close(){const e=document.querySelector(".lightbox-bg");e.classList.add("fadeout"),e&&window.setTimeout((()=>{e.remove()}),500)}next(){this.index+=1,this.index===this.medias.length&&(this.index=0),this.display()}prev(){this.index-=1,-1===this.index&&(this.index=this.medias.length-1),this.display()}getCurrentMedia(){return this.medias[this.index]}display(){const e=this.getCurrentMedia();let t=document.querySelector(".lightbox-bg");t||(t=document.createElement("div"),t.classList.add("lightbox-bg"),document.body.appendChild(t),document.body.addEventListener("keyup",(e=>{"ArrowRight"===e.key&&this.next()})),document.body.addEventListener("keyup",(e=>{"ArrowLeft"===e.key&&this.prev()})),document.body.addEventListener("keyup",(e=>{"Escape"===e.key&&this.close()}))),t.innerHTML='\n        <div class="lightbox">\n            <button class="lightbox__close"></button>\n            <button class="lightbox__next"></button>\n            <button class="lightbox__prev"></button>\n            <div class="lightbox__container">\n                <figure>\n                    <div class="media">\n                    '.concat(new a.default(e,this.path).create().toString(),"\n                    </div>\n                    <figcaption>").concat(e.title,"</figcaption>\n                </figure>\n            </div>\n        </div >"),t.querySelector(".lightbox__next").addEventListener("click",this.next.bind(this)),t.querySelector(".lightbox__prev").addEventListener("click",this.prev.bind(this)),t.querySelector(".lightbox__close").addEventListener("click",this.close.bind(this)),t.setAttribute("height",window.innerHeight)}constructor(e,t){this.medias=e,this.path=t,this.index=0,document.addEventListener("keyup",this.onKeyUp),this.current=this.getCurrentMedia()}}}));var r=l(i("50tn4")),d=l(i("ezELM"));function l(e){return e&&e.__esModule?e:{default:e}}const c=e=>{const t=document.createElement("div");t.className="bground",t.innerHTML='\n      <div class="modalContent">\n        <span class="close"></span>\n        <div class="modal-body">\n            <h1>Contactez-moi</br>\n            '.concat(e,'</h1>\n          <form id="contact" action="" method="get">\n            <div class="formData">\n              <label for="first">Prénom</label>\n              <input class="text-control" type="text" id="first" name="first" /><br>\n              <span class="error"></span>\n            </div>\n            <div class="formData">\n              <label for="last">Nom</label>\n              <input class="text-control" type="text" id="last" name="last" /><br>\n              <span class="error"></span>\n            </div>\n            <div class="formData">\n              <label for="email">E-mail</label>\n              <input class="text-control" type="email" id="email" name="email" /><br>\n              <span class="error"></span>\n            </div>\n            <div class="formData">\n              <label for="message">Votre message</label>\n              <textarea class="text-control" type="text" id="message" name="message"></textarea>\n              <br>\n              <span class="error"></span>\n            </div>\n            <div class="submit">\n                <input class="btn-submit button" type="submit" value="Envoyer" />\n            </div>\n          </form>\n        </div>\n    </div>'),document.getElementById("main").appendChild(t),document.querySelector("form#contact input[type=submit]").addEventListener("click",(e=>function(e){e.preventDefault();for(let e=0;e<document.forms[0].length-1;e++)console.log(document.forms[0][e].value);document.querySelector(".bground").remove()}(e))),document.getElementById("first").focus()};function u(e,t){const n=new r.default(e,t),i=Array.from(document.querySelectorAll(".video.media, .image.media"));i.forEach((t=>t.addEventListener("click",(t=>{t.preventDefault();const i=e.findIndex((e=>e.id==t.currentTarget.getAttribute("id")));n.open(i)})))),i.forEach((t=>t.addEventListener("keypress",(t=>{if("Enter"===t.key){t.preventDefault();const i=e.findIndex((e=>e.id==t.currentTarget.getAttribute("id")));n.open(i)}}))))}(async()=>{try{const n=new a.default;n.loadPhotographers(),n.loadMedias();const i=new URLSearchParams(document.location.search.substring(1)),r=Number(i.get("id")),l=n.getPhotographerById(r).name,p=l.slice(0,l.indexOf(" ")),m=n.getMediasByPhotographerId(r);e=n.getPhotographerById(r),t=n.getTotalOfLikes(r),document.querySelector(".photographerHeader").innerHTML='\n        <div class="details">\n            <h1 class="title">'.concat(e.name,'</h1>\n            <p class="localisation">').concat(e.country,", ").concat(e.city,'</p>\n            <p class="tagline">').concat(e.tagline,'</p>\n            <div class="tags" aria-label="Liste de tags concernant le photographe">\n                <ul>\n                    ').concat(e.tags.map((e=>'\n                    <a class="tag" title="'.concat(e,'" href="javascript:void(0);" tabindex="0">\n                        <li>#').concat(e,"</li>\n                    </a>\n                "))).join(""),'\n                </ul>\n            </div>\n            <div class="info">\n                <div class="likes">\n                    <span>').concat(t,'</span><span class="fas fa-heart"></span>\n                </div>\n                <div class="price">\n                    <span>').concat(e.price,'€ / jour</span>\n                </div>\n            </div>\n        </div>\n        <div class="button">\n            <button class="btn">Contactez-moi</button>\n        </div>\n        <div class="img" aria-label="Image">\n            <img src="./assets/images/Sample_Photos/Photographers_ID_Photos/').concat(e.portrait,'" alt=" alt="Portrait du photographe ').concat(e.name,'"">\n        </div>\n        '),o.default.handleTagClick((e=>{const t=e.getAttribute("title"),n=new URL("index.html?tag=".concat(t),window.location.href);e.setAttribute("href",n.href)})),document.querySelector(".photographerHeader .button").addEventListener("click",(()=>function(e){document.querySelector(".bground")?o.default.closeModal():c(e),o.default.closeModal(document.querySelector(".bground .close"),document.querySelector(".bground")),o.default.handleInputsFormClick((e=>function(e){const t="[a-zA-Z-sÀ-ɏḀ-ỿ]{3,}$";"first"===e.id&&(e.pattern=t,e.validity.valid?e.removeAttribute("style"):e.setAttribute("style","border:2px solid red; outline:none")),"last"===e.id&&(e.pattern=t,e.validity.valid?e.removeAttribute("style"):e.setAttribute("style","border:2px solid red; outline:none")),"email"===e.id&&(e.pattern="[a-z0-9-_]+[a-z0-9.-_]*@[a-z0-9-_]{2,}.[a-z.-_]+[a-z-_]+",e.validity.valid?e.removeAttribute("style"):e.setAttribute("style","border:2px solid red; outline:none"))}(e)))}(l))),document.querySelector(".filter").innerHTML='        \n        <span>Trier par</span>\n        <div class="btn-group dropdown show">\n            <button class="btn dropdown-toggle"\n            id="dropdownMenuLink"\n            data-toggle="dropdown"\n            aria-haspopup="true"\n            aria-expanded="false">\n                <a>Popularité</a>\n                <span class="fas fa-chevron-down"></span>\n            </button>\n            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">\n                <div class="dropdown-divider"></div>\n                <button class="dropdown-item">Date</button>\n                <button class="dropdown-item">Titre</button>\n            </div>\n        </div>\n    ';const h=document.querySelector(".dropdown-toggle .fas");o.default.toggleDropdownButton(h),o.default.handleMediasFilter((e=>function(e,t,n,i,a){document.querySelector(".medias").innerHTML="","Popularité"===e.textContent.trim()&&(document.querySelector(".medias").appendChild(new s.default(t.getMediasPhotographerByPopularity(n),i).render()),u(a,i)),"Date"===e.textContent.trim()&&(document.querySelector(".medias").appendChild(new s.default(t.getMediasPhotographerByDate(n),i).render()),u(a,i)),"Titre"===e.textContent.trim()&&(document.querySelector(".medias").appendChild(new s.default(t.getMediasPhotographerByTitle(n),i).render()),u(a,i))}(e,n,r,p,m))),document.querySelector(".medias").appendChild(new s.default(m,p).render()),u(m,p),window.addEventListener("scroll",(()=>d.default.scrollToTop(document.querySelector(".scrollToMainButton")))),document.title="Fisheye | ".concat(l)}catch(e){console.error(e)}var e,t})();
//# sourceMappingURL=photographer.2819a30b.js.map
