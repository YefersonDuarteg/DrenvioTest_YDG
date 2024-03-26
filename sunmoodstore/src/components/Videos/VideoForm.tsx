import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Video } from "./Video";
import * as videoService from './VideoService'
import {toast} from 'react-toastify';
import {useNavigate, useParams } from 'react-router-dom'


type inputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

// interface Params{
// 	id: string;
// }

const VideoForm = () => {

	const navigate = useNavigate();
	const params = useParams();

	const initalState = {
		title: "",
		description: "",
		url: ""
	}

	const [video, setVideo] = useState<Video>(initalState)

	const handelInputChange = (e: inputChange) => {
		setVideo({ ...video, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		if(params.id){
			videoService.updateVideo(params.id,video);
			toast.info("Updeting video", {theme: "colored"});
		}
		else{
			videoService.createVideo(video);
			toast.success("New video added", {theme: "colored"});
			setVideo(initalState);
		}
		navigate("/")
	}

	const getVideo = async (id:string) =>{
		const res = await videoService.getVideo(id)
		const {title, description, url} = res.data;
		setVideo({title, description, url})
	}

	useEffect(() => {
	  if(params.id) getVideo(params.id)
	})
	

	return (
		<div className="row">
			<div className="col-md-4 offset-md-4">
				<div className="card">
					<div className="card-body">
						<h3>New Video</h3>

						<form onSubmit={handleSubmit}>
							<div className="input-group mb-3">
								<input
									type="text"
									name="title"
									placeholder="Write a title for this video"
									className="form-control"
									onChange={handelInputChange}
									value={video.title}
									autoFocus
								></input>
							</div>
							<div className="input-group mb-3">
								<input
									type="text"
									name="url"
									placeholder="https://somesite.com"
									className="form-control"
									value={video.url}
									onChange={handelInputChange}
								></input>
							</div>
							<div className="input-group mb-3">
								<textarea
									name="description"
									rows={3}
									className="form-control"
									placeholder="Write a description"
									value={video.description}
									onChange={handelInputChange}
								></textarea>
							</div>
							{
								params.id?
								<button className="btn btn-info">Update Video</button>
								:
								<button className="btn btn-primary">Create Video</button>
							}
							
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoForm;
