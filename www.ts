#!/usr/bin/env node

//import http from 'http'
import Server from './server'
import App from './app'

const app = new App();
const server = new Server(app.instance)
server.start()
