import React from 'react'
import { Field, reduxForm } from 'redux-form'

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea'
               name='newMessageText'
               placeholder='Enter your message'/>
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
