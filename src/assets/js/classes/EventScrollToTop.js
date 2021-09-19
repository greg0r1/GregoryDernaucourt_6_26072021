/**
 *
 *
 * @export
 * @class EventScrollToTop
 */
export default class EventScrollToTop {

    static scrollToTop(element) {
        if (window.scrollY) {
            element.classList.add('display')
            // element.addEventListener('click', () => window.scrollTo(0, 0))
        } else if (window.screenY === 0) {
            element.classList.remove('display')
        }
    }

}