import React from 'react'
import useSideBarIcons from '../hooks/useSideBarIcons'
import './SideBar.css'
import SideBarRow from './SideBarRow'

function SideBar() {
    const sideBarIcons = useSideBarIcons()
  
    return (
    <div className='side-bar'>
        <SideBarRow Icon={sideBarIcons.Home} title='Home' selected />
        <SideBarRow Icon={sideBarIcons.Whatshot} title='Trending' />
        <SideBarRow Icon={sideBarIcons.Subscriptions} title='Subscription' />
        <hr style={{color: 'lightgray'}}/>

        <SideBarRow Icon={sideBarIcons.VideoLibrary} title='Library' />
        <SideBarRow Icon={sideBarIcons.History} title='History' />
        <SideBarRow Icon={sideBarIcons.OndemandVideo} title='Your videos' />
        <SideBarRow Icon={sideBarIcons.OndemandVideo} title='Watch later' />
        <SideBarRow Icon={sideBarIcons.WatchLater} title='Watch later' />
        <SideBarRow Icon={sideBarIcons.ThumbUpAltOutlined} title='Liked videos' />
        <SideBarRow Icon={sideBarIcons.ExpandMoreOutlined} title='Show more' />
        <hr style={{color: 'lightgray'}}/>

    </div>
  )
}

export default SideBar