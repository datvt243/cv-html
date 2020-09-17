<template>
  <div class="d-flex justify-content-between">
    <div class="clearfix">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="checkall" :checked="isCheckAll" @change="emitCheckAllComplete">
        <label class="custom-control-label" for="checkall">Đánh dấu tất cả là "Đã hoàn thành"</label>
      </div>
    </div>
    <div class="clearfix">
      <p class="text-right">
        Có <strong>[{{ getNotComplete }}]</strong> mục chưa hoàn thành
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoResult',
  props: ['getNotComplete', 'isCheckAll'],
  methods: {
    emitCheckAllComplete() {
      this.$emit('checkAllComplete')
    }
  }
}
</script>

<style>

</style>