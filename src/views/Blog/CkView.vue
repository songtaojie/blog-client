<template>
  <div class="hx-view">
    <mavon-editor
      v-model="viewValue"
      :subfield="false"
      :boxShadow="false"
      defaultOpen="preview"
      :toolbarsFlag="false"
    />
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
    value (val) {
      this.viewValue = val
    }
  }
}
</script>

<style scoped>
.md-view .markdown-body{
  border: none;
}

</style>