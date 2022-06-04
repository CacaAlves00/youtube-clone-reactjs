import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>

        <MenuIcon className='header__menu-icon'/>

        <img
          className='header__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
          alt='Youtube icon'
        />
      </div>

      <div className='header__input'>
        <input type='text' placeholder='Search'/>
        <SearchIcon className='header__search-icon' />
      </div>

      <div className='header__icons'>
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />

        <Avatar
          alt='Avatar picture'
          src='https://yt3.ggpht.com/IQ7IbVqRyT5ab3JE_wAD33HVRYkDSl9-nbp75rkn6j8mbF7nwwoVEYH54P-Qj-VltshH1UEIsCQ=s88-c-k-c0x00ffffff-no-rj-mo'
        />
      </div>
    </div>
  )
}

export default Header