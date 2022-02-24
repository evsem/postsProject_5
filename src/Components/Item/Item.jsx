import React from 'react'
import classes from './Item.module.css'

const Item = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h3 className={classes.container_titlePost}>JS</h3>
        <p className={classes.container_infoAboutPost}>Programming language</p>
      </div>
    </div>
  )
}

export default Item
