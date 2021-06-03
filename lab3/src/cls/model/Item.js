export default class Item {
    constructor(longLink,shortLink) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.longLink = longLink;
        this.shortLink = shortLink;
        this.done = false;
    }

    toggleDone() { 
        this.done = !this.done; 
    }
}