<!--
  - @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
  -
  - @author Julius Härtl <jus@bitgrid.net>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program. If not, see <http://www.gnu.org/licenses/>.
  -
  -->

<template>
	<li :data-type="node.type.name">
		<input type="checkbox" contenteditable="false" :checked="node.attrs.done"
			@click="onChange">
		<label ref="content" class="todo-content" :contenteditable="view.editable.toString()" />
	</li>
</template>

<script>
export default {
	name: 'TodoItemView',
	props: ['node', 'updateAttrs', 'view'],
	methods: {
		onChange() {
			this.updateAttrs({
				done: !this.node.attrs.done
			})
		}
	}
}
</script>

<style scoped>

</style>
