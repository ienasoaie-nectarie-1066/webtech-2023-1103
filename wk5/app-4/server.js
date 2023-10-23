import express from 'express'

const app = express()

app.use(express.static('public'))

app.locals.students=[{
    id:1,
    name:'jim'
},
{
    id:2,
    name:'jane'
}]

app.get('/students',(req,res)=>{
    res.status(200).json(app.locals.students)
})

app.get('/students/:sid',(req,res)=>{
    const git = parseInt(req.params.sid)
    const student = app.locals.students.find(e => e.id === git)
    if(student){
        res.status(200).json(student)
    }
    else{
        res.status(404).json({message: 'not found'})
    }
})
app.listen(8080)