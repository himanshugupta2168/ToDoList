const express = require('express');
const ejs= require('ejs');
const path = require('path');
const task = require("./models/schema"); 
// const mongooose= require("mongoose");
const dbConnect = require("./config/database");

require("dotenv").config();
const port = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("Assets"));
app.use(express.json())
app.set('views' ,path.join(__dirname, 'views'))
app.use(express.urlencoded());


// var tasks=[]

app.get('/',async (req, res) =>{
    try{
        const tasks =await  task.find();
        res.render('index',{ 
            title:"To Do List ",
            heading:"To do app ",
            Tasks: tasks,
        } )   
    }
    catch{
        (err)=>{
            console.log("Unable to fetch data", err);
        }
    }
})
app.post('/add', async (req, res)=>{
    try{
        
        const work = await task.create(req.body);
        console.log("Data saved Successfully")
    }
    catch(error){
        console.log("nhi save hua data", error);

    }
    // tasks.push(req.body);
    return res.redirect('/');

})
// this is the example of the string param which is used to delete the content 
// app.get('/delete/:work',(req, res)=>{
//     console.log(req.params);

// })
// this id the example of the string param which is used to delete the content 
app.get('/delete/', async(req, res)=>{
    // console.log(req.query);
    try{
        const work =(req.query.work);
        // console.log(req.query.work);
        await task.deleteOne({
            "work": work,
        });
        console.log("Data deleted " ,work)
        return res.redirect('/');

    }
    catch{(error)=>{
        // console.log(req.query.work);
        console.log("Data delete nhi ho rha h ")
    }

    }
    // console.log(req.query.work)
    // let DeleteWork = req.query.work;
    // DeleteWork= decodeURIComponent(DeleteWork);
    // console.log(DeleteWork)

    // let workIndex = tasks.findIndex(e=> e.work== DeleteWork);

    // if (workIndex!=-1){
    //     tasks.splice(workIndex,1);
    // }
    // return res.redirect('back');
})


app.listen(port , (err)=>{
    if (err){
        console.log("Error in Server creation");
    }
    else{
        console.log("Port Successfully running on ", port);
    }
})
dbConnect();