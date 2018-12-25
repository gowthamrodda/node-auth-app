import * as express from 'express';

const app= express();

app.get("/", (req, res) =>{
    res.json('Hello World')
})
const PORT = 1337

app.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})