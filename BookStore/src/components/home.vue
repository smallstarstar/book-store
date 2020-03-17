<template>
  <div>
    <HeaderTop />
    <router-view></router-view>
    <TabBar />
  </div>
</template>

<script>
import TabBar from "./tab-bar.vue";
import HeaderTop from "./header-top.vue";
import Content from "./content.vue";
export default {
  components: {
    TabBar,
    HeaderTop,
    Content
  },
  data() {
    return {};
  }
};
</script>