const express = require('express');
const port = 8000;
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views' ,path.join(__dirname, 'views'))
app.use(express.urlencoded())


var tasks=[]

app.get('/',(req, res) =>{
    return res.render('index',{
        title:"To Do List ",
        heading:"Welcome to To Do List ",
        Tasks: tasks,
    } )
})
app.post('/add', (req, res)=>{
    tasks.push(req.body);
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