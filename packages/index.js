import "./core/components_use";
import HTable from './HTable/index.vue';

const components = [HTable];
const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
}
export {
  install,
  HTable
}
export default {
  install,
  ...components
}