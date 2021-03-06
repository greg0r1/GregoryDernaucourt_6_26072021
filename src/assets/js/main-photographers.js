// Model
import DataService from './classes/DataService';
import EventService from './classes/EventService';
import EventScrollToTop from './classes/EventScrollToTop';
const svg = new URL('./../images/loader.svg', import.meta.url);

const data = new DataService;


// View
const displayNavTags = (tags) => {
    document.querySelector('header').innerHTML += `
        <nav class="nav" aria-label="Photographer categories">
            <ul class="tags">
            ${tags.map((tag) => `
                <li class="tag">
                    <a title="${tag}" href="javascript:void(0);" tabindex="0">#${tag.charAt(0).toUpperCase()}${tag.slice(1)}</a>
                </li>`).join("")}
            </ul>
        </nav>`

}

const displayPhotographers = (photographers = []) => {
    const section = document.querySelector('section');
    section.classList = "photographers";
    section.innerHTML = `
    <header aria-label="Section header">
        <h1>Nos photographes</h1>
    </header>
        <div class="container">

        ${photographers.map(({ id, portrait, name, city, country, tagline, price, tags }) =>
        loader(id, portrait, name) ||
        `<article class="article">
            <a class="link-to-photographer" tabindex="0" aria-label="${name}">
                <div class="article__img">
                    <img id="${id}" src="${svg}" style="
                    width: 50px;
                    height: 50px;
                " alt="">
                    </div>
                <h2 class="article__title title">${name}</h2>
            </a>
            <div class="details">
                <p class="localisation">${city}, ${country}</p>
                <p class="description">${tagline}</p>
                <p class="price">${price}€/jour</p>
            </div>
            <div class="tags">
                <ul>
                ${tags.map((tag) => `
                    <li class="tag">
                        <a title="${tag}" href="javascript:void(0);" tabindex="0">#${tag}</a>
                    </li>`).join("")}
                </ul>
            </div>
        </article>
        `
    ).join("")
        }
        </div>
        `
}


// Scripts

/**
 * Fonction pour gérer l'événement des tags
 *
 * @param {object} dataService
 */
function eventOnTags(dataService) {
    // On ajoute l'événement "click" à l'élément "tag"
    EventService.handleTagClick((element) => {
        const nameAttributeOfTag = element.getAttribute('title');
        const photographersByTags = dataService.getPhotographersByTags(nameAttributeOfTag);
        displayPhotographers(photographersByTags);
        eventOnTags(dataService);
        // eventOnTags(dataService);
        eventCickOnPhotographerProfile(dataService);
        // On ajoute le tag au titre
        document.title = `Fisheye | ${nameAttributeOfTag.charAt(0).toUpperCase()}${nameAttributeOfTag.slice(1)}`;
    });
}

/**
 * Waiting loaded image
 *
 * @param {number} id
 * @param {string} portrait
 * @param {string} name
 */
function loader(id, portrait, name) {
    const img = new Image();
    img.onload = () => {
        document.getElementById(id).src = img.src;
        document.getElementById(id).alt = 'Portrait du photographe ' + name;
        document.getElementById(id).removeAttribute('style')
    };
    img.src = 'assets/images/Sample_Photos/Photographers_ID_Photos/' + portrait;
}

/**
 * Add the event to the "click" to each photographers file
 *
 * @param {object} dataService
 */
function eventCickOnPhotographerProfile(dataService) {
    EventService.handlePhotographerSelection((element) => {
        const nameOfPhotographer = element.textContent.trim();
        const firstNameOfPhotographer = nameOfPhotographer.slice(0, nameOfPhotographer.indexOf(' '));
        const id = dataService.getPhotographerByName(nameOfPhotographer).id;
        const url = new URL(`photographer.html?id=${id.toString()}&firstName=${firstNameOfPhotographer}`, location);
        element.setAttribute('href', url);
    });
}


// Controller

const mainPhotographers = async () => {

    try {
        const dataService = new DataService();
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
        window.addEventListener('scroll', () => EventScrollToTop.scrollToTop(document.querySelector('.scrollToMainButton')));
        // On ajoute l'événement "click" à l'élément "tag"
        eventOnTags(dataService);
        // On ajoute l'événement "click" à chaque fiche de photographes
        eventCickOnPhotographerProfile(dataService);


    } catch (error) {

        console.error(error)

    }

};
export default mainPhotographers();

