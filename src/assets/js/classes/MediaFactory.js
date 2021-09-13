import ViewVideo from "./ViewVideo";
import ViewPicture from "./ViewPicture";

export default class MediaFactory {
    constructor(media, firstName) {
        this.media = media;
        this.firstName = firstName
    }

    create() {

        if (this.media.video) {
            return new ViewVideo({ name: this.media.video, id: this.media.id, firstName: this.firstName, title: this.media.title })
        } else {
            return new ViewPicture({ name: this.media.image, id: this.media.id, firstName: this.firstName, title: this.media.title })
        }

    }
}