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
        <img id="${this.id}" alt="${this.title}" class="image media" src="./assets/images/Sample Photos/${this.firstName}/${this.name}">`
    }
}