module.exports.home = function(application, req, res)
{
    res.render('../app/view/index',{validacao:{}})
}