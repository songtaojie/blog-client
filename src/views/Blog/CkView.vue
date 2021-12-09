<template>
  <div class="hx-view">
    <mavon-editor :boxShadow="false" :subfield="false" :toolbarsFlag="false" defaultOpen="preview" v-model="viewValue" />
  </div>
</template>

<script>
export default {
  name: 'CkView',
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
.md-view .markdown-body {
  border: none;
}
</style>