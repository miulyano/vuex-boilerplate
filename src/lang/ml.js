import Vue from 'vue';
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
import ru from './ru';
import en from './en';

let lang = window.navigator ? (window.navigator.language ||
  window.navigator.systemLanguage ||
  window.navigator.userLanguage) : 'ru';

lang = lang.substr(0, 2).toLowerCase();

Vue.use(MLInstaller);

export default new MLCreate({
  initial: lang,
  save: true,
  languages: [ru, en],
  middleware: (component, path) => {
    // you can mutate path here
    // you should return path updated
    return path;
  }
});
