const express = require('express');
const ejs= require('ejs');
const port = 8000;
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("Assets"));
app.set('views' ,path.join(__dirname, 'views'))
app.use(express.urlencoded())


var tasks=[]

app.get('/',(req, res) =>{
    res.render('index',{
        title:"To Do List ",
        heading:"To do app ",
        Tasks: tasks,
    } )
})
app.post('/add', (req, res)=>{
    tasks.push(req.body);
    return res.redirect('/');

})
// this is the example of the string param which is used to delete the content 
// app.get('/delete/:work',(req, res)=>{
//     console.log(req.params);

// })
// this id the example of the string param which is used to delete the content 
app.get('/delete/', (req, res)=>{
    // console.log(req.query);
    console.log(req.query.work)
    let DeleteWork = req.query.work;
    DeleteWork= decodeURIComponent(DeleteWork);
    console.log(DeleteWork)

    let workIndex = tasks.findIndex(e=> e.work== DeleteWork);

    if (workIndex!=-1){
        tasks.splice(workIndex,1);
    }
    return res.redirect('back');
})


app.listen(port , (err)=>{
    if (err){
        console.log("Error in Server creation");
    }
    else{
        console.log("Port Successfully running on ", port);
    }
})