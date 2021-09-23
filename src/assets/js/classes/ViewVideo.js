/**
 *
 *
 * @export
 * @class ViewVideo
 */
export default class ViewVideo {
    constructor({ name, id, firstName, title }) {
        this.id = id
        this.name = name
        this.firstName = firstName
        this.title = title
    }
    toString() {
        return `
        <video tabindex="0" controls id="${this.id}" class="video media" alt="${this.title}">
            <source src="./assets/images/Sample_Photos/${this.firstName}/${this.name}" type="video/mp4">
            <p>Votre navigateur ne supporte pas la vidéo HTML5. Voici à la place <a href="./assets/images/Sample_Photos/${this.firstName}/${this.name}">le lien vers la vidéo</a>.</p>
        </video>`
    }
}