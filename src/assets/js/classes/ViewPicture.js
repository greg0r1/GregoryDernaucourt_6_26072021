
export default class ViewPictures {
    constructor({ name, id, firstName, title, altText }) {
        this.id = id
        this.name = name
        this.firstName = firstName
        this.title = title
        this.altText = altText
    }
    toString() {
        return `
        <img src="./assets/images/Sample_Photos/${this.firstName}/${this.name}" id="${this.id}" alt="${this.altText}: ${this.title}" class="image media" tabindex="0">`
    }
}