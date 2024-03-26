import mongoose, {ConnectOptions} from 'mongoose'
import config from './config';

(() => {
    // const mongooseOptions : ConnectOptions = {
    //     // useUnifiedTopology : true,
    //     // useNewUrlParser:true
    //     user : config.MONGO_USER,
    //     pass : config.MONGO_PASSWORD
    // }
    const URI = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DATABASE}`
    mongoose.connect(URI)
    .then(
        ()=>{
            console.log('connection db ready to use')
        },
        (err) =>{
            console.log('connection db error - ', err)
        }
    )
})()