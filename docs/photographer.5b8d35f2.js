!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequire8288;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequire8288=i),i("8hHD0"),i("5zeJx"),i("5b597"),i("gCKyq"),i("iX5Rb"),i("5zvMC"),i("ilGsu"),i("fjeSn");var n=c(i("1IXKx")),o=c(i("gMLik"));i.register("6vYH3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0,i("6F8bd");var a,n=(a=i("eIW9j"))&&a.__esModule?a:{default:a};e.exports.default=class{render(){const e=document.createElement("div");return e.classList.add("container"),e.innerHTML=this.toString(),e}toString(){return"\n            ".concat(this.medias.map((e=>{let{image:t,video:a,title:i,likes:o,id:r,alt_text:s}=e;return'\n            <figure class="content-media">\n                <div class="content-media__media">\n                '.concat(new n.default({image:t,video:a,id:r,title:i,alt_text:s},this.firstNameOfPhotographer).create().toString(),'\n                </div>\n                <figcaption class="content-media__figcaption">\n                    <span>').concat(i,'</span>\n                    <span class="content-media__likesNumber">').concat(o,' </span><span class="fas fa-heart" tabindex="0"></span>\n                </figcaption>\n            </figure>\n        ')})).join(""),"\n    ")}constructor(e,t){this.medias=e,this.firstNameOfPhotographer=t}}})),i.register("eIW9j",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var a=o(i("4lUxj")),n=o(i("kaMO2"));function o(e){return e&&e.__esModule?e:{default:e}}e.exports.default=class{create(){return this.media.video?new a.default({name:this.media.video,id:this.media.id,firstName:this.firstName,title:this.media.title,altText:this.media.alt_text}):new n.default({name:this.media.image,id:this.media.id,firstName:this.firstName,title:this.media.title,altText:this.media.alt_text})}constructor(e,t){this.media=e,this.firstName=t}}})),i.register("4lUxj",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;e.exports.default=class{toString(){return'\n        <video tabindex="0" id="'.concat(this.id,'" class="video media" alt="').concat(this.altText,": ").concat(this.title,'" preload="metadata">\n            <source src="./assets/images/Sample_Photos/').concat(this.firstName,"/").concat(this.name,'#t=0.1" type="video/mp4">\n            <p>Votre navigateur ne supporte pas la vidéo HTML5. Voici à la place <a href="./assets/images/Sample_Photos/').concat(this.firstName,"/").concat(this.name,'">le lien vers la vidéo</a>.</p>\n        </video>')}constructor(e){let{name:t,id:a,firstName:i,title:n,altText:o}=e;this.id=a,this.name=t,this.firstName=i,this.title=n,this.altText=o}}})),i.register("kaMO2",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;e.exports.default=class{toString(){return'\n        <img src="./assets/images/Sample_Photos/'.concat(this.firstName,"/").concat(this.name,'" id="').concat(this.id,'" alt="').concat(this.altText,": ").concat(this.title,'" class="image media" tabindex="0">')}constructor(e){let{name:t,id:a,firstName:i,title:n,altText:o}=e;this.id=a,this.name=t,this.firstName=i,this.title=n,this.altText=o}}}));var r=c(i("6vYH3"));i.register("aCZfh",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0,i("6F8bd"),i("iX5Rb");var a,n=(a=i("eIW9j"))&&a.__esModule?a:{default:a};e.exports.default=class{open(e){this.index=e,this.display()}close(){const e=document.querySelector(".lightbox-bg");e.classList.add("fadeout"),e&&window.setTimeout((()=>{e.remove()}),500)}next(){this.index+=1,this.index===this.medias.length&&(this.index=0),this.display()}prev(){this.index-=1,-1===this.index&&(this.index=this.medias.length-1),this.display()}getCurrentMedia(){return this.medias[this.index]}display(){const e=this.getCurrentMedia();let t=document.querySelector(".lightbox-bg");t||(t=document.createElement("div"),t.classList.add("lightbox-bg"),document.body.appendChild(t),document.body.addEventListener("keyup",(e=>{"ArrowRight"===e.key&&this.next()})),document.body.addEventListener("keyup",(e=>{"ArrowLeft"===e.key&&this.prev()})),document.body.addEventListener("keyup",(e=>{"Escape"===e.key&&this.close()}))),t.innerHTML='\n        <div role="dialog" class="lightbox" aria-label="image closeup view">\n            <button aria-label="Close dialog" class="lightbox__close"></button>\n            <div class="lightbox__container">\n            <figure>\n                <div class="media">\n                    <button aria-label="Next image" class="lightbox__next"></button>\n                    <button aria-label="Previous image" class="lightbox__prev"></button>\n                    '.concat(new n.default(e,this.path).create().toString(),"\n                </div>\n                <figcaption>").concat(e.title,"</figcaption>\n                </figure>\n            </div>\n        </div >"),t.querySelector(".lightbox__next").addEventListener("click",this.next.bind(this)),t.querySelector(".lightbox__prev").addEventListener("click",this.prev.bind(this)),t.querySelector(".lightbox__close").addEventListener("click",this.close.bind(this)),t.getElementsByTagName("video").forEach((e=>e.setAttribute("controls",!0))),t.setAttribute("height",window.innerHeight)}constructor(e,t){this.medias=e,this.path=t,this.index=0,document.addEventListener("keyup",this.onKeyUp),this.current=this.getCurrentMedia()}}}));var s=c(i("aCZfh")),l=c(i("gsUaF"));i.register("5ObvI",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var a,n=(a=i("gMLik"))&&a.__esModule?a:{default:a};e.exports.default=class{init(e){document.querySelector(".bground")?n.default.closeModal():this.display(e),n.default.handleInputsFormClick((e=>this.checkField(e))),document.getElementById("section").setAttribute("aria-hidden","true"),n.default.closeModal(document.querySelector(".bground .close"),document.querySelector(".bground"))}checkField(e){const t="[a-zA-Z-sÀ-ɏḀ-ỿ]{3,}$";"first"===e.id&&(e.pattern=t,e.validity.valid?(e.removeAttribute("style"),document.querySelector(".formData.first span").textContent="",document.querySelector(".formData.first span").classList.remove("error")):(e.setAttribute("style","border:2px solid red; outline:none"),document.querySelector(".formData.first span").classList.add("error"),document.querySelector(".formData.first .error").textContent="Veuillez saisir un nom valide.")),"last"===e.id&&(e.pattern=t,e.validity.valid?(e.removeAttribute("style"),document.querySelector(".formData.last span").textContent="",document.querySelector(".formData.last span").classList.remove("error")):(e.setAttribute("style","border:2px solid red; outline:none"),document.querySelector(".formData.last span").classList.add("error"),document.querySelector(".formData.last .error").textContent="Veuillez saisir un nom valide.")),"email"===e.id&&(e.pattern="[a-z0-9-_]+[a-z0-9.-_]*@[a-z0-9-_]{2,}.[a-z.-_]+[a-z-_]+",e.validity.valid?(e.removeAttribute("style"),document.querySelector(".formData.email span").textContent="",document.querySelector(".formData.email span").classList.remove("error")):(e.setAttribute("style","border:2px solid red; outline:none"),document.querySelector(".formData.email span").classList.add("error"),document.querySelector(".formData.email .error").textContent="Veuillez saisir un email valide."))}submit(e){e.preventDefault();for(let t=0;t<document.forms[0].length-1;t++)if(document.forms[0][t].checkValidity()&&""!==document.forms[0][t].value){if(console.info(document.forms[0][t].value),t===document.forms[0].length-2){document.querySelector(".modal-body").innerHTML='<p style="color:#FFF; text-align:center">Merci,</br>votre formulaire a bien été enregistré !',document.body.addEventListener("keyup",(e=>{"Escape"===e.key&&document.querySelector(".bground")&&document.querySelector(".bground").remove()}));break}}else{e.preventDefault(),console.clear();let a=document.forms[0][t].getAttribute("id"),i=document.querySelector(".formData.".concat(a," label")).getInnerHTML();alert("Veuillez saisir un "+i)}}display(e){const t=document.createElement("div");t.className="bground",t.innerHTML='\n          <div role="dialog" class="modalContent"\n          aria-labelledby="dialogTitle"\n          aria-modal="true">\n            <span role="button" aria-label="Close Contact form" class="close" tabindex="0"></span>\n            <div class="modal-body">\n                <h1 id="dialogTitle" aria-label="Contact me '.concat(e,'" >Contactez-moi</br>\n                ').concat(e,'</h1>\n              <form id="contact" action="" method="get">\n                <div class="formData first">\n                  <label aria-label="First name" for="first">Prénom</label>\n                  <input class="text-control" type="text" id="first" name="first" aria-labelledby="first"/>\n                  <span></span>\n                </div>\n                <div class="formData last">\n                  <label aria-label="Last name" for="last">Nom</label>\n                  <input class="text-control" type="text" id="last" name="last" aria-labelledby="last"/>\n                  <span></span>\n                </div>\n                <div class="formData email">\n                  <label aria-label="email" for="email">E-mail</label>\n                  <input class="text-control" type="email" id="email" name="email" aria-labelledby="email"/>\n                  <span></span>\n                </div>\n                <div class="formData message">\n                  <label aria-label="Your message" for="message">Votre message</label>\n                  <textarea class="text-control" type="text" id="message" name="message" aria-labelledby="message"></textarea>\n                  <span></span>\n                </div>\n                <div class="submit">\n                    <input class="btn-submit button" type="submit" value="Envoyer" aria-label="Send"/>\n                </div>\n              </form>\n            </div>\n        </div>'),document.getElementById("main").appendChild(t),document.querySelector("form#contact input[type=submit]").addEventListener("click",(e=>this.submit(e))),document.getElementById("first").focus()}constructor(e){this.nameOfPhotographer=e,this.init(this.nameOfPhotographer)}}}));var d=c(i("5ObvI"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){const a=new s.default(e,t),i=Array.from(document.querySelectorAll(".video.media, .image.media"));i.forEach((t=>t.addEventListener("click",(t=>{t.preventDefault();const i=e.findIndex((e=>e.id==t.currentTarget.getAttribute("id")));a.open(i)})))),i.forEach((t=>t.addEventListener("keypress",(t=>{if("Enter"===t.key){t.preventDefault();const i=e.findIndex((e=>e.id==t.currentTarget.getAttribute("id")));a.open(i)}}))))}function m(e){let t=Number(document.querySelector(".info .likes span:first-child").innerText);document.querySelector(".info .likes span:first-child").innerText=t+1;let a=Number(e.previousSibling.innerText);e.previousSibling.innerText=a+1}(async()=>{try{const e=new n.default;e.loadPhotographers(),e.loadMedias();const t=new URLSearchParams(document.location.search.substring(1)),a=Number(t.get("id")),i=e.getPhotographerById(a).name,s=i.slice(0,i.indexOf(" ")),c=e.getMediasByPhotographerId(a),p=e.getTotalOfLikes(a);((e,t)=>{document.querySelector(".photographerHeader").innerHTML='\n        <div class="details">\n            <h1 class="title">'.concat(e.name,'</h1>\n            <p class="localisation">').concat(e.country,", ").concat(e.city,'</p>\n            <p class="tagline">').concat(e.tagline,'</p>\n            <div class="tags" aria-label="Liste de tags concernant le photographe">\n                <ul>\n                    ').concat(e.tags.map((e=>'\n                    <li class="tag">\n                        <a title="'.concat(e,'" href="javascript:void(0);" tabindex="0">#').concat(e.charAt(0).toUpperCase()).concat(e.slice(1),"</a>\n                    </li>\n                "))).join(""),'\n                </ul>\n            </div>\n            <div class="info">\n                <div class="likes" arial-label="likes">\n                    <span>').concat(t,'</span><span class="fas fa-heart"></span>\n                </div>\n                <div class="price">\n                    <span>').concat(e.price,'€ / jour</span>\n                </div>\n            </div>\n        </div>\n        <div class="button">\n            <button class="btn">Contactez-moi</button>\n        </div>\n        <div class="img">\n            <img src="./assets/images/Sample_Photos/Photographers_ID_Photos/').concat(e.portrait,'" alt="').concat(e.name,'"">\n        </div>\n        ')})(e.getPhotographerById(a),p),o.default.handleTagClick((e=>{const t=e.getAttribute("title"),a=new URL("index.html?tag=".concat(t),window.location.href);e.setAttribute("href",a.href)})),document.querySelector(".photographerHeader .button").addEventListener("click",(()=>new d.default(i))),document.querySelector(".filter").innerHTML='        \n        <p id="listbox1label" role="label">Trier par</p>\n        <div role="listbox" id="listbox1" class="btn-group dropdown show">\n            <button class="btn dropdown-toggle"\n            id="dropdownMenuLink"\n            aria-labelledby="listbox1label"\n            data-toggle="dropdown"\n            aria-haspopup="listbox"\n            aria-activedescendant="listbox1-1"\n            aria-expanded="true">\n                <div role="option">\n                    <a href="javascript:void(0);" role="listbox" id="listbox1-1" tabindex="0">Popularité</a>\n                </div>\n                <span class="fas fa-chevron-down" tabindex="0"></span>\n            </button>\n            <div class="dropdown-menu"\n            aria-labelledby="dropdownMenuLink">\n                <div class="dropdown-divider"></div>\n                <div role="option id="listbox1-2" class="dropdown-item"">\n                    <a href="javascript:void(0);" role="listbox" id="listbox1-2" tabindex="0">Date</a>\n                </div>\n                <div role="option id="listbox1-3" class="dropdown-item">\n                    <a href="javascript:void(0);" role="listbox" id="listbox1-3" tabindex="0">Titre</a>\n                </div>\n            </div>\n        </div>\n    ';const f=document.querySelector(".dropdown-toggle .fas");o.default.toggleDropdownButton(f),o.default.handleMediasFilter((t=>function(e,t,a,i,n){document.querySelector(".medias").innerHTML="","Popularité"===e.textContent.trim()&&(document.querySelector(".medias").appendChild(new r.default(t.getMediasPhotographerByPopularity(a),i).render()),u(n,i)),"Date"===e.textContent.trim()&&(document.querySelector(".medias").appendChild(new r.default(t.getMediasPhotographerByDate(a),i).render()),u(n,i)),"Titre"===e.textContent.trim()&&(document.querySelector(".medias").appendChild(new r.default(t.getMediasPhotographerByTitle(a),i).render()),u(n,i))}(t,e,a,s,c))),document.querySelector(".medias").appendChild(new r.default(c,s).render()),u(c,s),o.default.handleLikesClick((e=>m(e))),o.default.handleLikesKey((e=>m(e))),window.addEventListener("scroll",(()=>l.default.scrollToTop(document.querySelector(".scrollToMainButton")))),document.title="Fisheye | ".concat(i)}catch(e){console.error(e)}})()}();
//# sourceMappingURL=photographer.5b8d35f2.js.map
