// Model
import DataService from './classes/DataService';
import EventService from './classes/EventService';
import ViewMedias from './classes/ViewMedias';
import Lightbox from './classes/Lightbox';
import EventScrollToTop from './classes/EventScrollToTop'

// View

const displayPhotographerInfos = (photographer, totalLikes) => {
    const headerPhotographerInfosElement = document.querySelector('.photographerHeader');

    headerPhotographerInfosElement.innerHTML = `
        <div class="details">
            <h1 class="title">${photographer.name}</h1>
            <p class="localisation">${photographer.country}, ${photographer.city}</p>
            <p class="tagline">${photographer.tagline}</p>
            <div class="tags" aria-label="Liste de tags concernant le photographe">
                <ul>
                    ${photographer.tags.map((tag) => `
                    <li class="tag">
                        <a title="${tag}" href="javascript:void(0);" tabindex="0">#${tag}</a>
                    </li>
                `).join("")}
                </ul>
            </div>
            <div class="info">
                <div class="likes" arial-label="Total number of photographer likes">
                    <span>${totalLikes}</span><span class="fas fa-heart"></span>
                </div>
                <div class="price">
                    <span>${photographer.price}€ / jour</span>
                </div>
            </div>
        </div>
        <div class="button">
            <button class="btn">Contactez-moi</button>
        </div>
        <div class="img" aria-label="Image">
            <img src="./assets/images/Sample_Photos/Photographers_ID_Photos/${photographer.portrait}" alt=" alt="Portrait du photographe ${photographer.name}"">
        </div>
        `
}

const displayFilterButton = () => {
    const filterButtonElement = document.querySelector('.filter');
    filterButtonElement.innerHTML = `        
        <p id="listbox1label" role="label">Trier par</p>
        <div role="listbox" id="listbox1" class="btn-group dropdown show">
            <button class="btn dropdown-toggle"
            id="dropdownMenuLink"
            aria-labelledby="listbox1label"
            data-toggle="dropdown"
            aria-haspopup="listbox"
            aria-activedescendant="listbox1-1"
            aria-expanded="true">
                <div role="option" id="listbox1-1">
                    <a href="javascript:void(0);" role="listbox" id="listbox1-1" tabindex="0">Popularité</a>
                </div>
                <span class="fas fa-chevron-down" tabindex="0"></span>
            </button>
            <div class="dropdown-menu"
            aria-labelledby="dropdownMenuLink">
                <div class="dropdown-divider"></div>
                <div role="option id="listbox1-2" class="dropdown-item"">
                    <a href="javascript:void(0);" role="listbox" id="listbox1-2" tabindex="0">Date</a>
                </div>
                <div role="option id="listbox1-3" class="dropdown-item">
                    <a href="javascript:void(0);" role="listbox" id="listbox1-3" tabindex="0">Titre</a>
                </div>
            </div>
        </div>
    `
}

const displayModalForm = (name) => {
    const div = document.createElement('div');
    div.className = 'bground';

    div.innerHTML = `
      <div role="dialog" class="modalContent"
      aria-labelledby="dialogTitle"
      aria-modal="true">
        <span role="button" aria-label="Close Contact form" class="close"></span>
        <div class="modal-body">
            <h1 id="dialogTitle" aria-label="Contact me ${name}" >Contactez-moi</br>
            ${name}</h1>
          <form id="contact" action="" method="get">
            <div class="formData">
              <label aria-label="First name" id="first" for="first">Prénom</label>
              <input class="text-control" type="text" id="first" name="first" aria-labelledby="first"/><br>
              <span class="error"></span>
            </div>
            <div class="formData">
              <label aria-label="Last name" id="last" for="last">Nom</label>
              <input class="text-control" type="text" id="last" name="last" aria-labelledby="last"/><br>
              <span class="error"></span>
            </div>
            <div class="formData">
              <label aria-label="email" id="email" for="email">E-mail</label>
              <input class="text-control" type="email" id="email" name="email" aria-labelledby="email"/><br>
              <span class="error"></span>
            </div>
            <div class="formData">
              <label aria-label="Your message" id="message" for="message">Votre message</label>
              <textarea class="text-control" type="text" id="message" name="message" aria-labelledby="message"></textarea>
              <br>
              <span class="error"></span>
            </div>
            <div class="submit">
                <input class="btn-submit button" type="submit" value="Envoyer" aria-label="Send"/>
            </div>
          </form>
        </div>
    </div>`;
    document.getElementById('main').appendChild(div);
    document.querySelector('form#contact input[type=submit]').addEventListener('click', (e) => getValuesForm(e));
    document.getElementById('first').focus();
}


// Scripts
/**
 *
 *
 * @param {*} data
 */
function eventOnTags() {
    // On ajoute l'événement "click" à chaque élément "tag"
    EventService.handleTagClick((element) => {
        const nameAttributeOfTag = element.getAttribute('title');
        const url = new URL(`index.html?tag=${nameAttributeOfTag}`, window.location.href);
        element.setAttribute('href', url.href)
    });
}

function filterMediasOnDropdownButton(element, dataService, idFromUrlParams, firstNameOfPhotographer, medias) {
    document.querySelector(".medias").innerHTML = '';
    if (element.textContent.trim() === "Popularité") {
        document.querySelector(".medias").appendChild(new ViewMedias(dataService.getMediasPhotographerByPopularity(idFromUrlParams), firstNameOfPhotographer).render());
        eventOpenLightboxOnMediasElements(medias, firstNameOfPhotographer)
    }
    if (element.textContent.trim() === "Date") {
        document.querySelector(".medias").appendChild(new ViewMedias(dataService.getMediasPhotographerByDate(idFromUrlParams), firstNameOfPhotographer).render());
        eventOpenLightboxOnMediasElements(medias, firstNameOfPhotographer)
    }
    if (element.textContent.trim() === "Titre") {
        document.querySelector(".medias").appendChild(new ViewMedias(dataService.getMediasPhotographerByTitle(idFromUrlParams), firstNameOfPhotographer).render());
        eventOpenLightboxOnMediasElements(medias, firstNameOfPhotographer)
    }
}

