require('coffee-script/register')
validateHook = require('./helpers/validate')
readData = require('./helpers/readMessage')
sendMessage = require('./helpers/sendMessage')

class FBMessenger {
  
  constructor (token) {
    this.token = token
  }

  validate (msg, verif_token, callback){
    validateHook.validate(msg, verif_token, function(err, data){
      if(err)
        callback(err)
      callback(null, data)
    })
  }

  read (msg, callback){
    readData.read(msg, function(err, data){
      if(err)
        callback(err)
      callback(null, data)
    })
  }

}

export default FBMessenger
