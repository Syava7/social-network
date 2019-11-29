import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import classes from '../common/FormsControls/FormsControls.module.css'
import classess from './Login.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className={classess.inputWrap}>
        <Field component={Input} 
               name={'email'} 
               placeholder='Login'
               validate={[required]}/>
      </div>
      <div className={classess.inputWrap}>
        <Field component={Input} 
               name={'password'} 
               placeholder='Password'
               validate={[required]}
               type='password'/>
      </div>
      <div className={classess.inputWrap}>
        <Field component={Input} 
               name={'rememberMe'} 
               type={'checkbox'} /> Remember me
      </div>

      <div>
        { captchaUrl && <img alt='' src={captchaUrl} />}
      </div>
      <div>
         {captchaUrl && <div>
        <Field component={Input} 
               name={'captcha'}
               validate={[required]} /> 
      </div>}
      </div>

      { error && <div className={classes.formSummaryError}>
          { error }
      </div>
      }
      <div>
        <button className={classess.button}>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginReduxForm
