export default {
  install(app, options = {}) {
    const defaultOffset = options.offset || 100

    const scrollTo = (id, customOffset = null) => {
      const element = document.getElementById(id)
      if (element) {
        const offset = customOffset !== null ? customOffset : defaultOffset
        const top = element.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({
          top,
          behavior: 'smooth'
        })
      }
    }

    app.config.globalProperties.$scrollTo = scrollTo
  }
}
