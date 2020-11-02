import App from "./app"
import Server from "./server"

const app = new App()
const server = new Server(app.instance)
server.start()