function eventOpenLightboxOnMediasElements(medias, firstNameOfPhotographer) {
    const lightbox = new Lightbox(medias, firstNameOfPhotographer);
    const mediasElements = Array.from(document.querySelectorAll('.video.media, .image.media'));
    mediasElements.forEach(element => element.addEventListener('click', e => {
        e.preventDefault();
        const key = medias.findIndex(element => element.id == e.currentTarget.getAttribute('id'));
        lightbox.open(key);
    }
    ));
    mediasElements.forEach(element => element.addEventListener('keypress', e => {
        if (e.key === "Enter") {
            e.preventDefault();
            const key = medias.findIndex(element => element.id == e.currentTarget.getAttribute('id'));
            lightbox.open(key);
        }
    }))
}

/**
 * Fonction qui affiche le formulaire de contact
 *
 * @param {*} nameOfPhotographer
 */
function eventDisplayModalForm(nameOfPhotographer) {

    (document.querySelector('.bground')) ? EventService.closeModal() : displayModalForm(nameOfPhotographer);
    EventService.closeModal(document.querySelector('.bground .close'), document.querySelector('.bground'));
    // Events de vérification sur les champs des formulaires
    EventService.handleInputsFormClick((e) => checkField(e));
    //On rend les éléments en arrière-plan inaccessible pour les lecteurs d'écran
    document.getElementById('section').setAttribute('aria-hidden', 'true')
}

function getValuesForm(e) {
    e.preventDefault();
    for (let i = 0; i < document.forms[0].length - 1; i++) {
        console.log(document.forms[0][i].value)
    };
    document.querySelector('.bground').remove()
}

// Modal Form
/**
 * Vérification des champs input de la fenêtre modale
 * de contact
 *
 * @param {*} element
 */
function checkField(element) {
    const regExName = "[a-zA-Z-s\u00C0-\u024F\u1E00-\u1EFF]{3,}$"; // Regex qui vérifie si le champ a plus de 3 caractères, les accents, et espaces des noms composés

    if (element.id === "first") {
        element.pattern = regExName;
        if (!element.validity.valid) {
            element.setAttribute("style", "border:2px solid red; outline:none");

        } else {
            element.removeAttribute("style");
        }
    }
    if (element.id === "last") {
        element.pattern = regExName;
        if (!element.validity.valid) {
            element.setAttribute("style", "border:2px solid red; outline:none");

        } else {
            element.removeAttribute("style");
        }
    }
    if (element.id === "email") {
        element.pattern = "[a-z0-9-_]+[a-z0-9.-_]*@[a-z0-9-_]{2,}.[a-z.-_]+[a-z-_]+"; // Regex qui vérifie si le champ a un email valide
        if (!element.validity.valid) {
            element.setAttribute("style", "border:2px solid red; outline:none");

        } else {
            element.removeAttribute("style");
        }
    }
}


// Controller

const mainPhotographer = async () => {
    try {
        const dataService = new DataService();
        // On récupère l'ensemble des photographes du Json
        dataService.loadPhotographers();
        // On récupère l'ensemble des médias des photographes du Json
        dataService.loadMedias();

        // On display le photographe avec ses infos grâce à son id récupéré dans l'url
        const paramsFromUrl = new URLSearchParams(document.location.search.substring(1));
        const idFromUrlParams = Number(paramsFromUrl.get("id"));
        const nameOfPhotographer = dataService.getPhotographerById(idFromUrlParams).name;
        const firstNameOfPhotographer = nameOfPhotographer.slice(0, nameOfPhotographer.indexOf(' '));
        const medias = dataService.getMediasByPhotographerId(idFromUrlParams);
        displayPhotographerInfos(dataService.getPhotographerById(idFromUrlParams), dataService.getTotalOfLikes(idFromUrlParams));
        // On ajoute les events sur les tags qui renvoients sur la page index
        eventOnTags();
        // Event sur bouton contact
        document.querySelector('.photographerHeader .button').addEventListener('click', () => eventDisplayModalForm(nameOfPhotographer));
        //On affiche le bouton de filtre
        displayFilterButton();
        const chevronElement = document.querySelector(".dropdown-toggle .fas");
        EventService.toggleDropdownButton(chevronElement);
        // Filtres
        EventService.handleMediasFilter((element) => filterMediasOnDropdownButton(element, dataService, idFromUrlParams, firstNameOfPhotographer, medias));
        //On affiche les médias du photographes
        document.querySelector(".medias").appendChild(new ViewMedias(medias, firstNameOfPhotographer).render());
        //On ajoute l'événement sur chaque image pour afficher la lightbox
        eventOpenLightboxOnMediasElements(medias, firstNameOfPhotographer)
        // On ajoute un événement au scroll de window pour afficher un bouton scroll to top
        window.addEventListener('scroll', () => EventScrollToTop.scrollToTop(document.querySelector('.scrollToMainButton')));
        // On ajoute le nom du photographe au titre
        document.title = `Fisheye | ${nameOfPhotographer}`;


    } catch (error) {

        console.error(error)

    }
};
mainPhotographer();