import Video from '../models/Video'

const serviceGetVideos = async () =>{
    const videos = await Video.find()
    return videos
}

const serviceGetVideo = async (id : string) =>{
    const video =  await Video.findById(id)
    return video
}

export { serviceGetVideos, serviceGetVideo}