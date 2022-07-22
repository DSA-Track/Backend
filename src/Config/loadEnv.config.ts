import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';


const loadEnv = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    config({ path: path.join(__dirname, "..", ".env") })
    console.log("Environment Variables Loaded")
}

export default loadEnv