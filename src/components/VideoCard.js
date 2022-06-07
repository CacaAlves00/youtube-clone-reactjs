import React from 'react'
import Avatar from '@material-ui/core/Avatar'

import './VideoCard.css'

function VideoCard({ title, views, channel, timestamp, channelImage, thumbnail }) {
  return (
    <div className='video-card'>
      <img className='thumbnail' src={thumbnail} alt='' />

      <div className='info'>
        <Avatar className='avatar' alt={channel} src={channelImage} />

        <div className='video-text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} * {timestamp}</p>
        </div>

      </div>

    </div>
  )
}

export default VideoCard