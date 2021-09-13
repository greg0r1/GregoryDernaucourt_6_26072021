import { enableBodyScroll, disableBodyScroll } from '../body-scroll-lock'

/**
 * @property {HTMLElement} element
 * @property {string} imageTitle
 * @property {string[]} images
 * @property {string} url Current image displayed
 * @export
 * @class Lightbox
 */
export default class Lightbox {
    static init(medias, firstNameOfPhotographer) {
        const mediasElements = Array.from(document.querySelectorAll('.video.media, .image.media'))

        mediasElements.forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute('src'), e.currentTarget.getAttribute('alt'), e.currentTarget.getAttribute('id'), medias, firstNameOfPhotographer)
        }
        ))
    }

    /**
     *Creates an instance of Lightbox.
     * @param {string} url Image url
     * @param {string} title Image title
     * @param {string[]} imagesPaths Image paths
     * @memberof Lightbox
     */
    constructor(url, title, id, medias, firstNameOfPhotographer) {
        this.element = this.buildDOM(url, title, id)
        this.medias = medias
        this.url = url
        this.title = title
        this.id = id
        this.firstNameOfPhotographer = firstNameOfPhotographer
        this.loadImage(url, title)
        this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
        disableBodyScroll(this.element)
        document.addEventListener('keyup', this.onKeyUp)
    }

    /**
     * Close the lighbox
     * @param {MouseEvent|KeyboardEvent} e
     * @memberof Lightbox
     */
    close(e) {
        e.preventDefault()
        this.element.classList.add('fadeout')
        enableBodyScroll(this.element)
        window.setTimeout(() => {
            this.element.parentElement.removeChild(this.element)
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp)
    }

    /**
     * 
     * @param {MouseEvent|KeyboardEvent} e
     * @memberof Lightbox
     */
    next(e) {
        e.preventDefault()
        const getIdCurrentImage = () => Number(document.querySelector('.lightbox .media').getAttribute("id"));
        const indexOfCurrentElementInArray = () => this.medias.findIndex((element) => element.id === getIdCurrentImage());
        (indexOfCurrentElementInArray() === this.medias.length - 1) ? indexOfCurrentElementInArray = - 1 : indexOfCurrentElementInArray();
        console.log(indexOfCurrentElementInArray())
        this.url = this.medias[indexOfCurrentElementInArray() + 1].image;
        this.title = this.medias[indexOfCurrentElementInArray() + 1].title;
        this.id = this.medias[indexOfCurrentElementInArray() + 1].id;

        this.loadImage(this.medias[indexOfCurrentElementInArray() + 1].image)
    }



    /**
     * 
     * @param {MouseEvent|KeyboardEvent} e
     * @memberof Lightbox
     */
    prev(e) {
        e.preventDefault()
        let i = this.images.findIndex(image => image === this.url)
        if (i === 0) {
            i = this.images.length
        }
        this.loadImage(this.images[i - 1])
    }

    loadImage(url, title) {
        console.log(url)
        const container = this.element.querySelector('.lightbox-bg .media img')
        container.setAttribute('src', url)
        this.url = url
        this.element.querySelector('figcaption').innerText = title
    }

    /**
     * @param {KeyboardEvent} e
     * @memberof Lightbox
     */
    onKeyUp(e) {
        if (e.key === 'Escape') {
            this.close(e)
        } else if (e.key === 'ArrowLeft') {
            this.prev(e)
        } else if (e.key === 'ArrowRight') {
            this.next(e)
        }
    }

    /**
     * @param {*} url
     * @memberof Lightbox
     */
    buildDOM(url, title, id) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox-bg')
        dom.innerHTML = `
        <div class="lightbox">
            <button class="lightbox__close"></button>
            <button class="lightbox__next"></button>
            <button class="lightbox__prev"></button>
            <div class="lightbox__container">
                <figure>
                    <div class="media">
                        <img id="${id}" src="${url}" alt="${title}">
                    </div>
                    <figcaption>${title}</figcaption>
                </figure>
            </div>
        </div>
        `
        dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
        dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
        dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
        return dom
    }
}