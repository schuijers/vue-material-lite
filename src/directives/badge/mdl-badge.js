export default {
  bind(el, binding) {
    el.classList.add('mdl-badge');
    el.setAttribute('data-badge', binding.value);

    if (binding.modifiers['no-background']) {
      el.classList.add('mdl-badge--no-background');
    }

    if (binding.modifiers.overlap) {
      el.classList.add('mdl-badge--overlap');
    }
  },
};
