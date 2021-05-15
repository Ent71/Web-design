export default class Link {
    constructor(longLink, shortLink) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.longLink = longLink;
        this.shortLink = shortLink;

        this.onChangeCallback = null;
        return this.initOnModelChange();
    }

    setOnChangeCallback() {
        this.onChangeCallback = onChangeCallback;
    }

    initOnModelChange() {
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                if (this.onChangeCallback) this.onChangeCallback(this);
                return true;
            }
        }
        return new Proxy(this, handler);
    }
}