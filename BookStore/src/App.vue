<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    let data = localStorage.getItem("personBasicInfo");
    this.$store.dispatch("saveuserInfo", JSON.parse(data));
    if (data) {
      this.$router.push({
        path: "/home"
      });
    } else {
       this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style>
</style>
