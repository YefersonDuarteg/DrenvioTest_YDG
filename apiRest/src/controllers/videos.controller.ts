import {RequestHandler} from 'express'
import Video from '../models/Video'
import * as services from '../services/video'


const getVideos : RequestHandler = async (req, res)=>{
    try {
        const videos = await services.serviceGetVideos()
        return res.json(videos)
    } catch (error) {
        res.json(error)        
    }
}

const getVideo : RequestHandler = async ( req, res)=>{
    try {
        const videoFound = await services.serviceGetVideo(req.params.id)
        if(!videoFound) return res.status(204).json()
        return res.json(videoFound)
    } catch (error) {
        res.json(error)        
    }
}

const createVideos : RequestHandler = async (req, res)=>{
    const videoFound = await Video.findOne({url: req.body.url})
    if(videoFound)
        return res.status(301).json({message: 'The URL already exist'})

    const video = new Video(req.body)
    const saveVideo = await video.save()
    res.json(saveVideo)
}

const updateVideo : RequestHandler = async (req, res)=>{
    try {
        const videoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!videoUpdate) return res.status(204).json()
        return res.json(videoUpdate)
    } catch (error) {
        res.json(error)
    }
}

const deleteVideo : RequestHandler = async (req, res)=>{
    try {
        const videoFound = await Video.findByIdAndDelete(req.params.id)
        if(!videoFound) return res.status(204).json()
        return res.json(videoFound)
    } catch (error) {
        res.json(error)
    }
}

export { getVideos, getVideo, createVideos, updateVideo, deleteVideo}