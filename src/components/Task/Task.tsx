import React, { FC } from 'react'
import classes from './Task.module.scss'
import { ITask } from '../../types/types'

export const Task: FC<ITask> = ({ item, type }) => {

  if (type === 'board') {
    return(
        <div className={classes.Item}>
        <div className={[classes.Item, classes.Items].join('')}>
          <span className={[classes.Item, classes.ItemTag, classes.Wrapper].join('')}>
          {item.name}
          </span>        
        </div>      
      </div>)
  } else {
    return(
    <div className={classes.Item} >
      <div className={[classes.Item, classes.Items].join('')}>
        <span className={[classes.Item, classes.ItemTag, classes.Wrapper].join('')}>
          {item.name}
        </span>
        <button className={classes.Options}>{/* <i class='fas fa-ellipsis-h'></i> */}</button>
      </div>
      <p>Konsep hero title yang menarik</p>
      <div className={classes.Stats}>
        <span>
          <time>
            {/* <i class='fas fa-flag'></i> */}
            Nov 24
          </time>
        </span>
        <span>{/* <i class='fas fa-comment'></i> */}3</span>
        <span>{/* <i class='fas fa-paperclip'></i> */}7</span>
      </div>
    </div>)
  }
}
