/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { Node } from 'tiptap'
import { sinkListItem, splitToDefaultListItem, liftListItem } from 'tiptap-commands'
import TodoItemView from './TodoItemView'
export default class TodoItem extends Node {

	get name() {
		return 'todo_item'
	}

	get defaultOptions() {
		return {
			nested: false
		}
	}

	get view() {
		return TodoItemView
	}

	get schema() {
		return {
			attrs: {
				done: {
					default: false
				}
			},
			draggable: true,
			content: this.options.nested ? '(paragraph|todo_list|bullet_list)+' : 'paragraph+',
			toDOM: node => {
				return [
					'li',
					[
						'input',
						{ type: 'checkbox', checked: node.attrs.done }
					],
					['label', { }, 0]
				]
			},
			parseDOM: [
				{
					priority: 51,
					tag: `[data-type="${this.name}"]`,
					getAttrs: dom => ({
						done: dom.getAttribute('data-done') === 'true'
					})
				},
				{
					priority: 100,
					tag: 'li',
					getAttrs: el => {
						const checkbox = el.querySelector('input[type=checkbox]')
						return { done: checkbox && checkbox.checked }
					}
				}
			],
			toMarkdown: (state, node) => {
				state.write(`* [${node.attrs.done ? 'x' : ' '}] `)
				state.renderContent(node)
			}
		}
	}

	keys({ type }) {
		return {
			Enter: splitToDefaultListItem(type),
			Tab: this.options.nested ? sinkListItem(type) : () => {},
			'Shift-Tab': liftListItem(type)
		}
	}

}
