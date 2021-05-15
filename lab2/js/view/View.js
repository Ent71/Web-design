import LinkView from './LinkView.js';

export default class View {
    constructor(model) {
        this.model = model;
        this.controllerOnDelItem = null;
        document.querySelector('#links').addEventListener('click', (e) => this.onClick(e));
    }

    setControllerOnDelItem(controllerOnDelItem) {
        this.controllerOnDelItem = controllerOnDelItem;
    }

    onClick(e) {
        if (e.target.className === 'btn btn btn-outline-danger') {
            this.controllerOnDelItem(e.target.dataset.id);
            //return;
        } 
    }

    toHtml() {
        const linksHtml = this.model.links.map( (link) => {
            const linkView = new LinkView(link);
            return linkView.toHtml();
        }).join("");
        return linksHtml;
    }
}