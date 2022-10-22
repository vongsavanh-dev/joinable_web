<template>
  <a-menu v-for="(menu,key) in MenuList">
    <a-menu-item :key="key" @click="handleChangeMenu(menu)">
      <span><i :class="menu.icon"></i></span>
      <span class="ml-2 text-base">{{ menu.name }}</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup>
import {reactive} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
/*menu list*/
const MenuList = reactive([
  {
    id: "1",
    name: "ຂໍ້ມູນຜູ້ຊ່ຽວຊານ",
    route: "expert.index",
    icon: "fas fa-minus"
  }
]);

/*change menu */
function handleChangeMenu(menu) {
  router.push({
    name: menu.route,
  }).catch(() => {
  })

}
</script>

<style scoped>

</style>