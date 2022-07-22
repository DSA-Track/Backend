import ExpressConfig from './Config/express.config.js';
import loadEnv from './Config/loadEnv.config.js';
import connectMongo from './Config/mongoose.config.js';
import PublicRouter from "./Routes/public.routes.js";

process.env.NODE_ENV !== "production" && loadEnv()

const PORT = process.env.PORT || 5000

const App = ExpressConfig()

App.use("/", PublicRouter)

App.listen(PORT, () => console.log(`Server running on PORT:${PORT}`))

await connectMongo();
