"use strict"
require('coffee-script/register')
var validateHook = require('./helpers/validate')
var readData = require('./helpers/readMessage')
//var sendMessage = require('./helpers/sendMessage')

var messenger = function FBMessenger(token){
  this.token = token
}
  
messenger.prototype.validate = function (msg, verif_token, callback){
  validateHook.validate(msg, verif_token, function(err, data){
    if(err)
      return callback(err)
    return callback(null, data)
  })
}

messenger.prototype.read = function (msg, callback){
  readData.read(msg, function(err, data){
    if(err)
      return callback(err)
    return callback(null, data)
  })
}

module.exports = new messenger()
