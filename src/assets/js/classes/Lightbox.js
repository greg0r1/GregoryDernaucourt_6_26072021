import MediaFactory from './MediaFactory';

/**
 * @property {HTMLElement} element
 * @property {string} imageTitle
 * @property {string[]} images
 * @property {string} url Current image displayed
 * @export
 * @class Lightbox
 */
export default class Lightbox {
    constructor(medias, firstNameOfPhotographer) {
        this.medias = medias
        this.path = firstNameOfPhotographer
        this.index = 0
        document.addEventListener('keyup', this.onKeyUp)
        this.current = this.getCurrentMedia()
    }

    open(key) {
        this.index = key
        this.display()
    }

    close() {
        const lightboxElement = document.querySelector('.lightbox-bg');
        lightboxElement.classList.add('fadeout')
        if (lightboxElement) {
            window.setTimeout(() => {
                lightboxElement.remove()
            }, 500)
        }
    }

    next() {
        this.index += 1
        if (this.index === this.medias.length) {
            this.index = 0
        }
        this.display()
    }

    prev() {
        this.index -= 1
        if (this.index === -1) {
            this.index = this.medias.length - 1
        }
        this.display()
    }

    getCurrentMedia() {
        return this.medias[this.index]
    }

    display() {
        const current = this.getCurrentMedia()
        let element = document.querySelector('.lightbox-bg')
        if (!element) {
            element = document.createElement('div')
            element.classList.add('lightbox-bg')
            document.body.appendChild(element)
            // Événements au clavier
            document.body.addEventListener('keyup', (evt) => {
                if (evt.key === 'ArrowRight') {
                    this.next()
                }
            })
            document.body.addEventListener('keyup', (evt) => {
                if (evt.key === 'ArrowLeft') {
                    this.prev()
                }
            })
            document.body.addEventListener('keyup', (evt) => {
                if (evt.key === 'Escape') {
                    this.close()
                }
            })
        }
        element.innerHTML = `
        <div class="lightbox">
            <button class="lightbox__close"></button>
            <button class="lightbox__next"></button>
            <button class="lightbox__prev"></button>
            <div class="lightbox__container">
                <figure>
                    <div class="media">
                    ${new MediaFactory(current, this.path).create().toString()}
                    </div>
                    <figcaption>${current.title}</figcaption>
                </figure>
            </div>
        </div >`

        element.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
        element.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
        element.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))

        //Set height of lightbox
        element.setAttribute('height', window.innerHeight)

    }
}