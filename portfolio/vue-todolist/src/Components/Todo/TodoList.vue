<template>
  <div class="clearfix">
    <ul class="todo-list mb-4">
      <transition-group name="animate">
        <li v-for="(item, index) in list" :key="index">
          <div class="todo-item d-flex">
            <div class="checked">
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" 
                  :id="'doto-' + index" 
                  v-model="item.isComplete">
                <label class="custom-control-label" 
                  :for="'doto-' + index"></label>
              </div>
            </div>
            <div class="content">
              <p :class="{ del : item.isComplete }" v-if="!item.isEdit" @dblclick="emitEditTodo(item)">
                {{ item.content }}
              </p>
              <div class="form-group" v-else>
                <input type="text" class="form-control" 
                  v-focus 
                  v-model="item.content" 
                  @blur="emitUpdateToDo(item)" 
                  @keyup.enter="emitUpdateToDo(item)" 
                  @keyup.esc="emitCanNotEdit(item)">
              </div>
            </div>
            <div class="control">
              <span class="btn" @click="emitDeleteToDo(index)">
                <base-icon-delete />
              </span>
            </div>
          </div>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: ['list'],
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    emitEditTodo(item) {
      this.$emit('editTodo', item)
    },
    emitCanNotEdit(item) {
      this.$emit('canotEdit', item)
    },
    emitUpdateToDo(item) {
      this.$emit('updateToDo', item)
    },
    emitDeleteToDo(item) {
      this.$emit('deleteToDo', item)
    }
  }
}
</script>

<style>

.todo-list {
  position: relative;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.todo-list li {
  padding: 10px 0;
  border-bottom: 1px solid rgba(0,0,0,.1)
}
.todo-list .todo-item {
  display: flex;
  align-items: center;
}
.todo-list .todo-item .checked, .todo-list .todo-item .control {
  flex: 0 0 50px;
  max-width: 50px;
}
.todo-list .todo-item .content {
  width: 100%;
  flex-grow: 1;
}

</style>