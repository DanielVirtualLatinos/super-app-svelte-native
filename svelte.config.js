const sveltePreprocess = require("svelte-preprocess");
const svelteNativePreprocessor = require("svelte-native-preprocessor");

module.exports = {
  compilerOptions: {
    namespace: "foreign",
  },
  css: {
    warning: {
      unknownProperties: "ignore",
    },
  },
  preprocess: [sveltePreprocess(), svelteNativePreprocessor()],
};
