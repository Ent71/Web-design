export default class LinkView {
    constructor(link) {
        this.link = link;
    }

    toHtml() {
        //const checked = (this.itemModel.done) ? "checked" : "";
        //const color = (this.itemModel.done) ? "grey" : "black";
        return `
        <div class="link-delete">
                    <div class="link-pair">
                            <p>Long link:  <a href=${this.link.longLink}>${this.link.longLink}</a></p>
                            <p>Short link:  <a href=${this.link.shortLink}>${this.link.shortLink}</a></p>
                    </div>
                    <button class="btn btn btn-outline-danger" type="del-button">Delete</button>
        </div>`;
    }
}