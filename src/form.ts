import { app, VNode, ActionFunc, ActionResult } from 'hyperapp'
import { targetValue } from "@hyperapp/events"
import { div, input } from '@hyperapp/html'


// - MODEL

type State =
  { name : String
  , password: String
  , passwordAgain: String
  }

const initialState: State = 
  { name : ""
  , password: ""
  , passwordAgain: ""
  }
 
// -- UPDATE
const Name: ActionFunc<State, String> = (state, name): ActionResult<State> => (
  { ...state, name }
)

const Password: ActionFunc<State, String> = (state, password): ActionResult<State> => (
  { ...state, password }
)

const PasswordAgain: ActionFunc<State, String> = (state, passwordAgain): ActionResult<State> => (
  { ...state, passwordAgain }
)


// -- VIEW
const view = (state: State): VNode => (
	div(
    [ viewInput("text", "Name", state.name, [Name, targetValue])
    , viewInput("password", "Password", state.password, [Password, targetValue])
    , viewInput("password", "Re-enter Password", state.passwordAgain, [PasswordAgain, targetValue])
		, viewValidation(state)
    ]
	)
)

const viewInput = (type: String, placeholder: String, value: String, action: ActionFunc): VNode => (
  input({ type: type, placeholder: placeholder, value: value, onInput: action })
)

const viewValidation = (state: State): VNode => (
	state.password === state.passwordAgain
	? div({ style: { color: 'green' }}, 'OK')
	: div({ style: { color: 'red' }}, 'Passwords do not match!')
)

app({
	init: initialState,
	view,
	node: document.getElementById('app')
})
