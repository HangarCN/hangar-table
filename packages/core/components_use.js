import Vue from 'vue';
import { Input, Button, Select, Table, Empty } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import HTable from '../HTable/index.vue';

export default {
  input: Input,
  select: Select,
}

Vue.use(Input);
Vue.use(Empty);
Vue.use(Button);
Vue.use(Select);
Vue.use(Table);
Vue.use(HTable);