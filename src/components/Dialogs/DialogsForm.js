import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'

const maxLength50 = maxLengthCreator(50)

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={ Textarea } 
               name='newMessageText'
               placeholder='Enter your message'
               validate={[required, maxLength50]}/>
      </div>
      <div>
        <button>
          Add message
        </button>
      </div>
    </form>
  )
}

const DialogsFormRedux = reduxForm({
  form: 'dialogAddMessageForm'
})(DialogsForm)

export default DialogsFormRedux
