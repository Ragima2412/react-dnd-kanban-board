import React from 'react';
import classes from './BackDrop.module.scss';

export const Backdrop = (props:any)=>{
   const position = props.position && props.position === 'absolute' ? [classes.Backdrop,classes.Absolute].join(' '):[classes.Backdrop,classes.Fixed].join(' ');
   const color = props.color && props.color ==='light' ? classes.Light:classes.Dark;
    return(
        <div  className={[position,color].join(' ')}>
            {props.children}
        </div>
    )
};