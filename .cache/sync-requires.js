const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/designacessivel/Projetos/front-end/playground/todo/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/designacessivel/Projetos/front-end/playground/todo/src/pages/page2.js")))
}

