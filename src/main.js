// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "prismjs/themes/prism.css"
import "~/css/reset.css"
import "~/css/variables.css"
import "~/css/typography.css"
import "~/css/utility.css"
import "~/css/main.css"
import "~/css/accent-color.css"
import "~/css/max.css"
import DefaultLayout from "~/layouts/Default.vue"

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)
}
