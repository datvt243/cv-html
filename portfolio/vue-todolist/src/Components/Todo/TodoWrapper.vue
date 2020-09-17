<template>
  <div class="doto-wrapper">
    <TodoForm @addNewToDo="addNewToDo" />
    <div class="todo-content">
      <div class="clearfix" v-if="listTodo.length">
        <TodoList 
          :list="getListToDo" 
          @editTodo="editTodo" 
          @canotEdit="canotEdit"
          @updateToDo="updateToDo" 
          @deleteToDo="deleteToDo" />
        <TodoResult 
          :getNotComplete="getNotComplete" 
          :isCheckAll="isCheckAll" 
          @checkAllComplete="checkAllComplete" />
        <hr>
        <TodoControl
          :disabledBtnIsComplete="disabledBtnIsComplete" 
          :disabledBtnNotComplete="disabledBtnNotComplete" 
          :showBtnClearComplete="showBtnClearComplete" 
          :clearComplete="clearComplete" />
      </div>
      <transition v-else name="animate">
        <TodoFooter />
      </transition>
    </div>
  </div>
</template>

<script>

import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoControl from './TodoControl'
import TodoResult from './TodoResult'
import TodoFooter from './TodoFooter'

export default {
  name: 'TodoWrapper',
  components: {
    TodoForm,
    TodoList,
    TodoControl,
    TodoResult,
    TodoFooter
  },
  created() {
    // get data
  },
  data () {
    return {
      listTodo: [
        {
          id: 1,
          content: 'Lorem ipsum dolor sit amet.', 
          isComplete: true,
          isEdit: false
        },
        {
          id: 2,
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing.', 
          isComplete: false,
          isEdit: false
        },
        {
          id: 3,
          content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, cumque.', 
          isComplete: false,
          isEdit: false
        }
      ]
    }
  },
  computed: {
    getListToDo() {
      if( this.$store.state.filter == 'all' ) {
        return this.listTodo
      } else if ( this.$store.state.filter == 'notDone' ) {
        return this.listTodo.filter(item => !item.isComplete)
      } else if ( this.$store.state.filter == 'done' ) {
        return this.listTodo.filter(item => item.isComplete)
      }
      return this.listTodo
    },
    getNotComplete() {
      return this.$store.state.notComplete = this.listTodo.filter(item => item.isComplete == false).length
    },
    getIDLast() {
      return this.listTodo.length == 0 ? 1 : this.listTodo[this.listTodo.length-1].id
    },
    isCheckAll() {
      return this.$store.state.isCheckAll = this.getNotComplete == 0
    },
    showBtnClearComplete() {
      return this.listTodo.filter((item) => item.isComplete).length
    },
    disabledBtnIsComplete() {
      return this.listTodo.filter((item) => item.isComplete).length
    },
    disabledBtnNotComplete() {
      return this.listTodo.filter((item) => !item.isComplete).length
    }
  },
  methods: {
    addNewToDo(item) {
      if ( item.trim() == '' ) {
        return
      }
      this.listTodo.push({
        id: this.getIDLast + 1,
        content: item,
        isComplete: false,
        isEdit: false
      })
    },
    deleteToDo(index) {
      this.listTodo.splice(index, 1)
    },
    editTodo(item) {
      this.$store.state.beforeEdit = item.content
      item.isEdit = true
    },
    canotEdit(item) {
      this.$store.state.beforeEdit = ''
      item.isEdit = false
    },
    updateToDo(item) {
      if(item.content.trim() == '') {
        item.content = this.$store.state.beforeEdit
      }
      item.isEdit = false
    },
    checkAllComplete() {
      this.listTodo.forEach((item) => item.isComplete = event.target.checked)
    },
    clearComplete() {
      this.listTodo = this.getListToDo.filter((item) => !item.isComplete)
    }
  }
}
</script>

<style>

.doto-wrapper {
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
}

</style>