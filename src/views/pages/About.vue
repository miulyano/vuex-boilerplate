<template>
  <div class="about container">
    <h1 v-text="heading[`text${lang.toUpperCase()}`].about"></h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
    };
  },
  props: {
    heading: Object,
    lang: String
  },
  name: 'about'
};
</script>
