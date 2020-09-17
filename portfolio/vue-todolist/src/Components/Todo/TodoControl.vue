<template>
  <div class="d-inline clearfix">
    <button type="button" class="btn btn-light" 
      :class="{'is-active' : $store.state.filter == 'all' }" 
      @click="$store.state.filter = 'all'">
      Tất cả
    </button>
    <button type="button" class="btn btn-light" 
      :disabled="!disabledBtnIsComplete" 
      :class="{'is-active' : $store.state.filter == 'done' }" 
      @click="$store.state.filter = 'done'">
      Đã hoàn thành
    </button>
    <button type="button" class="btn btn-light" 
      :disabled="!disabledBtnNotComplete" 
      :class="{'is-active' : $store.state.filter == 'notDone' }" 
      @click="$store.state.filter = 'notDone'">
      Chưa hoàn thành
    </button>
    <transition name="animate">
      <div class="float-right" v-show="showBtnClearComplete != 0">
        <button type="button" class="btn btn-danger" @click="clearComplete">Xóa các mục đã hoàn thành</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TodoControl',
  props: ['disabledBtnIsComplete', 'disabledBtnNotComplete', 'showBtnClearComplete', 'clearComplete']
}
</script>

<style>

</style>