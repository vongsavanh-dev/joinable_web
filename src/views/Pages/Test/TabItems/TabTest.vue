<template>
  <div class="base-menu-table">
    <a-row :gutter="[16,16]">
      <a-col :sm="6" :md="6" :lg="6">

      </a-col>
      <a-col :sm="6" :md="6" :lg="6">

      </a-col>
      <a-col :sm="6" :md="6" :lg="6">

      </a-col>
      <a-col :sm="6" :md="6" :lg="6">
        <div class="w-full h-12 flex justify-end">
          <a-button class="bg-blue-500 font-light" type="primary">
            Create New
          </a-button>
        </div>
      </a-col>
    </a-row>
  </div>
    <a-table
        :columns="columns"
        :data-source="data"
        :pagination="{ pageSize: 50 }"
        :scroll="{ y: 320 }"
    />
</template>

<script>
import { defineComponent } from 'vue';
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150,
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [...Array(100)].map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));
export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },

});
</script>

<style scoped>

</style>