import UiSelect from '../src/components/Select';
import Icon from '../src/components/Icon';

const socials = [
  { id: 1, name: 'reddit', icon: 'reddit' },
  { id: 2, name: 'telegram', icon: 'telegram' },
  { id: 3, name: 'linkedin', icon: 'linkedin' },
];

export default {
  title: 'Elements/Select',
  component: UiSelect,
  tags: ['autodocs'],

  args: {
    options: [
      { id: 1, name: 'text-1' },
      { id: 2, name: 'text-2' },
      { id: 3, name: 'text-3' },
    ],
    placeholder: 'Placeholder',
  },
};

export const Base = {
  render: (args) => ({
    components: { UiSelect },
    setup() {
      return { args };
    },
    data() {
      return {
        selected: '',
      };
    },
    template: '<UiSelect v-bind="args" v-model="selected" />',
  }),
};

export const SelectWithInitialValue = {
  render: (args) => ({
    components: { UiSelect },
    setup() {
      return { args };
    },
    data() {
      return {
        selected: { id: 1, name: 'text-1' },
      };
    },
    template: '<UiSelect v-bind="args" v-model="selected" />',
  }),
};

export const SelectWithSearch = {
  args: {
    searchable: true,
    label: 'Это label',
  },

  render: (args) => ({
    components: { UiSelect },
    setup() {
      return { args };
    },
    data() {
      return {
        selected: '',
      };
    },
    template: '<UiSelect v-bind="args" v-model="selected" />',
  }),
};

export const SelectRightAndLeftIcon = {
  args: {
    iconLeft: 'heart-fill',
    iconRight: 'heart-fill',
  },
};

export const SelectWithCustomOptions = {
  args: {
    options: socials,
  },

  render: (args) => ({
    components: { UiSelect, Icon },
    setup() {
      return { args };
    },
    data() {
      return {
        selected: null,
      };
    },

    template: `<UiSelect v-bind="args" v-model="selected">
			<template #options="{ id, name, icon }">
        <div>
          {{ id }} - <Icon :name="icon" /><span style="margin-left: 0.5rem;">{{ name }}</span>
        </div>
			</template>
		</UiSelect>`,
  }),
};

export const SelectWithCustomOptionsWithoutIconInInput = {
  args: {
    options: socials,
    showSelectedIcon: false,
  },

  render: (args) => ({
    components: { UiSelect, Icon },
    setup() {
      return { args };
    },
    data() {
      return {
        selected: null,
      };
    },

    template: `<UiSelect v-bind="args" v-model="selected">
			<template #options="{ id, name, icon }">
        <div>
          {{ id }} - <Icon :name="icon" /><span style="margin-left: 0.5rem;">{{ name }}</span>
        </div>
			</template>
		</UiSelect>`,
  }),
};

export const SelectMultiselect = {
  render: (args) => ({
    components: { UiSelect },
    setup() {
      return { args };
    },
    data() {
      return {
        selected: null,
      };
    },
    template: '<UiSelect v-bind="args" v-model="selected" />',
  }),
  args: {
    multiselect: true,
    searchable: true,
  },
};
