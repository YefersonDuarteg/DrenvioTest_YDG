import config from './config';
import mongoose, {ConnectOptions} from 'mongoose'

(() => {
    const URI = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DATABASE}`
    mongoose.connect(URI)
    .then(
        ()=>{
            console.log('connection db ready')
        },
        (err) =>{
            console.log('connection db error - ', err)
        }
    )
})()