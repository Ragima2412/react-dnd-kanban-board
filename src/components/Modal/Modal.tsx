import React, { FC, useEffect, useState } from 'react'
import classes from './Modal.module.scss'
import { IModal, IInputDetails } from '../../types/types'
import { icons } from '../../settings'
import { Storage } from '../../storage/storage'
import { v4 as uuidv4 } from 'uuid'

export const Modal: FC<IModal> = ({
  title,
  styles,
  inputs,
  closeModalHandler,
  buttonName,
  storageKey,
}) => {
  const [newItem, setNewItem] = useState<any>({ id: uuidv4() })
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [value, setInputValue] = useState<string>('')
  const newObj: any = {}

  const writeInputHandler = (e: any, el: any) => {
    
    const id =
      el.id?.toLowerCase().split(' ')?.length > 1
        ? el.id?.toLowerCase().split(' ')?.join('_')
        : el.id?.toLowerCase()
    newObj[id] = e?.target?.value;    
    setNewItem({ ...newItem, ...newObj })
    setInputValue(e?.target?.value);
    checkEmptyField();
    // setIsError && setIsError({...isError, [id]: checkInputValue(e.target.value, el?.type, validators)});
  }

  const checkEmptyField= (): boolean => {
    const result = Object.values(newItem).findIndex((i) => i === '') === -1 ? true : false
    setIsDisabled(result);
    console.log(isDisabled)
    return result;
  }

  const submitHandler = () => {
    Storage.setItem(storageKey, newItem);   
    closeModalHandler();
  }

  useEffect(() => {
    inputs.map((el: IInputDetails) => setNewItem({ ...newItem, [el?.id]: '' }))
  }, [])

  return (
    <div className={classes.Modal} style={styles}>
      <div onClick={() => closeModalHandler()} className={classes.CloseBtn}>
        <img src={icons.closeIcon} alt='close' />
      </div>
      {inputs.map((el: IInputDetails, index: number) => {
        return (
          <div className={classes.GroupInput} key={index}>
            <input
              className={classes.InputField}
              type={el?.type}
              id={el?.id}
              onChange={(e) => writeInputHandler(e, el)}
              onDrop={(e) => {
                e.preventDefault()
                return false
              }}
              autoComplete='off'
              onKeyDown={(e) => {
                if (!e.key.match(/[a-zA-Z0-9_]/)) {
                  e.preventDefault()
                }
              }}
              value={value}
            />
            <span className={classes.Highlight}></span>
            <span className={classes.Bar}></span>
            <label>{el?.placeholder}</label>
          </div>
        )
      })}
      <button className={classes.Button} onClick={submitHandler} disabled={!value}>
        {buttonName}
      </button>
    </div>
  )
}
