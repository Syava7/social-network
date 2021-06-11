import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea }  from '../../common/FormsControls/FormsControls'
import classes from './MyPosts.module.css'


type PropsType = {

}

export type AddPostFormValueTypes = {
  newPostText: string
}

const maxLength50 = maxLengthCreator(50)

const MyPostsForm: React.FC<InjectedFormProps<AddPostFormValueTypes, PropsType> & PropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={ Textarea } 
               name='newPostText' 
               placeholder='Enter your post'
               validate={[required, maxLength50]} />
      </div>
      <div>
        <button className={classes.button}>
          Add post
        </button>
      </div>
    </form>
  )
}

const MyPostsFormRedux = reduxForm<AddPostFormValueTypes>(
  {form: 'ProfileMyPostsForm'}
  )(MyPostsForm)

export default MyPostsFormRedux
