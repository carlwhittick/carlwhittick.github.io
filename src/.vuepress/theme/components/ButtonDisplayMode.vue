<template>
  <Button icon-only @click.native="toggleDisplayMode" :title="'Switch to ' + state + ' mode!'">
    <span class="material-icons material-icons-outlined">
      {{ inverseState }}_mode
    </span>{{isDark}}
  </Button>
</template>

<script>
import Button from './Button.vue'

export default {
  components: { Button },

  data() {
    return {
      get state() {
        return localStorage.getItem('state') || 'light';
      },
      set state(value) {
        localStorage.setItem('state', value);
      }
    }
  },

  computed: {
    inverseState() {
      return this.state === 'dark' ? 'light' : 'dark'
    }
  },

  watch: {
    state: {
      immediate: true,
      handler(state) {
        document.body.classList.toggle('dark', state === 'dark')
      },
    },
  },

  methods: {
    toggleDisplayMode() {
      this.state = this.inverseState
    },
  },
}
</script>

<style lang="scss" scoped>

</style>