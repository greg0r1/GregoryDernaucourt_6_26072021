export default class Lightbox {
    constructor(element, medias, firstNameOfPhotographer) {
        this.element = element;
        this.medias = medias;
        this.firstNameOfPhotographer = firstNameOfPhotographer;
        this.media = medias.find((obj) => {
            return obj.id === Number(this.element.getAttribute("id"))
        });
        this.getIdCurrentImage = this.getIdCurrentImage.bind(this)
    }

    getIdCurrentImage() {
        return Number(this.element.getAttribute("id"))
    }

    static nextImage(getMedias, firstNameOfPhotographer, indexOfElementImage) {

        // const indexOfNewCurrentElementInArray = () => medias.findIndex((element) => element.id === Number(currentElement.getAttribute("id")));
        // (indexOfCurrentElementInArray === medias.length - 1) ? indexOfCurrentElementInArray = - 1 : indexOfCurrentElementInArray;
        // let nextImage = medias[indexOfNewCurrentElementInArray() + 1].image;
        // let nextTitle = medias[indexOfNewCurrentElementInArray() + 1].title;
        // let nextId = medias[indexOfNewCurrentElementInArray() + 1].id;

        // console.log(nextImage);
        // document.querySelector('.lightbox .img').setAttribute('src', `./public/images/Sample Photos/${firstNameOfPhotographer}/${nextImage}`);
        // document.querySelector('.lightbox .img').setAttribute('id', nextId);
        // document.querySelector('.lightbox figcaption').textContent = nextTitle;



        (indexOfElementImage === getMedias.length - 1) ? indexOfElementImage = - 1 : indexOfElementImage;
        let nextImage = getMedias[indexOfElementImage + 1].image;
        let nextTitle = getMedias[indexOfElementImage + 1].title;
        let nextId = getMedias[indexOfElementImage + 1].id;

        document.querySelector('.lightbox img').setAttribute('src', `./public/images/Sample Photos/${firstNameOfPhotographer}/${nextImage}`);
        document.querySelector('.lightbox img').setAttribute('id', nextId);
        document.querySelector('.lightbox figcaption').textContent = nextTitle;
    }

    static prevImage() {
        (this.getIndexOfCurrentElementInArray() === 0) ? this.getIndexOfCurrentElementInArray() = this.medias.length : this.getIndexOfCurrentElementInArray();

        let nextImage = this.medias[this.getIndexOfCurrentElementInArray() + 1].image;
        let nextTitle = this.medias[this.getIndexOfCurrentElementInArray() + 1].title;
        let nextId = this.medias[this.getIndexOfCurrentElementInArray() + 1].id;

        this.element.setAttribute('src', `./public/images/Sample Photos/${this.firstNameOfPhotographer}/${nextImage}`);
        this.element.setAttribute('id', nextId);
        document.querySelector('.lightbox figcaption').textContent = nextTitle;
    }

    render() {
        const element = document.createElement("div");
        element.classList.add('lightbox-bg')
        element.innerHTML = this.toString();
        return element;
    }

    toString() {
        return `
        <div class="lightbox">
        <button class="close"></button>
        <button class="lightbox__next"></button>
        <button class="lightbox__prev"></button>
        <div class="lightbox__container">
            <figure>
                <div class="img">
                    <img id="${this.media.id}" src="./assets/images/Sample Photos/${this.firstNameOfPhotographer}/${this.media.image}" alt="">
                </div>
                <figcaption>${this.media.title}</figcaption>
            </figure>
        </div>
    </div>`
    }
}