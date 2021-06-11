import React from 'react'
import classes from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.svg'

const Preloader: React.FC = () => {
  return (
    <div>
      <img alt='' className={classes.preloader} src={preloader} />
    </div>
  )
}

export default Preloader
