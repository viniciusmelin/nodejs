module.exports.iniciaChat = function(application, req, res)
{
    var dadosForm = req.body;
    req.assert('apelido','Nome ou apelido é obrigatório!').notEmpty()
    req.assert('apelido','Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,15)

    var erros = req.validationErrors();
    console.log(erros)
    if(erros)
    {
        res.render('../app/view/index',{validacao:erros})
        return;
    }
    res.render('../app/view/chat')
}