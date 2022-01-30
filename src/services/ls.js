export default {
  get(key) {
    return window.localStorage.getItem(key)
      ? window.localStorage.getItem(key)
      : null
  },

  set(key, val) {
    window.localStorage.setItem(key, val)
  },

  remove(key) {
    window.localStorage.removeItem(key)
  },
}
