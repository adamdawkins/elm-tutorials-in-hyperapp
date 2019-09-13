import { app, VNode, ActionFunc, ActionResult } from 'hyperapp'
import { div, button } from '@hyperapp/html'


// - MODEL

type State = { count: number }
const initialState: State = { count: 0 }
 
// -- UPDATE
const Decrement: ActionFunc<State> = (state: State): ActionResult<State> => ({
	count: state.count - 1
})

const Increment: ActionFunc<State> = (state: State): ActionResult<State> => ({
	count: state.count + 1
})

// -- VIEW
const view = (state: State): VNode => (
	div(
		[ button({ onClick: Decrement }, '-')
		, div(state.count)
		, button({ onClick: Increment }, '+')
		]
	)
)

app({
	init: initialState,
	view,
	node: document.getElementById('app')
})
