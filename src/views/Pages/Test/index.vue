<template>
  <a-tabs class="base--table" v-model:activeKey="activeKey" :tab-click="changeTab(activeKey)">
    <a-tab-pane key="1" tab="Tab Title">
      <TabTest/>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Tab Title II">

    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router"
import {useRouter} from "vue-router";
import TabTest from "./TabItems/TabTest";

const route = useRoute();
const router = useRouter();
const tabActive = route.meta.tab;
const activeKey = ref(tabActive);

function changeTab(activeKey) {
  if (activeKey === 1) {
    // router.push({
    //   name: "product.index"
    // }).catch(() => {
    // })
  } else {
    // router.push({
    //   name: "variable.index"
    // }).catch(() => {
    // })
  }
}
</script>

<style scoped lang="scss">
</style>