import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../mainPage/mainPage.css'
import { BsFacebook } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdOutlineOndemandVideo, MdGroups, MdNotifications } from 'react-icons/md'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { GiGamepad } from 'react-icons/gi'
import { CgMenuGridO } from 'react-icons/cg'
import { FaFacebookMessenger } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa'
import Activities, { FriendRequest } from '../activities/Activities'



const MainPage = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [showRequest, setShowRequest] = useState(false)


  function showActivities() {
    return setShowMenu(prev => !prev)
  }

  function handleRequest() {
    return setShowRequest(prev => !prev)
  }

  return (
    <div className='main-page'>
      <div className='route-layout'>
        <div className='f-srch'>
          <BsFacebook className='bs-facebook' />
          <div className='b-i' >
            <BiSearchAlt2 className='bi-search' />
            <input className='search-input' type={'search'} placeholder='Search Facebook ' />
          </div>
        </div>

        <div className='hvg'>
          <Link className='link-svg' to={'/mainoutput'} >
            <AiFillHome className='transparent-icons display-hide ' />
          </Link>
          <Link className='link-svg' to={'/video'} >
            <MdOutlineOndemandVideo className='transparent-icons display-hide ' />
          </Link>
          <Link className='link-svg' to={'/community'} >
            <SiHomeassistantcommunitystore className='transparent-icons display-hide ' />
          </Link>
          <Link className='link-svg' to={'/group'} >
            <MdGroups className='transparent-icons display-hide ' />
          </Link>
          <Link className='link-svg' to={'/game'} >
            <GiGamepad className='transparent-icons game-pad' />
          </Link>
          <div className='dis-menu-copy' onClick={showActivities}> < FiMenu style={{ background: 'transparent' }} />
          </div>
        </div>
        <div className='mn'>
          <span className='plus-fa' onClick={handleRequest}> <FaPlus className='f-plus' /> </span>
          <CgMenuGridO className='last-icons  grid-last' />
          <FaFacebookMessenger className='last-icons' />
          <MdNotifications className='last-icons' />
          <img className='r-img' src='../my-pic/sergio.jpg' alt='' />
        </div>
      </div>
      <div>
        {showMenu && <div className='yarn-active'  > <Activities /> </div>}
      </div>
      <div>
        {showRequest && <div className='yarn-active'  > <FriendRequest /> </div>}
      </div>

    </div>
  )
}

export default MainPage