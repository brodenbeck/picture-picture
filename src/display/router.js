import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'

const Home = {
  template: `
  <div>
    <h1>Magic Mirror Placeholder</h1>
  </div>
`,
}

const routes = [
  { path: '/', component: Home },
]

export function createRouter() {
  return new VueRouter({
    routes
  })
}
