<template>
  <button class="button" :class="{'button--icon-only': iconOnly}">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    iconOnly: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  min-height: 4rem;
  min-width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;

  font-size: 1.6rem;
  font-family: var(--font);
  color: var(--text-color);
  font-weight: 700;
  padding: 0 1.5rem;

  &:hover {
    background-color: var(--primary-color);
  }

  &:active {
    background-color: var(--primary-color);
  }
}

.button--icon-only {
  padding: 0;
}
</style>