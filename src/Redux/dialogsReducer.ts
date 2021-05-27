const SEND_MESSAGE = 'SEND_MESSAGE'

type initialStateType = typeof initialState

let initialState = {
  dialogs: [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Fill'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Igor'},
    {id: 5, name: 'Bob'},
    {id: 6, name: 'Rony'}
  ],
  messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Hello world'},
    {id: 4, message: 'Nice to meet you'},
    {id: 5, message: 'Hello children'}
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      let text = action.newMessageText
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: text}]
      }
    default:
      return state
    }
}

export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})


export default dialogsReducer
