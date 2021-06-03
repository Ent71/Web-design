import Item from './Item.js';

export default class LinksList {
    constructor() {
        this.currentLink;
        this.items = [];
        this.links = [];
        const item1 = new Item("https://music.youtube.com/watch?v=UEI3448lzQQ&list=RDTMAK5uy_kset8DisdE7LSD4TNjEVvrKRTmG7a56sY", "https://cutt.ly/nbHdaH6");
        const item2 = new Item("https://classroom.google.com/u/0/c/MjYzMjI5NjU5Mjk0", "https://cutt.ly/jbHdloW");
        this.links.push(item1);
        this.links.push(item2);
    }

    _getItemIndex(itemId) {
        console.log(itemId);
        return this.items.findIndex( (item) => item.id == itemId); 
    }

    addItem(obj) {
        this.currentLink = obj;
        const link1 = this.links.find((item) => item.longLink === obj.longLink);
        if(typeof link1 !== 'undefined')
        {
            this.currentLink.shortLink = link1.shortLink;
            document.getElementById("current-short-link").innerHTML = `<a href=${link1.shortLink}}>${link1.shortLink}</a></p>`;
            console.log("addItem Ok");
        }
        else
        {
            console.log("Undefined");
            document.getElementById("current-short-link").innerHTML = `<a href=${obj.shortLink}}>${obj.shortLink}</a></p>`;
        }
        
    }
    save(){
        const item = new Item(this.currentLink.longLink,this.currentLink.shortLink);
        this.items.push(item);
    }
    copy(){
        navigator.clipboard.writeText(this.currentLink.shortLink);
    }
    deleteItem(itemId) {
        this.items.splice(this._getItemIndex(itemId), 1);
    }
    getTitle(itemId) {
        const itemIndex = this._getItemIndex(itemId);
        return this.items[itemIndex].title;
    }

    toggleDone(itemIdList) {
        this.items.map( (item) => {
            if (itemIdList.indexOf(item.id) > -1) item.toggleDone();
         }); 
    }
}