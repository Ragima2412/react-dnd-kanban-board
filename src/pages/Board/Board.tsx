import React, { useEffect, useState } from 'react'
import classes from './Board.module.scss'
import { Backdrop } from '../../components/BackDrop/BackDrop'
import {  Modal, Task } from '../../components'
import { Storage } from '../../storage/storage'
import { useParams } from 'react-router-dom';

export const Board = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [tasks, setTasks] = useState<any>([])
  const url = useParams()

  const closeModalHandler = () => {
    setIsModalOpen(false)
  }
  useEffect(() => {
    const { tasks } = Storage.getAllData()
    const parentId = url.id && url.id.replace('id=', '')
    const tasksList = tasks.filter((task: any) => task.boardId === parentId)
    setTasks(tasksList)
  }, [isModalOpen])

  const handleShort = (item: any) => {
    alert(`${item.name} is Shorthair!`)
  }

  const handleLong = (item: any) => {
    alert(`${item.name} is Longhair!`)
  }
  return (
    <>
      {isModalOpen ? (
        <Backdrop>
          <Modal
            storageKey={Storage.TASKS_KEY}
            title='Create Board'
            styles={{ width: '60vh' }}
            inputs={[
              {
                title: 'Task name',
                type: 'text',
                id: 'name',
                placeholder: 'Task name',
                index: 1,
                styles: {},
                value: null,
              },
            ]}
            closeModalHandler={closeModalHandler}
            buttonName='Create'
          />
        </Backdrop>
      ) : (
        <div className={classes.Board}>
          <div className={classes.AddItem}>
            <p className={classes.Subtitle}>Create new task</p>
            <div className={classes.Submit} title={''} onClick={() => setIsModalOpen(true)}></div>
          </div>
          <div className={classes.Headings}>
            <div className={classes.Heading}>Query</div>
            <div className={classes.Heading}>Progress</div>
            <div className={classes.Heading}>Done</div>
          </div>
          <div className={classes.Columns}>
            <div className={classes.Column}>
              {tasks.map((task: any, index: number) => (
                <Task item={task} type='tasks' key={index} />
              ))}
            </div>
            <div className={classes.Column}>Col2</div>
            <div className={classes.Column}>Col3</div>
          </div>       
          <></>
        </div>
      )}
    </>
  )
}
