import Toast from './Toast.vue'

function init(Vue, options = {}) {
  let cmp = null
  const property = options.property || '$toast'

  function createCmp(options) {
    cmp = new Vue(Toast)
    Object.assign(cmp, Vue.prototype[property].options, options)
    document.body.appendChild(cmp.$mount().$el)
  }

  function show(message, options = {}) {
    if (cmp) {
      cmp.close()
      Vue.nextTick(() => {
        cmp = null
        show(message, options)
      })
      return
    }

    options.message = message
    return createCmp(options)
  }

  function shorts(options) {
    const colors = ['success', 'info', 'error', 'warning']
    let methods = {}

    colors.forEach(color => {
      methods[color] = (message, options) => show(message, { color, ...options })
    })
    if (options.shorts) {
      for (let key in options.shorts) {
        let localOptions = options.shorts[key]
        methods[key] = (message, options) => show(message, { ...localOptions, ...options })
      }
    }

    return methods
  }

  Vue.prototype[property] = Object.assign(show, {
    options,
    ...shorts(options)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(init)
}

export default init
