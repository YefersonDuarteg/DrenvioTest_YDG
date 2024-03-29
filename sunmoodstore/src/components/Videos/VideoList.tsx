import React, { useEffect, useState } from 'react'
import {Video} from '../../interfaces/intServices/Video'
import * as videoService from '../../services/VideoService'
import VideoItem from './VideoItem'

const VideoList = () => {

  const [videos, setVideos] = useState<Video[]>([])

  const loadVideos = async () =>{
    const res = await videoService.getVideos()

    const formateVideos =  res.data.map(video =>{
      return{
        ...video,
        createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
        updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
      }
    })
    .sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime())

    setVideos(formateVideos);
  }

  useEffect(() => {
    loadVideos()
  }, [])
  

  return (
    <div className='row'>
        {videos.map((video) =>{
          return <VideoItem video={video} key={video._id} loadVideos={loadVideos}></VideoItem>
        })}
    </div>
  )
}

export default VideoList