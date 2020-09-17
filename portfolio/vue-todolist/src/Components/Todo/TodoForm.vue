<template>
  <div class="doto-form">
    <div class="form-group">
      <label for="todo-input">Thêm Mới:</label>
      <input type="text" class="form-control form-control-lg" id="todo-input" placeholder="thêm tác vụ mới ... [Enter] để thêm vào" v-model="newTodo" @keyup.enter="emitAddNewTodo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoFrom',
  data () {
    return {
      newTodo : ''
    }
  },
  methods: {
    emitAddNewTodo() {
      this.$emit('addNewToDo', this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>

<style scoped>

.doto-form {
  margin-bottom: 30px;
}

</style>