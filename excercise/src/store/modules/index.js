/**
 * Automatically imports all the modules and exports as a single module object
 */

const requireModule = require.context('.', false, /\.js$/);
const modules = {};

requireModule.keys().forEach((filename) => {
  //* Don't register this file as a Vuex module
  if (filename === './index.js') return;

  //* Create the module name from the fileName
  const moduleName = filename.replace(/(\.\/|\.js)/g, '');

  modules[moduleName] = {
    namespaced: true,
    ...requireModule(filename).default,
  };
});

export default modules;
