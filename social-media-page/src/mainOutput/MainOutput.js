import React from 'react'
import MainPage from '../mainPage/MainPage'
import Activities, { FriendRequest } from '../activities/Activities'
import News from '../news/News'
import '../mainOutput/mainOutput.css'


const MainOutput = () => {

  return (
    <div className='main-output-div '>
      <div className='main-active-news' >
        <div className='main-page-2'>
          <MainPage />
        </div>

        <div className='active-news'>
          <div className='activity-pages' >
            <Activities />
          </div>
          <div className='news-page' >
            <News />
          </div>
          <div className='request-pages' >
            <FriendRequest />
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainOutput



