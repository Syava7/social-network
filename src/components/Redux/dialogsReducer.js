const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'



let initialState = {
  dialogs: [
    {id: 1, name: 'Vasya'},
    {id: 2, name: 'Kolya'},
    {id: 3, name: 'Petya'},
    {id: 4, name: 'Igor'},
    {id: 5, name: 'Zyoma)'},
    {id: 6, name: 'Vadim'}
  ],
  messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Hello world'},
    {id: 4, message: 'Nice to meet you'},
    {id: 5, message: 'Hello children'}
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text
      return state
    case SEND_MESSAGE:
      let text = state.newMessageText
      state.newMessageText = ''
      state.messages.push({id: 6, message: text})
      return state
    default:
      return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => 
      ({type: UPDATE_NEW_MESSAGE_TEXT, text})

export default dialogsReducer
