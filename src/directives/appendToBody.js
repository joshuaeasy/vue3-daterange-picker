export default {
  mounted(el, { instance }) {
    if (instance.appendToBody) {
      const { height, top, left, width, right } = instance.$refs.toggle.getBoundingClientRect();

      el.unbindPosition = instance.calculatePosition(el, instance, {
        width: width,
        top: (window.scrollY + top + height),
        left: (window.scrollX + left),
        right: right
      });

      document.body.appendChild(el);
    } else {
      instance.$el.appendChild(el);
    }
  },

  unmounted(el, { instance }) {
    if (instance.appendToBody) {
      if (el.unbindPosition && typeof el.unbindPosition === 'function') {
        el.unbindPosition();
      }
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  },
}
