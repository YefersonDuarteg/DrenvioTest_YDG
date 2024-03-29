import React from 'react'
import { Video } from '../../interfaces/intServices/Video'
import ReactPlayer from 'react-player'
import '../../css/videoItem.css'
import {useNavigate } from 'react-router-dom'
import * as videoService from '../../services/VideoService'

interface Props {
	video: Video,
	loadVideos: () =>void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
	
	const navigate = useNavigate();

	const handleDelete = async (id : string ) =>{
		await videoService.deleteVideo(id)
		loadVideos()
	}

	return (
		<div className='col-md-4'>
			<div className="card card-body mb-3 video-card">
				<div className="d-flex justify-content-between">
					<h1
					onClick={() => navigate(`/update/${video._id}`)}
					>{video.title}</h1>
					<span 
					className="text-danger"
					onClick={() => video._id && handleDelete(video._id) }
					>X</span>
				</div>
				<p>{video.description}</p>
				<div className="embed-responsive embed-responsive-16by9">
					<ReactPlayer url={video.url} width="100%" height="100%" />
				</div>
			</div>
		</div>
	)
}

export default VideoItem