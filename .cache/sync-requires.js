const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/designacessivel/Projetos/front-end/portfolio-2020/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/designacessivel/Projetos/front-end/portfolio-2020/src/pages/index.js"))),
  "component---src-pages-single-js": hot(preferDefault(require("/Users/designacessivel/Projetos/front-end/portfolio-2020/src/pages/single.js")))
}

