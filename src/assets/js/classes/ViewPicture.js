import ViewMedias from "./ViewMedias";

export default class ViewPictures {
    constructor({ name, id, firstName, title }) {
        this.id = id
        this.name = name
        this.firstName = firstName
        this.title = title
    }
    toString() {
        return `
        <img tabindex="0" id="${this.id}" alt="image du photographe ${this.firstName}, intitulée: ${this.title}" class="image media" src="./assets/images/Sample_Photos/${this.firstName}/${this.name}">`
    }
}