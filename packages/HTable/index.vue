<template>
  <div>
    <table-content />
  </div>
</template>

<script>
import TableContent from '../tableContent';
export default {
  name: 'h-table',
  install: function(Vue) {
    Vue.component(this.name, this);
  },
  props: {},
  components: {
    'table-content': TableContent
  },
  watch: {},
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped>

</style>
