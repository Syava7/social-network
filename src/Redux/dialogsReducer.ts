import {ActionsTypes} from './store';

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

type ActionType = ActionsTypes<typeof actions>

export type InitialStateType = typeof initialState

let initialState = {
  dialogs: [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Fill'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Igor'},
    {id: 5, name: 'Bob'},
    {id: 6, name: 'Rony'}
  ] as Array<DialogType>,
  messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Hello world'},
    {id: 4, message: 'Nice to meet you'},
    {id: 5, message: 'Hello children'}
  ] as Array<MessageType>
}

const dialogsReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {

    case 'SN/DIALOGS/SEND_MESSAGE':
      let text = action.newMessageText
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: text}]
      }
    default:
      return state
    }
}

export const actions = {
  sendMessageAC: (newMessageText: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageText} as const)
}


export default dialogsReducer
