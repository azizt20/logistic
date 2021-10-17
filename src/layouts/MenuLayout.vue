<template>
  <div class="MenuLayout h-100 w-100">
    <a-layout id="components-layout-demo-custom-trigger " class="h-100">


      <div v-if="collapsed" class="d-flex flex-column collapse-menu" >
        <h2 class="d-flex" @click="() => (collapsed = !collapsed)">
          <div>Menu</div>
          <a-icon type="caret-up" />
        </h2>
        <router-link class="link" to="account">Настройки аккаунта</router-link>
        <router-link class="link" to="#">Выполненые рейсы( в
          разработке)</router-link>
        <router-link class="link" to="settings">Настройки приложения</router-link>
        <router-link class="link" to="support">Служба поддержки</router-link>
        <router-link class="link" to="aboutapp">О приложении</router-link>
      </div>
      <div v-else
          class="trigger togle"
          @click="() => (collapsed = !collapsed)">
        Menu
      </div>
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
<style lang="scss">
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  /*padding: 0 24px;*/
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}


.relative {
  position: relative;
}

.collapse-menu{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  font-size: 18px;
  padding: 20px;

  .link{
    text-decoration: none;
    color: black !important;
    padding: 10px;
    border-bottom: 1px solid black;
    width: 100%;
    text-align: start;

  }

}
.togle {
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 100;
  font-size: 16px;
  padding: 12px 24px !important;
  border: 1px solid silver;
  background: silver;
  font-weight: bold;

}
</style>
