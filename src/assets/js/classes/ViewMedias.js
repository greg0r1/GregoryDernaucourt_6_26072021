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
            ${this.medias.map(({ image, video, title, likes, id }) => `
            <figure class="content-media">
                <div class="content-media__media">
                    ${new MediaFactory({ image, video, id, title }, this.firstNameOfPhotographer).create().toString()}
                </div>
                <figcaption class="content-media__figcaption">
                    <span class="content-media__title">${title}</span>
                    <span>${likes} </span><span class="fas fa-heart"></span>
                </figcaption>
            </figure>
        `).join("")}
    `
    }
}
