import Vue from 'vue'
import Vuex from 'vuex'
import LinksList from '@/cls/model/LinksList.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: new LinksList()
  },
  mutations: { 
    CUT: (state, todoItem) => {
      state.todoItems.addItem(todoItem);
    },
    SAVE: (state) => {
      state.todoItems.save();
    },
    COPY: (state) => {
      state.todoItems.copy();
    },
    TOGGLE_DONE: (state, todoItemId) => {
      state.todoItems.toggleDone([todoItemId]);
    },    
    DELETE_ITEM_TODO: (state, todoItemId) => {
      state.todoItems.deleteItem([todoItemId]);
    }
  },
  actions: { 
    CUT: (context, todoItem) => {
      context.commit('CUT', todoItem);
    },
    SAVE: (context) => {
      context.commit('SAVE');
    },
    COPY: (context) => {
      context.commit('COPY');
    },
    TOGGLE_DONE: (context, todoItemId) => {
      context.commit('TOGGLE_DONE', todoItemId);
    },
    DELETE_ITEM_TODO: (context, todoItemId) => {
      context.commit('DELETE_ITEM_TODO', todoItemId);
    }
   
  },
  modules: {
  }
})
