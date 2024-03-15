<template>
  <div
    class="ui-avatar"
    :class="classes"
  >
    <template v-if="isAuthorized">
      <component
        :is="links?.authorized?.tag"
        v-if="links?.authorized"
        v-bind="links?.authorized?.config"
        data-test-id="link"
      >
        <img
          v-if="image"
          :src="image"
          :alt="nameAndLastNameFull"
          :title="nameAndLastNameFull"
          class="ui-avatar__image"
          data-test-id="img"
        />

        <span
          v-else
          class="ui-avatar__text"
          :title="nameAndLastNameFull"
          data-test-id="text"
        >
          {{ nameAndLastNameShort }}
        </span>
      </component>

      <template v-else>
        <img
          v-if="image"
          :src="image"
          :alt="nameAndLastNameFull"
          :title="nameAndLastNameFull"
          class="ui-avatar__image"
          data-test-id="img"
        />

        <span
          v-else
          class="ui-avatar__text"
          data-test-id="text"
          :title="nameAndLastNameFull"
        >
          {{ nameAndLastNameShort }}
        </span>
      </template>
    </template>

    <template v-else>
      <slot name="unauthorized">
        <component
          :is="links?.unauthorized.tag"
          v-if="links?.unauthorized"
          v-bind="links?.unauthorized?.config"
          data-test-id="unauthorized-link"
        >
          <Icon
            name="user"
            class="ui-avatar__icon_unauthorized"
          />
        </component>

        <Icon
          v-else
          name="user"
          class="ui-avatar__icon_unauthorized"
          data-test-id="unauthorized"
        />
      </slot>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Icon from '../Icon';

const props = defineProps({
  /**
   * Пользователь c именем, фамилией, аватаром, если пустое (по умолч.), то считается, что пользователь не авторизован
   * @typedef {import('./types').IUser}
   */
  user: {
    type: Object,
    default: null,
  },

  /**
   * Размер аватара [sm, md, lg]
   */
  size: {
    type: String,
    default: 'md',
  },

  /**
   * Ссылки
   * @typedef {import('./types').IAvatarLinks}
   */
  links: {
    type: Object,
    default: null,
  },

  /**
   * Удалить границу
   */
  borderNone: {
    type: Boolean,
    default: false,
  },

  /**
   * Фигура аватара [circle, square]
   */
  shape: {
    type: String,
    default: 'circle',
  },
});

const image = computed(() => props.user?.image || null);

const nameAndLastNameFull = computed(() => {
  return Object.keys(props.user)
    .filter((el) => el !== 'image')
    .map((el) => props.user[el])
    .join(' ');
});

const nameAndLastNameShort = computed(() => {
  return nameAndLastNameFull.value
    .split(' ')
    .map((el) => el.at(0))
    .join('');
});

const isAuthorized = computed(() => Boolean(props.user));

const classes = computed(() => {
  return [
    `ui-avatar_${props.size}`,
    `ui-avatar_${props.shape}`,
    {
      'ui-avatar_unauthorized': !isAuthorized.value,
      'ui-avatar_border-none': props.borderNone,
    },
  ];
});
</script>

<style lang="scss" scoped>
@use './Avatar.scss';
</style>
