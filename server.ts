#!/usr/bin/env node

import app from './app'
import http from 'http'
import App from './app'

export default class Server{

public port: number | boolean
public app: any

constructor(app: any){
  this.port = this._normalizePort(process.env.PORT || 1234)
  this.app = app
}

//app.set('port', this.port)

public start() : void{
  this.app.set('port',this.port)
  const server = http.createServer(this.app)
  server.listen(this.port)
  server.on('error', (error) => this._onError(error))
  server.on('listening', () => this._onListening())
}

protected _normalizePort(value: any): number | boolean {
  const port = parseInt(value, 10)

  if (isNaN(port)) {
    return value
  }

  if (port >= 0) {
    return port
  }

  return false
}

protected _onError(error: any): never {
  if (error.syscall !== 'listen') {
    throw error
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`${this.port} requires elevated privileges`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`${this.port} is already in use`)
      process.exit(1)
    default:
      throw error
  }
}

protected _onListening(): void {
  console.log(`Listening on ${this.port}`)
}
}