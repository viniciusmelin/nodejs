module.exports = function(application){
    application.post('/chat',function(req,res){
        application.app.controller.chatController.iniciaChat(application,req,res)
    })

    application.get('/chat',function(req,res){
        application.app.controller.chatController.iniciaChat(application,req,res)
    })
}