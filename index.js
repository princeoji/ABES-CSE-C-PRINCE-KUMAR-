const express=require('express')
const app=express()

app.get("/",(req, res)=>{
    res.send('GET req to the homepage')
})
app.post("/",(req, res)=>{
    res.send('POST req to the homepage')
})


app.get("/profile",(req, res)=>{
    res.send("My Name is prince")
})

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000")
});
