const express = require('express')
const app = express()

app.get('',(req,res) => {
    res.send('Hello Express!')
})

app.get('/name', (req,res) =>{
    res.send('This is another requset and the name is Sukanta')
})
app.listen(3000, () =>{
    console.log('Server is Up and Running on port 3000')
})