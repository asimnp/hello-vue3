const template = `
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
`

const data = () => {
  return {
    title: 'Hello Vue3 !',
    message: 'Welcome User. This is my Vue3 CDN page.',
  }
}

const OptionsObject = { template, data }

Vue.createApp(OptionsObject).mount('#app')
