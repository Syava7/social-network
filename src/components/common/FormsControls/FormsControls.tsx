import React from 'react'
import classes from './FormsControls.module.css'
import {WrappedFieldProps} from 'redux-form';


export const Textarea: React.FC<WrappedFieldProps> = ({input, meta:{error, touched}, ...props}) => {

  const hasError = error && touched

  return (
    <div className={classes.formsControl + " " + (hasError ? classes.error : '')}>
      <div>
        <textarea className={classes.textarea} {...input} {...props}/>
      </div>
      <div>
        { hasError && <span>{error}</span> }
      </div>
    </div>
  )
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta:{error, touched}, ...props}) => {

  const hasError = error && touched

  return (
    <div className={classes.formsControl + " " + (hasError ? classes.error : '')}>
      <div>
        <input className={classes.input} {...input} {...props}/>
      </div>
      <div>
        { hasError && <span>{error}</span> }
      </div>
    </div>
  )
}

