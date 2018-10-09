<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png"><br>
    <label>
      <input type="checkbox" v-model="loadComponent" /> View Docs
    </label>
    <component :is="componentView" :msg="msg" :heading="heading" :lang="lang" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Привет',
      loadComponent: false
    };
  },
  computed: {
    componentView () {
      let name = this.loadComponent ? 'HelloWorld' : 'OnlyHeading';
      return () => import(`../components/${name}`);
    }
  },
  props: {
    heading: Object,
    lang: String
  },
  name: 'home'
};
</script>
