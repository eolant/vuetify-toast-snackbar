import Toast from './Toast.vue'

function init(Vue, globalOptions = {}) {
  let cmp = null, queue = []
  const property = globalOptions.property || '$toast'

  function createCmp(options) {
    let component = new Vue(Toast)
    Object.assign(component, Vue.prototype[property].globalOptions, options)
    document.querySelector('.application, .v-application').appendChild(cmp.$mount().$el)

    return component
  }

  function show(message, options = {}) {
    if (cmp) {
      let isQueueable = options.queueable !== undefined ? options.queueable : globalOptions.queueable

      if (isQueueable) {
        queue.push({ message, options })
      }
      else {
        cmp.close()
        queue.unshift({ message, options })
      }

      return
    }

    options.message = message
    cmp = createCmp(options)
    cmp.$on('statusChange', (isActive, wasActive) => {
      if (wasActive && !isActive) {
        cmp = null

        if (queue.length) {
          let toast = queue.shift()
          show(toast.message, toast.options)
        }
      }
    })
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
    globalOptions,
    ...shorts(globalOptions)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(init)
}

export default init
