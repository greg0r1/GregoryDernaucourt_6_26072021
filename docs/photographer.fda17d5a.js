var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=e.parcelRequire8288;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequire8288=a);var n=a("i0cii"),r=a("kN6NL");class s{toString(){return`\n        <video tabindex="0" controls id="${this.id}" class="video media" alt="${this.title}">\n            <source src="./assets/images/Sample_Photos/${this.firstName}/${this.name}" type="video/mp4">\n            <p>Votre navigateur ne supporte pas la vidéo HTML5. Voici à la place <a href="./assets/images/Sample_Photos/${this.firstName}/${this.name}">le lien vers la vidéo</a>.</p>\n        </video>`}constructor({name:e,id:t,firstName:i,title:a}){this.id=t,this.name=e,this.firstName=i,this.title=a}}class o{toString(){return`\n        <img tabindex="0" id="${this.id}" alt="${this.title}" class="image media" src="./assets/images/Sample_Photos/${this.firstName}/${this.name}">`}constructor({name:e,id:t,firstName:i,title:a}){this.id=t,this.name=e,this.firstName=i,this.title=a}}class l{create(){return this.media.video?new s({name:this.media.video,id:this.media.id,firstName:this.firstName,title:this.media.title}):new o({name:this.media.image,id:this.media.id,firstName:this.firstName,title:this.media.title})}constructor(e,t){this.media=e,this.firstName=t}}class d{render(){const e=document.createElement("div");return e.classList.add("container"),e.innerHTML=this.toString(),e}toString(){return`\n            ${this.medias.map((({image:e,video:t,title:i,likes:a,id:n})=>`\n            <figure class="content-media">\n                <div class="content-media__media">\n                    ${new l({image:e,video:t,id:n,title:i},this.firstNameOfPhotographer).create().toString()}\n                </div>\n                <figcaption class="content-media__figcaption">\n                    <span class="content-media__title">${i}</span>\n                    <span>${a} </span><span class="fas fa-heart"></span>\n                </figcaption>\n            </figure>\n        `)).join("")}\n    `}constructor(e,t){this.medias=e,this.firstNameOfPhotographer=t}}class c{open(e){this.index=e,this.display()}close(){const e=document.querySelector(".lightbox-bg");e.classList.add("fadeout"),e&&window.setTimeout((()=>{e.remove()}),500)}next(){this.index+=1,this.index===this.medias.length&&(this.index=0),this.display()}prev(){this.index-=1,-1===this.index&&(this.index=this.medias.length-1),this.display()}getCurrentMedia(){return this.medias[this.index]}display(){const e=this.getCurrentMedia();let t=document.querySelector(".lightbox-bg");t||(t=document.createElement("div"),t.classList.add("lightbox-bg"),document.body.appendChild(t),document.body.addEventListener("keyup",(e=>{"ArrowRight"===e.key&&this.next()})),document.body.addEventListener("keyup",(e=>{"ArrowLeft"===e.key&&this.prev()})),document.body.addEventListener("keyup",(e=>{"Escape"===e.key&&this.close()}))),t.innerHTML=`\n        <div role="dialog" class="lightbox" aria-label="image closeup view">\n            <button aria-label="Close dialog" class="lightbox__close"></button>\n            <button aria-label="Next image" class="lightbox__next"></button>\n            <button aria-label="Previous image" class="lightbox__prev"></button>\n            <div class="lightbox__container">\n                <figure>\n                    <div class="media">\n                    ${new l(e,this.path).create().toString()}\n                    </div>\n                    <figcaption>${e.title}</figcaption>\n                </figure>\n            </div>\n        </div >`,t.querySelector(".lightbox__next").addEventListener("click",this.next.bind(this)),t.querySelector(".lightbox__prev").addEventListener("click",this.prev.bind(this)),t.querySelector(".lightbox__close").addEventListener("click",this.close.bind(this)),t.setAttribute("height",window.innerHeight)}constructor(e,t){this.medias=e,this.path=t,this.index=0,document.addEventListener("keyup",this.onKeyUp),this.current=this.getCurrentMedia()}}var m=a("ezELM");r=a("kN6NL");class u{init(e){document.querySelector(".bground")?r.default.closeModal():this.display(e),r.default.handleInputsFormClick((e=>this.checkField(e))),document.getElementById("section").setAttribute("aria-hidden","true"),r.default.closeModal(document.querySelector(".bground .close"),document.querySelector(".bground"))}checkField(e){const t="[a-zA-Z-sÀ-ɏḀ-ỿ]{3,}$";"first"===e.id&&(e.pattern=t,e.validity.valid?(e.removeAttribute("style"),document.querySelector(".formData.first span").textContent="",document.querySelector(".formData.first span").classList.remove("error")):(e.setAttribute("style","border:2px solid red; outline:none"),document.querySelector(".formData.first span").classList.add("error"),document.querySelector(".formData.first .error").textContent="Veuillez saisir un nom valide.")),"last"===e.id&&(e.pattern=t,e.validity.valid?(e.removeAttribute("style"),document.querySelector(".formData.last span").textContent="",document.querySelector(".formData.last span").classList.remove("error")):(e.setAttribute("style","border:2px solid red; outline:none"),document.querySelector(".formData.last span").classList.add("error"),document.querySelector(".formData.last .error").textContent="Veuillez saisir un nom valide.")),"email"===e.id&&(e.pattern="[a-z0-9-_]+[a-z0-9.-_]*@[a-z0-9-_]{2,}.[a-z.-_]+[a-z-_]+",e.validity.valid?(e.removeAttribute("style"),document.querySelector(".formData.email span").textContent="",document.querySelector(".formData.email span").classList.remove("error")):(e.setAttribute("style","border:2px solid red; outline:none"),document.querySelector(".formData.email span").classList.add("error"),document.querySelector(".formData.email .error").textContent="Veuillez saisir un email valide."))}submit(e){e.preventDefault();for(let e=0;e<document.forms[0].length-1;e++)if(document.forms[0][e].checkValidity()&&""!==document.forms[0][e].value){if(console.info(document.forms[0][e].value),e===document.forms[0].length-2){document.querySelector(".modal-body").innerHTML='<p style="color:#FFF; text-align:center">Merci</br>votre formulaire a bien été enregistré !',document.body.addEventListener("keyup",(e=>{"Escape"===e.key&&document.querySelector(".bground").remove()}));break}}else{let t=document.forms[0][e].getAttribute("id"),i=document.querySelector(`.formData.${t} label`).getInnerHTML();alert("Veuillez saisir un "+i)}}display(e){const t=document.createElement("div");t.className="bground",t.innerHTML=`\n          <div role="dialog" class="modalContent"\n          aria-labelledby="dialogTitle"\n          aria-modal="true">\n            <span role="button" aria-label="Close Contact form" class="close" tabindex="0"></span>\n            <div class="modal-body">\n                <h1 id="dialogTitle" aria-label="Contact me ${e}" >Contactez-moi</br>\n                ${e}</h1>\n              <form id="contact" action="" method="get">\n                <div class="formData first">\n                  <label aria-label="First name" for="first">Prénom</label>\n                  <input class="text-control" type="text" id="first" name="first" aria-labelledby="first"/>\n                  <span></span>\n                </div>\n                <div class="formData last">\n                  <label aria-label="Last name" for="last">Nom</label>\n                  <input class="text-control" type="text" id="last" name="last" aria-labelledby="last"/>\n                  <span></span>\n                </div>\n                <div class="formData email">\n                  <label aria-label="email" for="email">E-mail</label>\n                  <input class="text-control" type="email" id="email" name="email" aria-labelledby="email"/>\n                  <span></span>\n                </div>\n                <div class="formData message">\n                  <label aria-label="Your message" for="message">Votre message</label>\n                  <textarea class="text-control" type="text" id="message" name="message" aria-labelledby="message"></textarea>\n                  <span></span>\n                </div>\n                <div class="submit">\n                    <input class="btn-submit button" type="submit" value="Envoyer" aria-label="Send"/>\n                </div>\n              </form>\n            </div>\n        </div>`,document.getElementById("main").appendChild(t),document.querySelector("form#contact input[type=submit]").addEventListener("click",(e=>this.submit(e))),document.getElementById("first").focus()}constructor(e){this.nameOfPhotographer=e,this.init(this.nameOfPhotographer)}}function p(e,t){const i=new c(e,t),a=Array.from(document.querySelectorAll(".video.media, .image.media"));a.forEach((t=>t.addEventListener("click",(t=>{t.preventDefault();const a=e.findIndex((e=>e.id==t.currentTarget.getAttribute("id")));i.open(a)})))),a.forEach((t=>t.addEventListener("keypress",(t=>{if("Enter"===t.key){t.preventDefault();const a=e.findIndex((e=>e.id==t.currentTarget.getAttribute("id")));i.open(a)}}))))}(async()=>{try{const i=new n.default;i.loadPhotographers(),i.loadMedias();const a=new URLSearchParams(document.location.search.substring(1)),s=Number(a.get("id")),o=i.getPhotographerById(s).name,l=o.slice(0,o.indexOf(" ")),c=i.getMediasByPhotographerId(s);e=i.getPhotographerById(s),t=i.getTotalOfLikes(s),document.querySelector(".photographerHeader").innerHTML=`\n        <div class="details">\n            <h1 class="title">${e.name}</h1>\n            <p class="localisation">${e.country}, ${e.city}</p>\n            <p class="tagline">${e.tagline}</p>\n            <div class="tags" aria-label="Liste de tags concernant le photographe">\n                <ul>\n                    ${e.tags.map((e=>`\n                    <li class="tag">\n                        <a title="${e}" href="javascript:void(0);" tabindex="0">#${e}</a>\n                    </li>\n                `)).join("")}\n                </ul>\n            </div>\n            <div class="info">\n                <div class="likes" arial-label="likes">\n                    <span>${t}</span><span class="fas fa-heart"></span>\n                </div>\n                <div class="price">\n                    <span>${e.price}€ / jour</span>\n                </div>\n            </div>\n        </div>\n        <div class="button">\n            <button class="btn">Contactez-moi</button>\n        </div>\n        <div class="img" aria-label="Image">\n            <img src="./assets/images/Sample_Photos/Photographers_ID_Photos/${e.portrait}" alt="${e.name}"">\n        </div>\n        `,r.default.handleTagClick((e=>{const t=e.getAttribute("title"),i=new URL(`index.html?tag=${t}`,window.location.href);e.setAttribute("href",i.href)})),document.querySelector(".photographerHeader .button").addEventListener("click",(()=>new u(o))),document.querySelector(".filter").innerHTML='        \n        <p id="listbox1label" role="label">Trier par</p>\n        <div role="listbox" id="listbox1" class="btn-group dropdown show">\n            <button class="btn dropdown-toggle"\n            id="dropdownMenuLink"\n            aria-labelledby="listbox1label"\n            data-toggle="dropdown"\n            aria-haspopup="listbox"\n            aria-activedescendant="listbox1-1"\n            aria-expanded="true">\n                <div role="option" id="listbox1-1">\n                    <a href="javascript:void(0);" role="listbox" id="listbox1-1" tabindex="0">Popularité</a>\n                </div>\n                <span class="fas fa-chevron-down" tabindex="0"></span>\n            </button>\n            <div class="dropdown-menu"\n            aria-labelledby="dropdownMenuLink">\n                <div class="dropdown-divider"></div>\n                <div role="option id="listbox1-2" class="dropdown-item"">\n                    <a href="javascript:void(0);" role="listbox" id="listbox1-2" tabindex="0">Date</a>\n                </div>\n                <div role="option id="listbox1-3" class="dropdown-item">\n                    <a href="javascript:void(0);" role="listbox" id="listbox1-3" tabindex="0">Titre</a>\n                </div>\n            </div>\n        </div>\n    ';const h=document.querySelector(".dropdown-toggle .fas");r.default.toggleDropdownButton(h),r.default.handleMediasFilter((e=>function(e,t,i,a,n){document.querySelector(".medias").innerHTML="","Popularité"===e.textContent.trim()&&(document.querySelector(".medias").appendChild(new d(t.getMediasPhotographerByPopularity(i),a).render()),p(n,a)),"Date"===e.textContent.trim()&&(document.querySelector(".medias").appendChild(new d(t.getMediasPhotographerByDate(i),a).render()),p(n,a)),"Titre"===e.textContent.trim()&&(document.querySelector(".medias").appendChild(new d(t.getMediasPhotographerByTitle(i),a).render()),p(n,a))}(e,i,s,l,c))),document.querySelector(".medias").appendChild(new d(c,l).render()),p(c,l),window.addEventListener("scroll",(()=>m.default.scrollToTop(document.querySelector(".scrollToMainButton")))),document.title=`Fisheye | ${o}`}catch(e){console.error(e)}var e,t})();
//# sourceMappingURL=photographer.fda17d5a.js.map
