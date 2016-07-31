async = require 'async'

class ReadMessage

  read: (msg, callback)->

    validate = (_callback)->
      if msg.object is 'page'
        _callback null
      _callback "Message is not for page"

module.exports = new ReadMessage()
