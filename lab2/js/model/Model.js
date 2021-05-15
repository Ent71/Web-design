// Пример отправки POST запроса:


export default class Model 
{
    constructor() 
    {
        this.currentLink = null;
        this.onChangeCallback = null;
        this.links = [];
    }

    add(link)
    {
        this.currentLink = link;
        this.links.push(this.currentLink);
        this.currentLink.onChangeCallback = this.onChangeCallback;
    }

    cut(link)
    {
        this.currentLink = link;
        const link1 = this.links.find((item) => item.longLink === link.longLink);
        if(typeof link1 !== 'undefined')
        {
            document.getElementById("save").disabled = true;
            this.currentLink = link1;
            document.getElementById("current-short-link").innerHTML = `<a href=${link1.shortLink}}>${link1.shortLink}</a></p>`;
        }
        else
        {
            console.log(1);
            //document.getElementById("current-short-link") = link.shortLink;
            document.getElementById("current-short-link").innerHTML = `<a href=${link.shortLink}}>${link.shortLink}</a></p>`;
        }
        this.currentLink.onChangeCallback = this.onChangeCallback;
    }

    copy()
    {
        this.currentLink.onChangeCallback = this.onChangeCallback;
        navigator.clipboard.writeText(this.currentLink.shortLink);
       
    }

    save()
    {
        document.getElementById("save").disabled = true;
        this.links.push(this.currentLink);
        this.currentLink.onChangeCallback = this.onChangeCallback;
    }

    delete(id)
    {
        //this.currentLink.onChangeCallback = this.onChangeCallback;

        const linkIndex = this.links.findIndex( (item) => item.id === id); 
        this.links.splice(linkIndex, 1);
        this.currentLink.onChangeCallback = this.onChangeCallback;
        //this.links = null;
        //this.links.re
    }

    setOnChangeCallback(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }
}