import React from 'react'
import TextField from '@material-ui/core/TextField'
import classes from './FormsControls.module.css'

const Textarea = ({input, meta, ...props}) => {
  return (
    <div className={classes.formsControl + " " + classes.error}>
      <div>
        <TextField {...input} {...props}/>
      </div>
      <div>
        <span>some error!</span>
      </div>
    </div>
  )
}

export default Textarea
