import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea }  from '../../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10)

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={ Textarea } 
               name='newPostText' 
               placeholder='Enter your post'
               validate={[required, maxLength10]} />
      </div>
      <div>
        <button>
          Add post
        </button>
      </div>
    </form>
  )
}

const MyPostsFormRedux = reduxForm(
  {form: 'ProfileMyPostsForm'}
  )(MyPostsForm)

export default MyPostsFormRedux
