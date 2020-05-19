<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">API STORE</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/" v-bind:class="{active : tab == 1}" @click="isActiveAPI()">API</b-nav-item>
        <b-nav-item
          to="/documentation"
          v-bind:class="{active : tab == 2 }"
          @click="isActiveDocumentation()"
        ><i
              class="fab fa-github"></i> Documentación </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      tab:0
    }
  },
  methods: {
    isActiveAPI(){
      this.tab = 1;
    },
    isActiveDocumentation(){
      this.tab =2;
    }
  },
};
</script>


