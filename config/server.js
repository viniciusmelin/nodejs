
/* framework do nodejs*/
var express = require('express')
/* Responsavel por realizar os includes de classes e entre outros*/
var consign = require('consign')

/*Converter as informações de request para json*/
var bodyParser = require('body-parser')
/*Realiza a validação das informações*/
var expressValidator = require('express-validator')


/* Inicia objeto do express*/
var app = express()

/* setar as variaveis que a view engine e view do express*/
app.set('view engine','ejs')
app.set('View','./app/view')

/** Configurar o middleware express.static */
app.use(express.static('./app/public'))

/** Configurar o middleware body-parser*/
app.use(bodyParser.urlencoded({extended:true}))

/**Configurar o middleware express-validator */
app.use(expressValidator())

/**Efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
.include('app/route')
.then('app/model')
.then('app/controller')
.into(app)

module.exports = app