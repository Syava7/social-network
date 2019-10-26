const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
  users: [
    {id: 1, followed: true, fullName: 'Vadik', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7bORQmxQAhKwigwXDmGCowBp6X18cdG7bTWpmwLL3z0Rex6Vs&s' },
    {id: 2, followed: false, fullName: 'Kolyan', status: 'I am a boss too', location: {city: 'Uman', country: 'Ukraine'}, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7bORQmxQAhKwigwXDmGCowBp6X18cdG7bTWpmwLL3z0Rex6Vs&s' },
    {id: 3, followed: true, fullName: 'Vadik', status: 'I am a monkey', location: {city: 'Lviv', country: 'Ukraine'}, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7bORQmxQAhKwigwXDmGCowBp6X18cdG7bTWpmwLL3z0Rex6Vs&s' }
  ]
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return { 
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        }) 
      }
    case UNFOLLOW:
      return { 
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })  
      }
    case SET_USERS:
        return { 
          ...state,
          users: [...state.users, ...action.users] 
        }
    default:
      return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer
