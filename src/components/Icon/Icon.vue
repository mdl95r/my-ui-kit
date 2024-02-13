<template>
  <i :class="classes" />
</template>

<script>
 export default {
	name: 'UiIcon',
	props: {
		name: {
			type: String,
			required: true
		},

		/**
		* Размер иконки [sm, md, lg]
		*/
		size: {
			type: String,
			default: 'md',
			validator: (v) => {
				const values = ['sm', 'md', 'lg'];

				if (!values.includes(v)) {
					console.error(`Значение ${v} некорректно, допустимые значения: ${values.join(', ')}`);
				}

				return true
			}
		},

		/**
		* Использовать размер в относительных единицах - em
		*/
		sizeEm: {
			type: Boolean,
			default: true,
		}
	},

	computed: {
		classes() {
			let size = '';

			if (!this.sizeEm) {
				size = ` icon_${this.size}`
			}

			return `icon pi pi-${this.name}${size}`
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../../node_modules/primeicons/primeicons.css';

.icon {

  &:not(.icon_sm),
  &:not(.icon_md),
  &:not(.icon_lg) {
    font-size: 1em;
  }

  &_sm {
    font-size: 12px;
  }

  &_md {
    font-size: 16px;
  }

  &_lg {
    font-size: 20px;
  }
}
</style>