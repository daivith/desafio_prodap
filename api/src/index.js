const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const moment = require('moment');
moment().format(); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var DB = {
    pessoas: [

        {
            id: 1,
            nome: "Vitor hugo",
            cidade: "Macapá",
            data_nascimento: "22/04/1990"
        }
    ]
}
let contador = 1;

app.get("/pessoas", (req,res) => {
    res.statusCode = 200;
    res.json(DB.pessoas);
});

app.get("/pessoas/:id", (req,res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{

        let id = parseInt(req.params.id);

        let pessoa = DB.pessoas.find(g => g.id == id);

        if(pessoa != undefined){
            res.statusCode = 200;
            res.json(pessoa);
        }else{
            res.sendStatus(404);
        }        
    }
});

app.post("/pessoas", (req,res) => {
    let {nome, cidade, data_nascimento} = req.body;
    contador++;
    if(req.body.nome != undefined && req.body.cidade != undefined && req.body.data_nascimento != undefined){
        var isValid = moment(data_nascimento, "DD-MM-YYYY").isValid();
                if (!isValid){
                     return res.status(400).json({ msg: 'Data é inválida' })
                }else{
                    DB.pessoas.push({
                        id:contador,
                        nome,
                        cidade,
                        data_nascimento
                    });
                }
        res.sendStatus(200);
    }else{
        res.sendStatus(400);        
    }      
});

app.delete("/pessoas/:id", (req,res) =>{

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{

        let id = parseInt(req.params.id);
        let index = DB.pessoas.findIndex(g => g.id == id);

        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.pessoas.splice(index,1);
            return res.status(200).json({ msg: 'Sucesso' })
               
        }
    }
});

app.patch("/pessoas/:id", (req,res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{

        let id = parseInt(req.params.id);

        let pessoa = DB.pessoas.find(g => g.id == id);

        if(pessoa != undefined){

            let {nome, cidade, data_nascimento} = req.body;

            if(nome != undefined){
                pessoa.nome = nome;
            }

            if(cidade != undefined){
                pessoa.cidade = cidade;
            }

            if(data_nascimento != undefined){
                var isValid = moment(data_nascimento, "DD-MM-YYYY").isValid();
                if (!isValid){
                     return res.status(400).json({ msg: 'Data é inválida' })
                    }else{
                        pessoa.data_nascimento = data_nascimento;
                }                
            }
            res.sendStatus(200);
        }else{
            res.sendStatus(404);
        }        
    }
});

app.listen(3000, '0.0.0.0', () => {
    console.log('on port 3000');
})