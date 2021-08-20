'use strict'

class WController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  async onMessage(data) {
    this.socket.broadcast("message", data)
    console.log(data)
  }
}

module.exports = WController
