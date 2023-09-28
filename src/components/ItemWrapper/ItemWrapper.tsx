import { FC } from 'react';
import { IItemWrapper } from '../../types/types';
import classes from './ItemWrapper.module.scss';


export const ItemWrapper:FC<IItemWrapper> = ({title, action, handler, items }) => {
    return (
        <div className={classes.Container} id='taskList'>
        <h1 className={classes.Header}>Boards</h1>
        <div className={classes.AddItem}>
          {/* <input type='text' autoComplete='off' placeholder='Add New Task' className={classes.ItemInput}/> */}
              <p className={classes.Subtitle}>{action}</p>
              <div className={classes.Submit}  title={title} onClick={() => handler()}></div>
        </div>
        {/* <ul className={classes.ItemList}>
              <li className={classes.Item}>
                  <label className={classes.ItemLabel}>
              <input type='checkbox' />
                      <span>TAsk NAme</span>
                  </label>
                  <span className={classes.DeleteItem} title='Delete Task'>Task del</span>
              </li>
          </ul> */}
      </div>
    )
};