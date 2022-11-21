import React, { useState } from 'react'
import '../activities/activities.css'
import { FaUserFriends } from 'react-icons/fa'
import { GiSave } from 'react-icons/gi'
import { MdGroup, MdLiveTv, MdEvent, MdRecentActors } from 'react-icons/md'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { GrHistory } from 'react-icons/gr'
import { AiFillFlag } from 'react-icons/ai'
import { BiSearchAlt2, BiVideoPlus } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'



const Activities = () => {

    const [shows, setShows] = useState(false)

    return (
        <div className='all-active'  >
            <div className='sg-div'>
                <img className='img-div' src='./my-pic/sergio.jpg' alt='' />
                <p>Sergio Gomez</p>
            </div>
            <div className='icons-div'>
                <div className='icon-div-flex'>
                    <FaUserFriends className='all-icons' />
                    <p>Friends</p>
                </div>
                <div className='icon-div-flex'>
                    <GiSave className='all-icons' />
                    <p>Saved</p>
                </div>
                <div className='icon-div-flex'>
                    <MdGroup className='all-icons' />
                    <p>Groups</p>
                </div>
                <div className='icon-div-flex'>
                    <SiHomeassistantcommunitystore className='all-icons' />
                    <p>Marketplace</p>
                </div>
                <div className='icon-div-flex'>
                    <MdLiveTv className='all-icons' />
                    <p>Watch</p>
                </div>
                <div className='icon-div-flex'>
                    <GrHistory className='all-icons' />
                    <p>Memories</p>
                </div>
                <div className='icon-div-flex'>
                    <AiFillFlag className='all-icons' />
                    <p>Pages</p>
                </div>
                <div className='icon-div-flex'>
                    <MdEvent className='all-icons' />
                    <p>Events</p>
                </div>
                <div className='icon-div-flex'>
                    <MdRecentActors className='all-icons' />
                    <p>Most</p>
                </div>
                {shows &&
                    <div className='' style={{ display: 'inline-block' }}>
                        <div className='icon-div-flex'>
                            <FaUserFriends className='all-icons' />
                            <p>Friends</p>
                        </div>

                        <div className='icon-div-flex'>
                            <GiSave className='all-icons' />
                            <p>Saved</p>
                        </div>
                        <div className='icon-div-flex'>
                            <SiHomeassistantcommunitystore className='all-icons' />
                            <p>Marketplace</p>
                        </div>
                    </div>
                }
                <button className='showmore-btn' onClick={() => setShows(!shows)} >{shows ? 'See Less ' : 'See more'}</button>
            </div>
        </div>
    )
}

export default Activities



export const FriendRequest = () => {
    return (
        <div className='request-contact' >
            <div className='request'>
                <span>
                    <h4>Friend request </h4>
                    <p >See all</p>
                </span>
                <div className='request-list' >
                    <img className='request-img' src='./my-pic/sergio.jpg' alt='' />
                    <h3>John Martins</h3>
                    <p> 3d</p>
                </div>
                <div className='confirm-btn'>
                    <button className='confirm'>Confirm</button>
                    <button className='delete'>Delete</button>
                </div>
            </div>
            <div className='contacts'>
                <span className='contact-icons'>
                    <h3>Contacts</h3>
                    <BiVideoPlus style={{ fontSize: '15px', marginLeft: '.5em' }} />
                    <BiSearchAlt2 style={{ fontSize: '15px', marginLeft: '-2em' }} />
                    <FiMoreHorizontal style={{ fontSize: '15px', marginLeft: '-2em' }} />
                </span>
                <div className='contact-list'>
                    <span className='contact-list-flex' >
                        <img className='contact-list-images' src='./my-pic/sergio.jpg' alt='' />
                        <p>Olamilekan Rasheed</p>
                        <span className='isOnline' ></span>
                    </span>
                    <span className='contact-list-flex' >
                        <img className='contact-list-images' src='./my-pic/wallpaper-preview-1.jpg' alt='' />
                        <p>Olamilekan Rasheed</p>
                        <span className='isOnline' ></span>
                    </span>
                    <span className='contact-list-flex' >
                        <img className='contact-list-images' src='./my-pic/wallpaper-preview-2.jpg' alt='' />
                        <p>Olamilekan Rasheed</p>
                        <span className='isOnline' ></span>
                    </span>
                    <span className='contact-list-flex' >
                        <img className='contact-list-images' src='./my-pic/wallpaper-preview-3.jpg' alt='' />
                        <p>Olamilekan Rasheed</p>
                        <span className='isOnline' ></span>
                    </span>
                    <span className='contact-list-flex' >
                        <img className='contact-list-images' src='./my-pic/sergio.jpg' alt='' />
                        <p>Olamilekan Rasheed</p>
                        <span className='isOnline' ></span>
                    </span>
                    <span className='contact-list-flex' >
                        <img className='contact-list-images' src='./my-pic/wallpaper-preview-1.jpg' alt='' />
                        <p>Olamilekan Rasheed</p>
                        <span className='isOnline' ></span>
                    </span>
                    <span className='contact-list-flex' >
                        <img className='contact-list-images' src='./my-pic/wallpaper-preview-2.jpg' alt='' />
                        <p>Olamilekan Rasheed</p>
                        <span className='isOnline' ></span>
                    </span>
                    <span className='contact-list-flex' >
                        <img className='contact-list-images' src='./my-pic/wallpaper-preview-3.jpg' alt='' />
                        <p>Olamilekan Rasheed</p>
                        <span className='isOnline' ></span>
                    </span>
                    <span className='contact-list-flex' >
                        <img className='contact-list-images' src='./my-pic/sergio.jpg' alt='' />
                        <p>Olamilekan Rasheed</p>
                        <span className='isOnline' ></span>
                    </span>
                    <span className='contact-list-flex' >
                        <img className='contact-list-images' src='./my-pic/wallpaper-preview-2.jpg' alt='' />
                        <p>Olamilekan Rasheed</p>
                        <span className='isOnline' ></span>
                    </span>
                </div>
            </div>
        </div>
    )
}