/**
 * Handle events
 *
 * @export
 * @class EventService
 */
export default class EventService {

    constructor() {
    }

    static handleTagClick(call) {
        const array = Array.from(document.getElementsByClassName("tag")).forEach((element) => {
            element.addEventListener("click", () => call(element));
        });
    }

    static handlePhotographerSelection(call) {
        const array = Array.from(document.getElementsByClassName("link-to-photographer")).forEach((element) => {
            call(element)
        });
    }

    static toggleDropdownButton(element) {
        element.addEventListener("click", () => {
            let dropdownElement = document.querySelector(".dropdown");
            let chevronElement = document.querySelector(".fa-chevron-down");
            dropdownElement.classList.toggle("show");
            chevronElement.classList.toggle("fa-chevron-up");
        });
        document.getElementById('dropdownMenuLink').addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                let dropdownElement = document.querySelector(".dropdown");
                let chevronElement = document.querySelector(".fa-chevron-down");
                dropdownElement.classList.toggle("show");
                chevronElement.classList.toggle("fa-chevron-up");
            }
        })
    }

    static handleMediasFilter(call) {
        const array = Array.from(document.querySelectorAll(".filter a, .dropdown-item")).forEach((element) => {
            element.addEventListener("click", () => call(element));
        });
    }

    static closeModal(selector, elementToRemove) {
        selector.addEventListener("click", () => elementToRemove.remove())
        elementToRemove.addEventListener("keyup", (e) => {
            if (e.key === 'Escape') {
                elementToRemove.remove()
            }
        })
    }

    static handleImagesClick(call) {
        const array = Array.from(document.querySelectorAll(".medias .image")).forEach((element) => {
            element.addEventListener("click", () => call(element))
        });
    }

    static handleInputsFormClick(call) {
        const array = Array.from(document.getElementsByTagName("input")).forEach((element) => {
            element.addEventListener("input", () => call(element));
        });
    }

}
