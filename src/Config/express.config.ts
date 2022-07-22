import cors from 'cors'
import express, { json, urlencoded } from "express"
import helmet from 'helmet'
import morgan from 'morgan'


const ExpressConfig = () => {
    const App = express()

    App.use(urlencoded({ extended: false }))
    App.use(json())

    App.use(cors({ credentials: true, origin: true }))
    App.use(helmet())
    App.use(morgan("dev"))


    return App
}

export default ExpressConfig