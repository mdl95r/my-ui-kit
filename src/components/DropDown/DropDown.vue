<template>
	<transition name="dropdown">
		<div class="ui-dropdown">
			<slot></slot>
		</div>
	</transition>
</template>

<script>
 export default {
	 name: 'DropDown',
 }
</script>

<style lang="scss" scoped>
@import './DropDown';
</style>