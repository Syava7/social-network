const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'



const initialState = {
  posts: [
    {id: 1, message: 'Hello guys', likesCount: 12},
    {id: 1, message: 'Nice to meet you', likesCount: 14},
    {id: 1, message: 'Good', likesCount: 2},
    {id: 1, message: 'Good buy', likesCount: 6}
  ],
  newPostText: 'Hi man'
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => 
            ({type: UPDATE_NEW_POST_TEXT, text})

export default profileReducer
