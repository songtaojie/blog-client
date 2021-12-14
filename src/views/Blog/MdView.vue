<template>
  <div class="hx-editor-show">
    <mavon-editor :boxShadow="false" :subfield="false" :toolbarsFlag="false" defaultOpen="preview" v-model="viewValue" />
  </div>
</template>

<script>
export default {
  name: 'MdView',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      viewValue: this.value
    }
  },
  watch: {
    value(val) {
      this.viewValue = val
    }
  }
}
</script>

<style scoped>
</style>