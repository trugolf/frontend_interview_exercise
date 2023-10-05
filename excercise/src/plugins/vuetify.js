import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

// const user = localStorage.getItem('e6User');
const userPrefs = localStorage.getItem('userPreferences');

const opts = {
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    // dark: JSON.parse(user)?.users?.me?.preferences?.darkMode ?? false,
    dark: JSON.parse(userPrefs)?.darkMode ?? false,
    themes: {
      light: {
        primary: {
          base: '#BA2127',
          lighten1: '#F11313',
          // lighten1: '#ab3035',
        },
        secondary: {
          base: '#424242',
          lighten1: '#828282',
        },
        success: {
          base: '#67A011',
        },
        info: {
          base: '#1349BF',
          lighten1: '#58B1FF',
        },
        warning: {
          base: '#ECC75F',
        },
        danger: {
          base: '#B7191C',
        },
        error: {
          base: '#B7191C',
          lighten1: '#F11313',
        },
        default: {
          base: '#757575',
        },
        darkInfo: {
          base: '#5995c7',
        },
      },
      dark: {
        primary: {
          base: '#F11313',
          lighten1: '#F11313',
          // lighten1: '#ab3035',
        },
        secondary: {
          base: '#424242',
          lighten1: '#828282',
        },
        success: {
          base: '#67A011',
        },
        info: {
          base: '#58B1FF',
          lighten1: '#58B1FF',
        },
        warning: {
          base: '#ECC75F',
        },
        danger: {
          base: '#B7191C',
        },
        error: {
          base: '#B7191C',
          lighten1: '#F11313',
        },
        default: {
          base: '#757575',
        },
        darkInfo: {
          base: '#5995c7',
        },
      },
    },
  },
};

export default new Vuetify(opts);
