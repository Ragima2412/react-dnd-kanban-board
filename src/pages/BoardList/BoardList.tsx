import React, {  useEffect, useState } from 'react'
import classes from './BoardList.module.scss'
import { Backdrop, ItemWrapper, Modal } from '../../components/index'
import { Storage } from '../../storage/storage'
import { IBoard } from '../../types/types'

export const BoardList = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [boards, setBoards] = useState<IBoard[]>([]);

  const submitHandler = () => {
    setIsModalOpen(true)
  }

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

useEffect(() => {
  const { boards } = Storage.getAllData();
  setBoards(boards);
}, [isModalOpen]);

  return (
    <>
      {isModalOpen ? (
        <Backdrop>
          <Modal 
           storageKey={Storage.BOARDS_KEY}
           title='Create Board'          
           styles={{ width: '60vh'}}
           inputs={[
            {
              title: 'Board Name',
              type: 'text',
              id: 'name',
              placeholder: 'Board name',
              index: 1,
              styles: {},
              value :null
            },           
          ]}
          closeModalHandler={closeModalHandler}
          buttonName='Create'
          />
        </Backdrop>
      ) : (
        <div className={classes.BoardList}>
          <ItemWrapper title='Boards' action='Create board' handler={submitHandler} items={boards} />
        </div>
      )}
    </>
  )
}
