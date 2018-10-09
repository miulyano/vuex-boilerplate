<template lang="pug">
  section.news.container
    h1#news-heading.news__heading(v-text="heading[`text${lang.toUpperCase()}`].news")
    .news__wrapper.row(v-loading="loading")
      .col-xl-4.col-md-6.col-xs-12(v-for="item in news")
        article.news__item
          h2 {{item.theme}}
          p {{item.text}}
          el-button( @click="deleteNews(item._id)" type="text") Удалить
    el-button.news-add__button(v-if="!showNewNewsForm" @click="showNewNewsForm = true" type="warning" plain) Добавить новость
    el-form.news-add__form(ref="newNews" v-if="showNewNewsForm")
      el-form-item(label="Тема новости")
        el-input(type="text" name="theme" v-model="newObj.theme" required)
      el-form-item(label="Текст новости")
        el-input(type="text" name="text" v-model="newObj.text" required)
      el-button(@click.prevent="newNewsAdd" type="success") Сохранить изменения
      el-button(@click.prevent="newNewsRemove") Отмена
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data () {
    return {
      showNewNewsForm: false,
      loading: false,
      newObj: {
        theme: '',
        text: ''
      }
    };
  },
  computed: {
    ...mapGetters({
      news: 'NEWS'
    })
  },
  methods: {
    ...mapActions([
      'GET_NEWS',
      'SAVE_NEWS',
      'DELETE_NEWS'
    ]),
    newNewsAdd () {
      if (this.newObj.theme || this.newObj.text) {
        this.loading = true;
        this.SAVE_NEWS({
          theme: this.newObj.theme,
          text: this.newObj.text
        }).then(() => {
          this.loading = false;
          this.newObj.theme = '';
          this.newObj.text = '';
          this.showNewNewsForm = false;
          this.GET_NEWS();
        });
      } else {
        this.$message({
          message: 'Заполните тему и текст новости до добавления!',
          type: 'error'
        });
      }
    },
    deleteNews (id) {
      this.loading = true;
      this.DELETE_NEWS({
        id: id
      }).then(() => {
        this.loading = false;
        this.GET_NEWS();
      });
    },
    newNewsRemove () {
      this.newObj.theme = '';
      this.newObj.text = '';
      this.showNewNewsForm = false;
    }
  },
  created () {
    this.GET_NEWS();
  },
  props: {
    heading: Object,
    lang: String
  },
  name: 'news'
};
</script>
