import EventService from './EventService';

export default class ModalForm {
    /**
     * Creates an instance of ModalForm.
     * @param {string} nameOfPhotographer
     * @memberof ModalForm
     */
    constructor(nameOfPhotographer) {
        this.nameOfPhotographer = nameOfPhotographer
        this.init(this.nameOfPhotographer)
    }

    /**
     * Modal display
     *
     * @param {String} nameOfPhotographer
     * @memberof ModalForm
     */
    init(nameOfPhotographer) {
        (document.querySelector('.bground')) ? EventService.closeModal() : this.display(nameOfPhotographer);
        // Events de vérification sur les champs des formulaires
        EventService.handleInputsFormClick((e) => this.checkField(e));
        //On rend les éléments en arrière-plan inaccessible pour les lecteurs d'écran
        document.getElementById('section').setAttribute('aria-hidden', 'true')
        EventService.closeModal(document.querySelector('.bground .close'), document.querySelector('.bground'));
    }

    /**
     * Check form fields
     *
     * @param {HTMLElement} element
     * @memberof ModalForm
     */
    checkField(element) {
        const regExName = "[a-zA-Z-s\u00C0-\u024F\u1E00-\u1EFF]{3,}$"; // Regex qui vérifie si le champ a plus de 3 caractères, les accents, et espaces des noms composés

        if (element.id === "first") {
            element.pattern = regExName;
            if (!element.validity.valid) {
                element.setAttribute("style", "border:2px solid red; outline:none");
                document.querySelector('.formData.first span').classList.add('error');
                document.querySelector('.formData.first .error').textContent = 'Veuillez saisir un nom valide.'

            } else {
                element.removeAttribute("style");
                document.querySelector('.formData.first span').textContent = ''
                document.querySelector('.formData.first span').classList.remove('error');
            }
        }
        if (element.id === "last") {
            element.pattern = regExName;
            if (!element.validity.valid) {
                element.setAttribute("style", "border:2px solid red; outline:none");
                document.querySelector('.formData.last span').classList.add('error');
                document.querySelector('.formData.last .error').textContent = 'Veuillez saisir un nom valide.'
            } else {
                element.removeAttribute("style");
                document.querySelector('.formData.last span').textContent = ''
                document.querySelector('.formData.last span').classList.remove('error');
            }
        }
        if (element.id === "email") {
            element.pattern = "[a-z0-9-_]+[a-z0-9.-_]*@[a-z0-9-_]{2,}.[a-z.-_]+[a-z-_]+"; // Regex qui vérifie si le champ a un email valide
            if (!element.validity.valid) {
                element.setAttribute("style", "border:2px solid red; outline:none");
                document.querySelector('.formData.email span').classList.add('error');
                document.querySelector('.formData.email .error').textContent = 'Veuillez saisir un email valide.'
            } else {
                element.removeAttribute("style");
                document.querySelector('.formData.email span').textContent = ''
                document.querySelector('.formData.email span').classList.remove('error');
            }
        }
    }

    /**
     * Get fields values to display into console
     * 
     * @param {Event} e
     * @memberof ModalForm
     */
    submit(e) {
        e.preventDefault();
        for (let i = 0; i < document.forms[0].length - 1; i++) {
            if (!document.forms[0][i].checkValidity() || document.forms[0][i].value === '') {
                e.preventDefault()
                console.clear()
                let id = document.forms[0][i].getAttribute('id')
                let nameId = document.querySelector(`.formData.${id} label`).getInnerHTML()
                alert('Veuillez saisir un ' + nameId)
            } else {
                console.info(document.forms[0][i].value)
                if (i === document.forms[0].length - 2) {
                    document.querySelector('.modal-body').innerHTML = '<p style="color:#FFF; text-align:center">Merci,</br>votre formulaire a bien été enregistré !';
                    document.body.addEventListener('keyup', (evt) => {
                        if (evt.key === 'Escape') {
                            document.querySelector('.bground').remove()
                        }
                    });
                    break
                }
            }
        };
    }

    /**
     * DOM render
     *
     * @param {String} nameOfPhotographer
     * @memberof ModalForm
     */
    display(nameOfPhotographer) {
        const div = document.createElement('div');
        div.className = 'bground';

        div.innerHTML = `
          <div role="dialog" class="modalContent"
          aria-labelledby="dialogTitle"
          aria-modal="true">
            <span role="button" aria-label="Close Contact form" class="close" tabindex="0"></span>
            <div class="modal-body">
                <h1 id="dialogTitle" aria-label="Contact me ${nameOfPhotographer}" >Contactez-moi</br>
                ${nameOfPhotographer}</h1>
              <form id="contact" action="" method="get">
                <div class="formData first">
                  <label aria-label="First name" for="first">Prénom</label>
                  <input class="text-control" type="text" id="first" name="first" aria-labelledby="first"/>
                  <span></span>
                </div>
                <div class="formData last">
                  <label aria-label="Last name" for="last">Nom</label>
                  <input class="text-control" type="text" id="last" name="last" aria-labelledby="last"/>
                  <span></span>
                </div>
                <div class="formData email">
                  <label aria-label="email" for="email">E-mail</label>
                  <input class="text-control" type="email" id="email" name="email" aria-labelledby="email"/>
                  <span></span>
                </div>
                <div class="formData message">
                  <label aria-label="Your message" for="message">Votre message</label>
                  <textarea class="text-control" type="text" id="message" name="message" aria-labelledby="message"></textarea>
                  <span></span>
                </div>
                <div class="submit">
                    <input class="btn-submit button" type="submit" value="Envoyer" aria-label="Send"/>
                </div>
              </form>
            </div>
        </div>`;
        document.getElementById('main').appendChild(div);
        document.querySelector('form#contact input[type=submit]').addEventListener('click', (e) => this.submit(e));
        document.getElementById('first').focus();
    }
}