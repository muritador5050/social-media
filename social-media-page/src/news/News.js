import React, { useReducer, useState } from 'react'
import '../news/news.css'
import { MdEmojiEmotions } from 'react-icons/md'
import { FaShare, FaVideo } from 'react-icons/fa'
import { BiLike, BiVideoPlus } from 'react-icons/bi'
import { GrGallery } from 'react-icons/gr'
import { FiMoreHorizontal } from 'react-icons/fi'
import { VscComment } from 'react-icons/vsc'
import { FaPlus } from 'react-icons/fa'
// import {FcNext} from 'react-icons/fc'



const TOGGLING = {
  FIRST_STATE: "FIRST-STATE",
  SECOND_STATE: "SECOND-STATE",
  THIRD_STATE: "THIRD-STATE"
}

const News = () => {


  function reducer(state, action) {
    switch (action.type) {
      case TOGGLING.FIRST_STATE:
        return { firstState: !state.firstState };
      case TOGGLING.SECOND_STATE:
        return { secondState: !state.secondState };
      case TOGGLING.THIRD_STATE:
        return { thirdState: !state.thirdState };
      default: return { state }
    }
  }


  const [comment, setComment] = useState("")

  function handleComment(e) {
    e.preventDefault()
    setComment(e.target.value)
  }

  const [state, dispatch] = useReducer(reducer, { firstState: false, secondState: false, thirdState: false })

  const createLikes = state.firstState ? '1Likes' : null
  const createLikes_2 = state.secondState ? '1Likes' : null
  const createLikes_3 = state.thirdState ? '1Likes' : null


  return (
    <div className='my-newspage '>

      <div className='padding-str'>
        <div className='str'>
          <p>Stories</p>
          <p>Reels</p>
          <p>Rooms</p>
        </div>
        <div className='newsfeed'>

          <div className='stories-1'>
            <div className='stories-1-img'>
              <FaPlus className='fa-plus' />
            </div>
            <p className='create-story-paragraph' >Create story</p>
          </div>

          <div className='stories-block  stories-block-1' >
            <div className='absolute-img absolute-img-1'></div>
          </div>

          <div className='stories-block  stories-block-2' >
            <div className='absolute-img absolute-img-2'></div>
          </div>

          <div className='stories-block stories-block-3' >
            <div className='absolute-img  absolute-img-3'></div>
          </div>

          <div className='stories-block  stories-block-4' >
            <div className='absolute-img  absolute-img-4'></div>
          </div>
          {/* <span className='fc-next'><FcNext style={{backgroundColor:"transparent"}} /></span> */}
          <div className='stories-block  stories-block-1' >
            <div className='absolute-img absolute-img-1'></div>
          </div>

          <div className='stories-block  stories-block-2' >
            <div className='absolute-img absolute-img-2'></div>
          </div>

          <div className='stories-block stories-block-3' >
            <div className='absolute-img  absolute-img-3'></div>
          </div>

          <div className='stories-block  stories-block-4' >
            <div className='absolute-img  absolute-img-4'></div>
          </div>
        </div>
      </div>
      <div className='on-mind'>
        <div className='span-class'>
          <input className='what-input' placeholder="What's on your mind, Dude?" />
        </div>
        <hr className='hr-middle'></hr>
        <div className='live'>
          <p className='live-icons' >< FaVideo className='lv-icons' />Live Video</p>
          <p className='live-icons' ><GrGallery className='lv-icons' /> Photo/Video </p>
          <p className='live-icons' >< MdEmojiEmotions className='lv-icons' /> Feeling/activity</p>
        </div>
      </div>
      <div className='create-room'>
        <button className='create-room-btn'><BiVideoPlus className='lv-icons' />Create room</button>
        <div className='create-room-stories' ></div>
        <div className='create-room-stories' ></div>
        <div className='create-room-stories' ></div>
        <div className='create-room-stories' ></div>
        <div className='create-room-stories' ></div>
      </div>

      <div className='scrolling-page'>
        <div className='scrolling-details'>
          <div className='scroll-heading'>
            <div className='scroll-pic'>
              <img className='scroll-pic-img' src='../my-pic/wallpaper-preview-1.jpg' alt='' />
            </div>
            <p className='scroll-web'>YabaLeftOnline.com</p>
            <FiMoreHorizontal className='fi-horizontal' />
          </div>
          <p style={{ background: 'transparent', paddingLeft: '10px', paddingRight: '10px' }} >
            The world is full of stories!,
            The world is full of stories!
            The world is full of stories!
          </p>
          <div className='scroll-img'></div>
          <div className='likes-comment'>
            <div className='like-emj'>
              <BiLike className='bi-like' />
              <MdEmojiEmotions className='md-emj' />
            </div>
            <div className='comment-share'>
              <p style={{ background: 'transparent' }} > 346 Comments</p>
              <p style={{ background: 'transparent' }} > 204 Shares </p>
            </div>
          </div>
          <hr style={{ color: '#ddd', margin: '.5em' }} ></hr>
          <div className='three-icons'>
            <p className='three-icons-dsgn' >
              <BiLike data="tog_likes" onClick={() => dispatch({ type: TOGGLING.FIRST_STATE })} style={{ color: state.firstState ? 'blue' : 'black', fontSize: '15px', background: 'transparent', cursor: 'pointer' }} />
              {createLikes}
            </p>
            <p className='three-icons-dsgn' >
              <VscComment style={{ fontSize: '15px', background: 'transparent', cursor: 'pointer' }} />
             
            </p>
            <p className='three-icons-dsgn' >
              <FaShare style={{ fontSize: '15px', background: 'transparent' }} />

            </p>
          </div>
        </div>
        <div className='scrolling-details'>
          <div className='scroll-heading'>
            <div className='scroll-pic'>
              <img className='scroll-pic-img' src='../my-pic/wallpaper-preview-1.jpg' alt='' />
            </div>
            <p className='scroll-web'>YabaLeftOnline.com</p>
            <FiMoreHorizontal className='fi-horizontal' />
          </div>
          <p style={{ background: 'transparent', paddingLeft: '10px', paddingRight: '10px' }} >
            The world is full of stories!
            The world is full of stories!
            The world is full of stories!
          </p>
          <div className='scroll-img'></div>
          <div className='likes-comment'>
            <div className='like-emj'>
              <BiLike className='bi-like' />
              <MdEmojiEmotions className='md-emj' />
            </div>
            <div className='comment-share'>
              <p style={{ background: 'transparent' }} >346 Comments</p>
              <p style={{ background: 'transparent' }} >204 Shares</p>
            </div>
          </div>
          <hr style={{ color: '#ddd', margin: '.5em' }} ></hr>
          <div className='three-icons'>
            <p className='three-icons-dsgn' >
              <BiLike onClick={() => dispatch({ type: TOGGLING.SECOND_STATE })} style={{ color: state.secondState ? 'blue' : 'black', fontSize: '15px', background: 'transparent', cursor: 'pointer' }} />
              {createLikes_2}
            </p>
            <p className='three-icons-dsgn' >
              <VscComment style={{ fontSize: '15px', background: 'transparent' }} />
              {/* {createComment} */}
            </p>
            <p className='three-icons-dsgn' >
              <FaShare style={{ fontSize: '15px', background: 'transparent' }} />

            </p>
          </div>
        </div>
        <div className='scrolling-details'>
          <div className='scroll-heading'>
            <div className='scroll-pic'>
              <img className='scroll-pic-img' src='../my-pic/wallpaper-preview-1.jpg' alt='' />
            </div>
            <p className='scroll-web'>YabaLeftOnline.com</p>
            <FiMoreHorizontal className='fi-horizontal' />
          </div>
          <p style={{ background: 'transparent', paddingLeft: '10px', paddingRight: '10px' }} >
            The world is full of stories!
            The world is full of stories!
            The world is full of stories!
          </p>
          <div className='scroll-img'></div>
          <div className='likes-comment'>
            <div className='like-emj'>
              <BiLike className='bi-like' />
              <MdEmojiEmotions className='md-emj' />
            </div>
            <div className='comment-share'>
              <p style={{ background: 'transparent' }} >346 Comments</p>
              <p style={{ background: 'transparent' }} >204 Shares</p>
            </div>
          </div>
          <hr style={{ color: '#ddd', margin: '.5em' }} ></hr>
          <div className='three-icons'>
            <p className='three-icons-dsgn' >
              <BiLike onClick={() => dispatch({ type: TOGGLING.THIRD_STATE })} style={{ color: state.thirdState ? 'blue' : 'black', fontSize: '15px', background: 'transparent', cursor: 'pointer' }} />
              {createLikes_3}
            </p>
            <p className='three-icons-dsgn' >
              <VscComment style={{ fontSize: '15px', background: 'transparent' }} />
              {/* {createComment} */}
            </p>
            <p className='three-icons-dsgn' >
              < FaShare style={{ fontSize: '15px', background: 'transparent' }} />

            </p>
          </div>
        </div>
        <div className='people-you-may-know'>
          <span className='people-you-may-know-icon'>
            <h4>People You May Know</h4>
            <FiMoreHorizontal style={{ fontSize: '15px', background: 'transparent ' }} />
          </span>
          <div className='add-freinds-box'>
            <div className='add-friends'>
              <div className='add-friends-img-1' >  </div>
              <p className='friend-name' >Princess Olawale</p>
              <div className='flex-abs' >
                <img className='abs-img' src='./my-pic/wallpaper-preview-1.jpg' alt='' />
                <img className='abs-img-1' src='./my-pic/wallpaper-preview-2.jpg' alt='' />
                <p>42&nbsp; mutual friends</p>
              </div>
              <button className='add-friend-button' >Add Friend</button>
            </div>
            <div className='add-friends'>
              <div className='add-friends-img-2' > </div>
              <p className='friend-name' >Princess Olawale</p>
              <div className='flex-abs'>
                <img className='abs-img' src='./my-pic/wallpaper-preview-1.jpg' alt='' />
                <img className='abs-img-1' src='./my-pic/wallpaper-preview-2.jpg' alt='' />
                <p style={{ background: 'transparent' }} >42&nbsp; mutual friends</p>
              </div>
              <button className='add-friend-button' >Add Friend</button>
            </div>
            <div className='add-friends'>
              <div className='add-friends-img-3' ></div>
              <p className='friend-name'  >Princess Olawale</p>
              <div className='flex-abs'>
                <img className='abs-img' src='./my-pic/wallpaper-preview-1.jpg' alt='' />
                <img className='abs-img-1' src='./my-pic/wallpaper-preview-2.jpg' alt='' />
                <p style={{ background: 'transparent' }} >42&nbsp; mutual friends</p>
              </div>
              <button className='add-friend-button' >Add Friend</button>
            </div>
            <div className='add-friends'>
              <div className='add-friends-img-4'></div>
              <p className='friend-name' >Princess Olawale</p>
              <div className='flex-abs'>
                <img className='abs-img' src='./my-pic/wallpaper-preview-1.jpg' alt='' />
                <img className='abs-img-1' src='./my-pic/wallpaper-preview-2.jpg' alt='' />
                <p>42&nbsp; mutual friends</p>
              </div>
              <button className='add-friend-button' >Add Friend</button>
            </div>
            <div className='add-friends'>
              <div className='add-friends-img-5' ></div>
              <p className='friend-name' >Princess Olawale</p>
              <div className='flex-abs'>
                <img className='abs-img' src='./my-pic/wallpaper-preview-1.jpg' alt='' />
                <img className='abs-img-1' src='./my-pic/wallpaper-preview-2.jpg' alt='' />
                <p>42&nbsp; mutual friends</p>
              </div>
              <button className='add-friend-button' >Add Friend</button>
            </div>
            <div className='add-friends'>
              <div className='add-friends-img-6' ></div>
              <p className='friend-name' >Princess Olawale</p>
              <div className='flex-abs'>
                <img className='abs-img' src='./my-pic/wallpaper-preview-1.jpg' alt='' />
                <img className='abs-img-1' src='./my-pic/wallpaper-preview-2.jpg' alt='' />
                <p>42&nbsp; mutual friends</p>
              </div>
              <button className='add-friend-button' >Add Friend</button>
            </div>
            <div className='add-friends'>
              <div className='add-friends-img-7'></div>
              <p className='friend-name' >Princess Olawale</p>
              <div className='flex-abs'>
                <img className='abs-img' src='./my-pic/wallpaper-preview-1.jpg' alt='' />
                <img className='abs-img-1' src='./my-pic/wallpaper-preview-2.jpg' alt='' />
                <p>42&nbsp; mutual friends</p>
              </div>
              <button className='add-friend-button' >Add Friend</button>
            </div>
            <div className='add-friends'>
              <div className='add-friends-img-8'> </div>
              <p className='friend-name' >Princess Olawale</p>
              <div className='flex-abs'>
                <img className='abs-img' src='./my-pic/wallpaper-preview-1.jpg' alt='' />
                <img className='abs-img-1' src='./my-pic/wallpaper-preview-2.jpg' alt='' />
                <p>42&nbsp; mutual friends</p>
              </div>
              <button className='add-friend-button' >Add Friend</button>
            </div>
          </div>
        </div>

        <div className='reels-video'>
          <span className='people-you-may-know-icon'>
            <h4>Reels and short videos</h4>
            <FiMoreHorizontal style={{ fontSize: '15px', backgroundColor: 'transparent' }} />
          </span>
          <div className='view-reels' >
            <div className='reels'>
              <video className='show-video' src="video.mp3" width={"150px"} height='260px' controls />
            </div>
            <div className='reels'>
              <video className='show-video' src="video.mp3" width={"150px"} height='260px' controls />
            </div>
            <div className='reels'>
              <video className='show-video' src="video.mp3" width={"150px"} height='260px' controls />
            </div>
            <div className='reels'>
              <video className='show-video' src="video.mp3" width={"150px"} height='260px' controls />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default News