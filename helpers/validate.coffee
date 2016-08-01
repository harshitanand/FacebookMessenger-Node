async = require 'async'

class Validate

  validate: (msg, token, callback)->
    
    checkSubscribe = (_callback)->
      if msg.hub.mode is 'subscribe'
        _callback null
      else
        _callback "Not a Subscription"

    checkToken = (_callback)->
      if msg.hub.verify_token is token
        _callback null
      else
        _callback "Verify Token validation failed"

    async.waterfall [checkSubscribe, checkToken], (err)->
      if err
        callback err
      else
        callback null,"Sucessfully Validated Webhook"

module.exports = new Validate()
