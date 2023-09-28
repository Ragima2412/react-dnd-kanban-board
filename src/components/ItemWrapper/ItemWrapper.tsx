import { FC } from 'react';
import { IBoard, IItemWrapper } from '../../types/types';
import classes from './ItemWrapper.module.scss';
import { Link } from 'react-router-dom';
import { Task } from '../Task/Task';


export const ItemWrapper:FC<IItemWrapper> = ({title, action, handler, items }) => {

    return (
        <div className={classes.Container} id='taskList'>
        <h1 className={classes.Header}>Boards</h1>
        <div className={classes.AddItem}>
              <p className={classes.Subtitle}>{action}</p>
              <div className={classes.Submit}  title={title} onClick={() => handler()}></div>
        </div>
        {items.map((board: IBoard, index:number )=> (
            <Link to={`/board/id=${board.id}`}  key={index}>
               <Task item={board} type='board' />
            </Link>
        ))}  
        
      </div>
    )
};