<template>
  <div class="hello">
    <h1 v-text="heading[`text${lang.toUpperCase()}`].home"></h1>
    <h4> Language project: <b>{{ lang.toUpperCase() }}</b></h4>
    <h4> You language: <b>{{ language.toUpperCase() }}</b></h4>
  </div>
</template>

<script>
export default {
  data () {
    return {
      language: window.navigator ? (window.navigator.language ||
        window.navigator.systemLanguage ||
        window.navigator.userLanguage) : 'Sorry, I do not know which language you use...'
    };
  },
  name: 'OnlyHeading',
  props: {
    msg: String,
    heading: Object,
    lang: String
  }
};
</script>
