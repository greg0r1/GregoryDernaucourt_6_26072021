/**
 *
 *
 * @export
 * @class ViewVideo
 */
export default class ViewVideo {
    constructor({ name, id, firstName, title, altText }) {
        this.id = id
        this.name = name
        this.firstName = firstName
        this.title = title
        this.altText = altText
    }
    toString() {
        return `
        <video tabindex="0" id="${this.id}" class="video media" alt="${this.altText}: ${this.title}" preload="metadata">
            <source src="./assets/images/Sample_Photos/${this.firstName}/${this.name}#t=0.1" type="video/mp4">
            <p>Votre navigateur ne supporte pas la vidéo HTML5. Voici à la place <a href="./assets/images/Sample_Photos/${this.firstName}/${this.name}">le lien vers la vidéo</a>.</p>
        </video>`
    }
}