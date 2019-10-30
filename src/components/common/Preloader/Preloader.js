import React from 'react'
import classes from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.svg'

const Preloader = () => {
  return (
    <div>
      <img className={classes.preloader} src={preloader} />
    </div>
  )
}

export default Preloader
