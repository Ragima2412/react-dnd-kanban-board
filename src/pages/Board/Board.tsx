import React from 'react'
import classes from './Board.module.scss'

export const Board = () => {
    const handler = () => {
       return '' 
    }
  return (
    <div className={classes.Board}>
      <div className={classes.AddItem}>
        <p className={classes.Subtitle}>Create new task</p>
        <div className={classes.Submit} title={''} onClick={() => handler()}></div>
      </div>
    </div>
  )
}
