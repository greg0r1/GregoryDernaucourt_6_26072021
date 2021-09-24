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
        } else if (window.screenY === 0) {
            element.classList.remove('display')
        }
    }

}