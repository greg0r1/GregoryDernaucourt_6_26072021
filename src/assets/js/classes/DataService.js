import data_copy from '../../json/photographs-DB-copy.json'

/**
 * Handle data
 *
 * @export
 * @class DataService
 */
export default class DataService {

    /**
     * Creates an instance of DataService.
     * @memberof DataService
     */
    constructor() {

        this.photographers = [];
        this.medias = []
        this.totalLikesByPhotographer;

    }

    /**
     * 
     *
     * @memberof DataService
     */
    loadPhotographers() {

        const dataResponse = data_copy;
        this.photographers = dataResponse.photographers;

    }

    /**
     *
     *
     * @memberof DataService
     */
    loadMedias() {

        const dataResponse = data_copy;
        this.medias = dataResponse.media;

    }

    /**
     *
     *
     * @param {string} [tag=""]
     * @returns
     * @memberof DataService
     */
    getPhotographersByTags(tag = "") {
        if (!tag) return this.photographers;
        return this.photographers.filter(({ tags }) => tags.includes(tag));
    }

    /**
     *
     *
     * @param {*} namePhotographer
     * @returns
     * @memberof DataService
     */
    getPhotographerByName(namePhotographer) {
        return this.photographers.find(obj => {
            return obj.name === namePhotographer
        });
    }

    /**
     *
     *
     * @param {*} idPhotographer
     * @returns
     * @memberof DataService
     */
    getPhotographerById(idPhotographer) {
        return this.photographers.find(obj => {
            return obj.id === idPhotographer
        });
    }

    /**
     *
     *
     * @param {*} idPhotographer
     * @returns
     * @memberof DataService
     */
    getTotalOfLikes(idPhotographer) {
        const photographerMedias = this.medias.filter(obj => obj.photographerId === idPhotographer);
        var arrayOfLikes = [];
        for (const element of photographerMedias) {
            arrayOfLikes.push(element.likes)
        }
        return arrayOfLikes.reduce((accumulator, currentValue) => accumulator + currentValue)
    }

    /**
     *
     *
     * @param {*} idPhotographer
     * @returns
     * @memberof DataService
     */
    getMediasByPhotographerId(idPhotographer) {
        return this.medias.filter(obj => obj.photographerId === idPhotographer);
    }

    /**
     *
     *
     * @param {*} idPhotographer
     * @returns
     * @memberof DataService
     */
    getMediasPhotographerByPopularity(idPhotographer) {
        const photographerMedias = this.medias.filter(obj => obj.photographerId === idPhotographer);
        return photographerMedias.sort((a, b) => {
            return a.likes - b.likes
        });
    }

    /**
     *
     *
     * @param {*} idPhotographer
     * @returns
     * @memberof DataService
     */
    getMediasPhotographerByDate(idPhotographer) {
        const photographerMedias = this.medias.filter(obj => obj.photographerId === idPhotographer);
        return photographerMedias.sort((a, b) => {
            let date1 = new Date(a.date);
            let date2 = new Date(b.date);
            date1.getTime() - date2.getTime()
        });
    }

    /**
     *
     *
     * @param {*} idPhotographer
     * @returns
     * @memberof DataService
     */
    getMediasPhotographerByTitle(idPhotographer) {
        const photographerMedias = this.medias.filter(obj => obj.photographerId === idPhotographer);
        return photographerMedias.sort((a, b) => a.title.localeCompare(b.title));
    }

    /**
     *
     *
     * @returns
     * @memberof DataService
     */
    getTags() {
        const allTags = this.photographers.reduce(
            (allTags, { tags }) => [...allTags, ...tags], []);
        return Array.from(new Set(allTags))
    }

}