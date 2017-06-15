require("!!../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"remove\":true}!vue-style-loader!css-loader!../../vue-loader/lib/style-compiler/index?{\"vue\":true,\"id\":\"data-v-49512c0a\",\"scoped\":false,\"hasInlineConfig\":false}!../../vue-loader/lib/selector?type=styles&index=0!./Avatar.vue");

var render = require("!!babel-loader!../../vue-loader/lib/utils/output-file?{\"output\":true,\"type\":\"render\"}!../../vue-loader/lib/template-compiler/index?{\"id\":\"data-v-49512c0a\",\"scoped\":false}!../../vue-loader/lib/selector?type=template&index=0!./Avatar.vue").default;

var options = require("!!babel-loader!../../vue-loader/lib/utils/output-file?{\"output\":true,\"type\":\"options\"}!../../vue-loader/lib/selector?type=script&index=0!./Avatar.vue");
options = options.default || options || {};

var build = require("!!babel-loader!../../vue-loader/lib/utils/output-file?{\"output\":true,\"type\":\"component\"}!../../vue-loader/lib/script-compiler/index?{\"name\":\"Avatar\",\"vue\":\"./vue.config.js\"}!../../vue-loader/lib/selector?type=script&index=0!./Avatar.vue").default;

var Component = build(render, Object.assign({}, options, {
  __file: "/Users/smallcomfort/Desktop/study/vue-demo的副本/src/Avatar.vue"
}));

options.name && Object.defineProperty(Component, "name", {
  value: options.name
});

module.exports = Component;