import axios from 'axios'
import { Video } from './Video'

const API = 'http://localhost:5000'

export const getVideos = async () =>{
    return await axios.get<Video[]>(`${API}/videos`)
}

export const getVideo = async (id: string) =>{
    return await axios.get(`${API}/videos/${id}`)
}

export const createVideo = async (video: Video) =>{
    return await axios.post(`${API}/videos`, video)
}

export const updateVideo = async (id: String, video:Video) =>{
    return await axios.put<Video[]>(`${API}/videos/${id}`, video)
}

export const deleteVideo = async (id: String) =>{
    return await axios.delete<Video[]>(`${API}/videos/${id}`)
}
