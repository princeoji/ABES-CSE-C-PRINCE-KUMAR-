const express=require("express");
const app=express();
const port=3000;

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.post('/api/user',(req,res=>{
    console.log(req.body)
    res.status(201).json({MessageChannel:'user created',user:req.body})
}))
app.listen(port,()=>{
   console.log('exapmle app http://localhost:3000')
})