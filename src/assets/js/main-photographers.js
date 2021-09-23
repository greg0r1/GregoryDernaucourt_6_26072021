// Model
import DataService from './classes/DataService';
import EventService from './classes/EventService';
import EventScrollToTop from './classes/EventScrollToTop';

const data = new DataService;

// View
const displayNavTags = (tags) => {
    document.querySelector('header').innerHTML += `
        <nav class="nav" aria-label="Photographer categories">
            <ul class="tags">
            ${tags.map((tag) => `
                <li class="tag">
                    <a title="Tag: ${tag}" href="index.html?tag=${tag}">#${tag.charAt(0).toUpperCase()}${tag.slice(1)}</a>
                </li>`).join("")}
            </ul>
        </nav>`

}

const displayPhotographers = (photographers = []) => {
    const section = document.getElementById('section');
    section.classList = "photographers";
    // const urlToPathImages = new URL('assets/images/Sample_Photos/Photographers_ID_Photos/', location);
    section.innerHTML = `
    <header aria-label="Section header">
        <h1>Nos photographes</h1>
    </header>
        <div class="container">

        ${photographers.map(({ portrait, name, city, country, tagline, price, tags }) =>
        `<article class="article">
            <a class="link-to-photographer" tabindex="0" aria-label="${name}">
                <div class="article__img">
                    <img src="assets/images/Sample_Photos/Photographers_ID_Photos/${portrait}" alt="Portrait du photographe ${name}">
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
                    <li>
                        <a class="tag" title="${tag}" href="index.html?tag=${tag}" tabindex="0">#${tag}</a>
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
 * @param {*} dataService
 */
function eventOnTags(dataService, tag) {
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
 * Fonction pour gérer l'événement clique de chaque fiche
 * de photographess
 *
 * @param {*} dataService
 */
function eventCickOnPhotographerProfile(dataService) {
    // On ajoute l'événement au "click" à chaque fiche de photographes
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

