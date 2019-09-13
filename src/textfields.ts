import { app, VNode, ActionFunc, ActionResult } from 'hyperapp'
import { targetValue } from "@hyperapp/events"
import { div, input } from '@hyperapp/html'

// HELPERS
const reverse = (str: String): String => str.split('').reverse().join('')


// - MODEL

type State = { content: String }
const initialState: State = { content: "" }
 
// -- UPDATE
const Change: ActionFunc<State, String> = (state: State, newContent: String): ActionResult<State> => ({
	content: newContent
})


// -- VIEW
const view = (state: State): VNode => (
	div(
		[ input({ onInput: [ Change, targetValue ] })
		, div(reverse(state.content))
		]
	)
)

app({
	init: initialState,
	view,
	node: document.getElementById('app')
})
