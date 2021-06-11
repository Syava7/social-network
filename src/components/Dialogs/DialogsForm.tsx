import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'
import classes from './Dialogs.module.css'
import {NewMessageFormType} from './Dialogs';

type PropsType = {}

const maxLength50 = maxLengthCreator(50)

const DialogsForm: React.FC<InjectedFormProps<NewMessageFormType, PropsType> & PropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={ Textarea } 
               name='newMessageText'
               placeholder='Enter your message'
               validate={[required, maxLength50]}/>
      </div>
      <div>
        <button className={classes.button}>
          Add message
        </button>
      </div>
    </form>
  )
}

const DialogsFormRedux = reduxForm<NewMessageFormType>({
  form: 'dialogAddMessageForm'
})(DialogsForm)

export default DialogsFormRedux
