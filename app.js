/**
 * Importar configurações do servidor
 */

 var app = require('../chat/config/server')

 /**
  * parametrizar a porta de escuta
  */


  var server = app.listen(8000, function(){
      console.log("Server ON!!")
  })

  var io = require('socket.io').listen(server)

  /**Criar a conexão por websocket */
  io.on('connection',function(socket){
      console.log('Usuário conectou!')

      socket.on('disconnect',function(){
          console.log('Usuário desconectou')
      })
  })