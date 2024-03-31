import config from './config';
import mongoose, {ConnectOptions} from 'mongoose'

export async function connectDB() {
    const URI = `${config.MONGO_SCHEME}://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DATABASE}?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`
    mongoose.connect(URI)
    .then(
        ()=>{
            console.log('connection db ready')
        },
        (err) =>{
            console.log('connection db error - ', err)
        }
    )
}