import Link from "../model/Link.js";

export default class Controller 
{
    constructor(model, view)
    {
        this.model = model;
        this.view = view;
        this.view.setControllerOnDelItem(this.delLink);
        this.model.setOnChangeCallback((e) => this.onChangeCallback(e));
        document.querySelector('#cut').addEventListener('click', (e)=>this.cutLink(e));
        document.querySelector('#copy').addEventListener('click', (e)=>this.copyLink(e));
        document.querySelector('#save').addEventListener('click', (e)=>this.saveLink(e));
    }

    onChangeCallback() {
        document.querySelector('#links').innerHTML = this.view.toHtml();
    }

    cutLink(e)
    {
        document.getElementById("copy").disabled = false;
        document.getElementById("save").disabled = false;
        let link = new Link(document.getElementById("input-link").value, "*ShortLink*");
        this.model.cut(link);
    }

    copyLink(e)
    {
        if(!document.getElementById("copy").disabled)
        {
            this.model.copy();
        }   
    }

    saveLink(e)
    {
        if(!document.getElementById("save").disabled)
        {
            this.model.save();
        }   
    }

    addLink(longLink, shortLink)
    {
        let link = new Link(longLink, shortLink);
        this.model.add(link);
        //this.model.save();
    }

    delLink(id)
    {
        this.model.delete(id);
    }

    initOnModelChange() {
        /* updates UI when a model list has changed (adds, deletes items) */
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                document.querySelector('#links').innerHTML = this.view.toHtml();
                return true;
            }
        }
        this.model.links = new Proxy(this.model.links, handler);
    }
}