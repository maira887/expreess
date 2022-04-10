
const express = require("express")
const app =express()
const PORT = 3000
app.get("/profile",(req,resp)=>{
    resp.send(data )
})

app.listen(PORT,()=>{
    console.log("server is running")
})
data=[
    {
       id:876,
       firstname:"maira",
       lastname:"yaseen",
       class:45 
    },

    {   id:879,
        firstname:"mahnoor",
        lastname:"yaseen",
        class:22

    },

    {   
        id:879,
        firstname:"maria",
        lastname:"yaseen",
        class:45

    },
]
