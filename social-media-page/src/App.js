import React from 'react'
import LoginPage from './loginPage/LoginPage'
import '../src/App.css'
import MainOutput from './mainOutput/MainOutput'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Video, Community, Group, Game } from './pages/Pages'
import WithNavbar from './layout/WithNavbar'
import WithoutNavbar from './layout/WithoutNavbar'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutNavbar />}>
            <Route path='/' element={<LoginPage />} />
          </Route>
          <Route element={<WithNavbar />}>
            <Route path='/mainoutput' element={<MainOutput />} />
            <Route path='/mainoutput' element={<MainOutput />} />
            <Route path='/video' element={<Video />} />
            <Route path='/community' element={<Community />} />
            <Route path='/group' element={<Group />} />
            <Route path='/game' element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App