import {Router} from  "express"
import {readdirSync}  from "fs"

const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (fileName : string) =>{
    const file = fileName.split('.').slice(0,2).toString().replace(',','.')
    return file 
}

const cleanFileNameFirts = (fileName : string) =>{
    const file = fileName.split('.').shift()
    return file 
}

readdirSync(PATH_ROUTER).filter((fileName)=>{
    const cleanNameFirts = cleanFileNameFirts(fileName)
    const cleanName = cleanFileName(fileName)
    if(cleanNameFirts !== "index"){
        import(`./${cleanName}`).then((moduleRouter)=>{
            router.use(`/${cleanNameFirts}`, moduleRouter.router)
        }) 
    }
})

export {router}