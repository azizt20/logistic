<template>
  <div class="MenuLayout h-100 w-100">
    <a-layout id="components-layout-demo-custom-trigger " class="h-100">
<!--      <a-layout-sider v-model="collapsed" class="" :trigger="null" collapsible>-->
<!--        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">-->
<!--          <a-menu-item key="1">-->
<!--            <a-icon type="user" class="relative" />-->
<!--            <span>nav 1</span>-->
<!--          </a-menu-item>-->
<!--          <a-menu-item key="2">-->
<!--            <a-icon type="video-camera" />-->
<!--            <span>nav 2</span>-->
<!--          </a-menu-item>-->
<!--          <a-menu-item key="3">-->
<!--            <a-icon type="upload" />-->
<!--            <span>nav 3</span>-->
<!--          </a-menu-item>-->
<!--        </a-menu>-->
<!--      </a-layout-sider>-->
      <a-icon
          class="trigger togle"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
      />
      <a-layout>

        <a-layout-content>
          <router-view/>
        </a-layout-content>
        <a-layout-footer>
          <Navbar/>
        </a-layout-footer>
      </a-layout>
    </a-layout>

  </div>
</template>


<script>
import Navbar from "../components/Navbar";
import MainMenu from "../components/MainMenu";
export default {
  name: 'MenuLayout',
  components: {Navbar},
  comments: {
    Navbar, MainMenu
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}


.relative{
  position: relative;
}
.togle{
  position: absolute;
  top: 0;
  right: 0px;
  z-index: 100;
  font-size: 10px;

}
</style>
