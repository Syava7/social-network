import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import classes from '../common/FormsControls/FormsControls.module.css'
import style from './Login.module.css'
import {LoginFormValueType} from './Login';

type LoginFormOwnPropsType = {
  captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValueType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({handleSubmit, error, captchaUrl}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.inputWrap}>
        <Field component={Input} 
               name={'email'} 
               placeholder='Login'
               validate={[required]}/>
      </div>
      <div className={style.inputWrap}>
        <Field component={Input} 
               name={'password'} 
               placeholder='Password'
               validate={[required]}
               type='password'/>
      </div>
      <div className={style.inputWrap}>
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
        <button className={style.button}>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormValueType, LoginFormOwnPropsType>({
  form: 'login'
})(LoginForm)

export default LoginReduxForm
