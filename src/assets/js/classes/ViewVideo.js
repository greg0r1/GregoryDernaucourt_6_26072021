import ViewMedias from "./ViewMedias";

export default class ViewVideo {
    constructor({ name, id, firstName, title }) {
        this.id = id
        this.name = name
        this.firstName = firstName
        this.title = title
    }
    toString() {
        return `
        <video id="${this.id}" alt"${this.id}"" class="video media" src="./assets/images/Sample Photos/${this.firstName}/${this.name}"></video>`
    }
}