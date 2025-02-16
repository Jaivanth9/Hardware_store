const express=require("express")

const app=express()
const path=require("path")
const collection=require("./mongodb")
const templetePath=path.join(__dirname,'../src/components')

app.use(express.json())
app.set("views",templetePath)
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.render('login');
  });

  app.get('/signup', (req, res) => {
    res.render('signup');
  });
  
  app.post('/signup', async (req, res) => {
    const { email, password}=req.body;
  
    await collection.insertMany({ email, password });
    res.render("eshwar-traders")

});




app.listen(3000, ()=>{
})
console.log("port connected");