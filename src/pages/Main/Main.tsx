import React, { useRef, useState } from 'react'
import { Route, Routes, BrowserRouter,  Link  } from 'react-router-dom'
import { Board, NotFoundPage, BoardList } from '../index';
import { icons } from '../../settings'

import classes from './Main.module.scss'

export const Main = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [searchValue, setSearchValue] = useState<string>('')

  const clickHandler = () => inputRef.current && inputRef.current.focus()

  return (
    <BrowserRouter>
      <div className={classes.Main}>
        <header className={classes.Header}>
          <div className={classes.Logo}>
            <p>Tasker</p>
          </div>
          <div className={classes.Search}>
            <img
              className={classes.Icon}
              src={icons.searchIcon}
              alt='searchIcon'
              onClick={clickHandler}
            />
            <input
              className={classes.Input}
              ref={inputRef}
              type='text'
              placeholder='Search for tasks...'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              maxLength={50}
            />
          </div>
        </header>
        <div className={classes.MainContainer}>
          <nav className={classes.NavBar}>
            <Link to='/'>
              <img src={icons.boardIcon} alt='boardIcon' />
              <p>Boards</p>
            </Link>
            <Link to='/board'>
              <img src={icons.taskIcon} alt='taskIcon' />
              <p>New Task</p>
            </Link>
          </nav>
          <main className={classes.Context}>
            <Routes>
              <Route path='/' element={<BoardList/>}></Route>
              <Route path='/board' element={<Board />}></Route>
              <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}
