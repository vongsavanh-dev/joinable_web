<template>
  <a-layout class="h-full">
    <a-layout-sider class="h-screen bg-white" v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="w-full h-20 flex justify-center  items-center ">
        <div class="w-10 h-10  rounded-lg flex justify-center items-center">
          Logo
        </div>

      </div>
      <TheMenu/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="bg-white p-0 pl-2">
        <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)"/>
      </a-layout-header>
      <a-layout-content class="content__admin bg-gray-100 p-3">
        <div class="bg-white min-h-full w-full block">
          <BreadcrumbHeader/>
          <router-view/>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import image from "@/assets/image/logo.png"
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';
import TheMenu from "../../components/GobalLayout/TheMenu";

export default defineComponent({
  components: {
    TheMenu,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },

  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(false),
      image: image
    };
  },

});
</script>
<style>
</style>