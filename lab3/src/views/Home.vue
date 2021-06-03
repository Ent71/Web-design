<template>
  <div>
      <div class="menu">
          <div class="d-flex">
              <input class="form-control me-2" id = "input-link" type="search" placeholder="Input URL" aria-label="Search" v-model="itemTitle">
              <button class="btn btn-outline-success" id="cut" type="submit" @click="cut">Cut</button>
          </div>
          <div class="d-flex">
              <li class="list-group-item" id = "current-short-link">Input link first</li>
              <button class="btn btn-outline-success"  id="copy"  disabled @click="copy">Copy</button>
              <button class="btn btn-outline-success"  id="save" type="button" disabled @click="save">Save</button>
          </div>
      </div>
      <p>Your links:</p>
      <div class="links">
        <LinksTable :todoItems="$store.state.todoItems.items" @toggleDone="toggleDone"/>    
      </div>
  </div>
</template>
<script>

import LinksTable from '../components/LinksTable.vue'

export default {
  name: 'Home',
  components: {LinksTable},
  data() {
      return {
        itemTitle: ''
      }
  },
  methods: {
    cut() {
      document.getElementById("copy").disabled = false;
      document.getElementById("save").disabled = false;
      if(this.itemTitle != ''){
        var obj = {longLink: this.itemTitle,
                  shortLink: "Undefined" };
        this.itemTitle ='';
        console.log("Cut ok");
       this.$store.dispatch('CUT', obj);
      }
    },
    save(){
      console.log("Save OK");
      this.$store.dispatch('SAVE');
    },
    copy(){
      console.log("Copy OK");
      this.$store.dispatch('COPY');
    },
    toggleDone(itemId) {
      this.$store.dispatch('TOGGLE_DONE', itemId);
    },
    deleteItem(itemId) {
      this.$router.push({name:'Delete', params: {itemId: itemId}});
    }
  }
}
</script>
