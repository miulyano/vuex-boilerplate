<template>
  <div id="app">
    <div class="container header">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">
          <router-link to="/" v-text="menu[`text${langValue.toUpperCase()}`].home" />
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/news" v-text="menu[`text${langValue.toUpperCase()}`].news" />
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/about" v-text="menu[`text${langValue.toUpperCase()}`].about" />
        </el-menu-item>
      </el-menu>
      <el-button type="success"
                 v-for="lang in $ml.list"
                 :key="lang"
                 @click="changeTexts(lang)"
                 v-text="lang"
                 size="small"
                 plain
                 round
      ></el-button>
    </div>
    <router-view :heading="heading" :lang="langValue"></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data () {
    return {
      langValue: localStorage.getItem('vueml-lang'),
      activeIndex: '1',
      activeIndex2: '1',
      activeIndex3: '1'
    };
  },
  computed: {
    ...mapGetters({
      menu: 'MENU',
      heading: 'HEADINGS'
    })
  },
  methods: {
    ...mapActions([
      'GET_MENU',
      'GET_HEADINGS'
    ]),
    changeTexts (lang) {
      this.$ml.change(lang);
      this.langValue = lang;
    }
  },
  created () {
    this.GET_MENU();
    this.GET_HEADINGS();
  },
  name: 'app'
};
</script>

<style lang="scss">
  @import 'assets/styles/style';
</style>
