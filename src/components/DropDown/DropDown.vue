<template>
  <transition name="dropdown">
    <div class="ui-dropdown">
      <slot />
    </div>
  </transition>
</template>

<script>
 export default {
	 name: 'UiDropdown',
 }
</script>

<style lang="scss" scoped>
@import './DropDown';
</style>