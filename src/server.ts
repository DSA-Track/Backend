import { config } from 'dotenv'
import ExpressConfig from './Config/express.config.js'
import PublicRouter from "./Routes/public.routes.js"

process.env.NODE_ENV !== "production" && config()

const PORT = process.env.PORT || 5000

const App = ExpressConfig()

App.use("/", PublicRouter)

App.listen(PORT, () => console.log(`Server running on PORT:${PORT}`))
