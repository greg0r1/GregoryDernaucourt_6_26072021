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
        <video controls id="${this.id}" class="video media">
            <source src="./assets/images/Sample Photos/${this.firstName}/${this.name}" type="video/mp4">
            <p>Votre navigateur ne supporte pas la vidéo HTML5. Voici à la place <a href="./assets/images/Sample Photos/${this.firstName}/${this.name}">le lien vers la vidéo</a>.</p>
        </video>`
    }
}