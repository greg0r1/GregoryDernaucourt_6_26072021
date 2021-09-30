import MediaFactory from "./MediaFactory";

export default class ViewMedias {
    constructor(medias, firstNameOfPhotographer) {
        this.medias = medias;
        this.firstNameOfPhotographer = firstNameOfPhotographer
    }

    render() {
        const element = document.createElement("div");
        element.classList.add('container')
        element.innerHTML = this.toString();
        return element;
    }

    toString() {
        return `
            ${this.medias.map(({ image, video, title, likes, id, alt_text }) => `
            <figure class="content-media">
                <div class="content-media__media">
                ${new MediaFactory({ image, video, id, title, alt_text }, this.firstNameOfPhotographer).create().toString()}
                </div>
                <figcaption class="content-media__figcaption">
                    <span>${title}</span>
                    <span class="content-media__likesNumber">${likes} </span><span class="fas fa-heart"></span>
                </figcaption>
            </figure>
        `).join("")}
    `
    }
}
