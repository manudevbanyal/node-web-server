

const express = require('express');
const bodyParser= require('body-parser');

const hbs = require('hbs');

const app = express();
const port = process.env.PORT ||3000;

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
// app.set('views',__dirname+'/views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/banyal',express.static(__dirname+'/public'));

hbs.registerHelper('getfullYear',()=>{
    return new Date().getFullYear();
});
 const mymiddleWare = (req,res,next)=>{
    res.render('maintance');
 }

 app.get('/',mymiddleWare,(req,res)=>{
    res.render('about',{title:'hello banyal'})

 })




// app.get('/data',(req,res)=>{
// res.render('data',{
//     title:'CREATE NEW USER'
// });
// })

// app.post('/data',(req,res)=>{
// res.render('getData',{
//     user:req.body
// })
// })
// app.get('/',(req,res)=>{
//     res.render('home',{
//         title:'DATA COMING FROM THE SERVER...'
//     })
// });
// app.get('/about',(req,res)=>{
//    res.render('about',{
//        title:'to know the abc of node app'
//    });
// });


// app.get('/bad',(req,res)=>{
//     res.send({
//         title:'unable to fetch data from the given url....'
//     })
// });


// app.get('/json',(req,res)=>{
//     res.json({title:'i m from json data....'})
// })







app.listen(port,()=>{
console.log(`you are connected to the server..on port. ${port}`)
});
