import React from 'react'
import classes from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {

  const hasError = meta.error && meta.touched

  return (
    <div className={classes.formsControl + " " + (hasError ? classes.error : '')}>
      <div>
        <textarea {...input} {...props}/>
      </div>
      <div>
        { hasError && <span>{meta.error}</span> }
      </div>
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {

  const hasError = meta.error && meta.touched

  return (
    <div className={classes.formsControl + " " + (hasError ? classes.error : '')}>
      <div>
        <input {...input} {...props}/>
      </div>
      <div>
        { hasError && <span>{meta.error}</span> }
      </div>
    </div>
  )
}

