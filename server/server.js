const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname,'./../dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post('/api/login', function(req,res){
    // console.log(req.body)
    var email = req.body.email;
    var pass = req.body.password;
    if(email === 'test@test.com' && pass === 'password'){
        res.status(200).send(true)
    }else{
        res.send(false)
    }
});

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, './../dist', 'index.html'))
})

var port = process.env.PORT || 8000;
app.listen(port,function(){
    console.log(`Server listening on port ${port}`);
})