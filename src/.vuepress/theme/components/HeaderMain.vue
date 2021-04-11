<template>
  <header class="header">
    <img src="https://secure.gravatar.com/avatar/3a0f3ec5e9d111a44b212abd05dbbec7" alt="avitar"/>
    <div style="flex: 1;">
      <h1>Carl Whittick</h1>
      <h2>Programmer</h2>
    </div>
    <div style="display: flex;">
      <Button>
        This is an example button
      </Button>
      <ButtonDisplayMode />
    </div>
  </header>
</template>

<script>
import Button from './Button.vue'
import ButtonDisplayMode from './ButtonDisplayMode.vue'

export default {
  components: { Button, ButtonDisplayMode },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  
  h1 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 1;
    margin: 0 0 0.25rem;
  }
  h2 {
    color: var(--text-color-light);
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
    margin: 0;
  }

  img {
    border-radius: 50%;
    margin-right: 15px;
    width: 60px;
  }
}
</style>