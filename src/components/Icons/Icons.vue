<template>
  <div class="icons">
    <div
      v-for="icon in icons"
      :key="icon"
      class="icon-wrap"
    >
      <span>{{ icon }}</span>
      <ui-icon :name="icon" />
    </div>
  </div>
</template>

<script>
import icons from './icons.js';
import UiIcon from '../Icon';

export default {
  name: 'UiIcons',

  components: {
    UiIcon,
  },

  data() {
    return {
      icons,
    }
  },
}
</script>

<style>
.icons {
  display: flex;
  flex-flow: row wrap;
  box-sizing: inherit;
}

.icon-wrap {
  display: flex;
  flex-direction: row-reverse;
  flex: 0 1 16%;
  justify-content: flex-end;
  margin: 15px;
}

.icon-wrap span {
  margin-left: 10px;
}
</style>