// Model
import DataService from './classes/DataService';
import EventService from './classes/EventService';
import ViewMedias from './classes/ViewMedias';
import Lightbox from './classes/Lightbox';
import EventScrollToTop from './classes/EventScrollToTop'
import ModalForm from './classes/ModalForm'

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
                        <a title="${tag}" href="javascript:void(0);" tabindex="0">#${tag.charAt(0).toUpperCase()}${tag.slice(1)}</a>
                    </li>
                `).join("")}
                </ul>
            </div>
            <div class="info">
                <div class="likes" arial-label="likes">
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
        <div class="img">
            <img src="./assets/images/Sample_Photos/Photographers_ID_Photos/${photographer.portrait}" alt="${photographer.name}"">
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
                <div role="option">
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


// Scripts

/**
 * Add click event on each Tag
 *
 */
function eventOnTags() {
    // On ajoute l'événement "click" à chaque élément "tag"
    EventService.handleTagClick((element) => {
        const nameAttributeOfTag = element.getAttribute('title');
        const url = new URL(`index.html?tag=${nameAttributeOfTag}`, window.location.href);
        element.setAttribute('href', url.href)
    });
}

/**
 * Filters for dropdown button
 *
 * @param {object} element
 * @param {object} dataService
 * @param {number} idFromUrlParams
 * @param {string} firstNameOfPhotographer
 * @param {object} medias
 */
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

/**
 * Add an event on each media for the lightbox
 *
 * @param {array} medias
 * @param {string} firstNameOfPhotographer
 */
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

function eventClickLikes(element) {
    let value = Number(document.querySelector('.info .likes span:first-child').innerText);
    document.querySelector('.info .likes span:first-child').innerText = value + 1;

    let valuePreviousSiblingElt = Number(element.previousSibling.innerText);
    element.previousSibling.innerText = valuePreviousSiblingElt + 1
}


// Controller

const mainPhotographer = async () => {
    try {
        const dataService = new DataService();
        dataService.loadPhotographers();// Récupération des photographes
        dataService.loadMedias();// Récupération de l'ensemble des médias des photographes

        // On display le photographe avec ses infos grâce à son id récupéré dans l'url
        const paramsFromUrl = new URLSearchParams(document.location.search.substring(1));
        const idFromUrlParams = Number(paramsFromUrl.get("id"));
        const nameOfPhotographer = dataService.getPhotographerById(idFromUrlParams).name;
        const firstNameOfPhotographer = nameOfPhotographer.slice(0, nameOfPhotographer.indexOf(' '));
        const medias = dataService.getMediasByPhotographerId(idFromUrlParams);
        const totalLikes = dataService.getTotalOfLikes(idFromUrlParams);
        displayPhotographerInfos(dataService.getPhotographerById(idFromUrlParams), totalLikes);

        // On ajoute les events sur les tags (renvoient sur la page index avec le résultat)
        eventOnTags();

        // Event sur bouton contact
        document.querySelector('.photographerHeader .button').addEventListener('click', () => new ModalForm(nameOfPhotographer));

        //On affiche le bouton de filtre, avec l'event toggle
        displayFilterButton();
        const chevronElement = document.querySelector(".dropdown-toggle .fas");
        EventService.toggleDropdownButton(chevronElement);
        EventService.handleMediasFilter((element) => filterMediasOnDropdownButton(element, dataService, idFromUrlParams, firstNameOfPhotographer, medias));// Gestionnaire de filtres des médias

        //On affiche les médias du photographes
        document.querySelector(".medias").appendChild(new ViewMedias(medias, firstNameOfPhotographer).render());

        //Events sur chaque image pour afficher la lightbox
        eventOpenLightboxOnMediasElements(medias, firstNameOfPhotographer);

        // Event sur likes
        EventService.handleLikesClick(element => eventClickLikes(element));

        // On ajoute un événement au scroll de Window pour afficher un bouton scroll to top
        window.addEventListener('scroll', () => EventScrollToTop.scrollToTop(document.querySelector('.scrollToMainButton')));

        // On ajoute le nom du photographe au titre
        document.title = `Fisheye | ${nameOfPhotographer}`;

    } catch (error) {

        console.error(error)

    }
};
mainPhotographer();