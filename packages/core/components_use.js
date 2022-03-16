import Vue from 'vue';
import { Input, Button, Select, Table } from 'ant-design-vue'

import HTable from '../HTable/index.vue';

export default {
  input: Input,
  select: Select,
}

Vue.use(Input);
Vue.use(Button);
Vue.use(Select);
Vue.use(Table);
Vue.use(HTable);