import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import classes from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={Input} 
               name={'email'} 
               placeholder='Login'
               validate={[required]}/>
      </div>
      <div>
        <Field component={Input} 
               name={'password'} 
               placeholder='Password'
               validate={[required]}
               type='password'/>
      </div>
      <div>
        <Field component={Input} 
               name={'rememberMe'} 
               type={'checkbox'} /> Remember me
      </div>
      { error && <div className={classes.formSummaryError}>
          { error }
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginReduxForm
