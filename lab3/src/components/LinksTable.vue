<template>
  <div>
      <div v-for="todoItem in todoItems" :key="todoItem.id">
        <div class="link-delete">
                    <div class="link-pair">
                            <p>Long link:  <a v-bind:href="todoItem.longLink">{{todoItem.longLink}}</a></p>
                            <p>Short link:  <a v-bind:href="todoItem.shortLink">{{todoItem.shortLink}}</a></p>
                    </div>
                    <button class="btn btn btn-outline-danger" type="del-button" @click="deleteItem(todoItem.id)">Delete</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LinksTable',
  props: {
    todoItems: Array
  },
  methods: {
    deleteItem(id) {
      this.$store.dispatch('DELETE_ITEM_TODO', id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>
